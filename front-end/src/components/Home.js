import React from "react";
import { useEffect } from "react";
import MakePayment from "./MakePayment";
import Nav from "./Navigation"
import { Link } from "react-router-dom";


const Home = () => {
  const [feedData, setFeedData] = React.useState([]);

  const handleAdd = (data, arr, setter) => {
    setter(arr=>[...arr, data]);
  };

  useEffect(() => {
    const settings = {
      method: "get",
    };
    fetch("/getFeed", settings)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        data.forEach((element) => {
          console.log(element);
          handleAdd(element, feedData, setFeedData);
          console.log(feedData);
        });
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(feedData)

  return (
    <div class>
      <Nav />
      <h1>This is Home Page</h1>
      <Link to={"/login"}>
        <button>Log In</button>
      </Link>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
      <Link to={"/makePayment"}>
        <button>Make Payment</button>
      </Link>

      <div>
        <h1>Payment Feed Goes Here</h1>
        <div>
          {feedData.map((element, index) => (  
              <p key={index}>
                {element.from} sent {element.to} ${element.amount} <br></br>
                Payment Type: {element.type} <br></br>
                Message: {element.note} <br></br>
              </p>)  
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
