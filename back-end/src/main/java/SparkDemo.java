package dto;
import static com.mongodb.client.model.Filters.eq;
import static dto.PaymentDto.fromDocument;
import static spark.Spark.*;

import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.bson.Document;

public class SparkDemo {

  public static void main(String[] args) {
    port(1234);

    MongoClient mongoClient = new MongoClient("localhost", 27017);
    // get ref to database
    MongoDatabase db = mongoClient.getDatabase("UsersDatabase");
    // get ref to collection
    MongoCollection<Document> usersCollection = db.getCollection("usersCollection");
    MongoCollection<Document> paymentsCollection = db.getCollection("paymentsCollection");


    Gson gson = new Gson();
    post("/login", (req, res) -> {
      String body = req.body();
      LoginDto loginDto = gson.fromJson(body, LoginDto.class);
      Document existingUser = usersCollection.find(eq("username", loginDto.username)).first();
      System.out.println(existingUser);

      if (existingUser != null) {
        if (existingUser.getString("password").equals(loginDto.password)) {
          return gson.toJson(new LoginResponseDto(null));
        } else {
          return gson.toJson(new LoginResponseDto("Invalid password"));
        }
      } else {
        //user does not exist
        return gson.toJson(new LoginResponseDto("User does not exist"));
      }
    });

    post("/register", (req, res) -> {
      String body = req.body();
      RegistrationDto registrationDto = gson.fromJson(body, RegistrationDto.class);
      Document existingUser = usersCollection.find(eq("username", registrationDto.username)).first();
      System.out.println(existingUser);
      if (!registrationDto.password.equals(registrationDto.confPassword)){
        //error: passwords do not match
        System.out.println("Password: " + registrationDto.password);
        System.out.println("Registration Password: " + registrationDto.confPassword);
        return gson.toJson(new RegistrationResponseDto("Confirmation Password does not match original password"));
      }
      else{
        if (existingUser == null){  //user does not exist -> create account
          var doc = new Document("username", registrationDto.username)
                  .append("password", registrationDto.password)
                  .append("balance", 0); // new account starts with 0 balance
          usersCollection.insertOne(doc);
          return gson.toJson(new RegistrationResponseDto(null));
        }
        else{
          //error: user already exists
          return gson.toJson(new RegistrationResponseDto("User already exists"));
        }
      }

    });

    get("/getFeed", (req, res) -> {
      System.out.println("getFeed route reached");
      List<PaymentDto> paymentDtos = new ArrayList<>();
      List<Document> allPayments = paymentsCollection.find().limit(100).into(new ArrayList<Document>());
      for (Document d : allPayments) {
        //Document -> toString -> json -> gson.fromJson -> Dto
        PaymentDto paymentDto = fromDocument(d);
        paymentDtos.add(paymentDto);
      }
      System.out.println(gson.toJson(paymentDtos));

      //iterate thro paymentsList
      //return a list of payments in a Dto
      return gson.toJson(paymentDtos);
    });

    post("/makePayment", (req, res) -> {
      // go from json -> dto -> document (DB)
      String body = req.body();
      PaymentDto paymentDto = gson.fromJson(body, PaymentDto.class);

      // TODO: 5/9/2022
      //check if logged-in user has enough $$$ in balance to make payment


      var doc = new Document("to", paymentDto.to)
              .append("from", paymentDto.from)
              .append("amount", paymentDto.amount)
              .append("type", paymentDto.type)
              .append("note", paymentDto.note);
      paymentsCollection.insertOne(doc);
      System.out.println(body);
      return "Payment made";
    });

    post("/lookupValidUser", (req, res) -> {
      System.out.println("lookup point reached");
      String body = req.body();
      LookupDto lookupDto = gson.fromJson(body, LookupDto.class);
      System.out.println(lookupDto.username);
      Document existingUser = usersCollection.find(eq("username", lookupDto.username)).first();
      if (existingUser != null){
        return gson.toJson(new LookupResponseDto(false, "Successful Payment"));
      }
      return gson.toJson(new LookupResponseDto(true, "User does not exist"));
    });
  }
}