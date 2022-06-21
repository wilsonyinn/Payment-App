import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles.module.css"

const MakePayment = () => {
  // state variables
  const [to, setTo] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("");
  const [note, setNote] = React.useState("");
  const [response, setResponse] = React.useState("");

  function makePayment() {
    const paymentBody = {
      to: to,
      from: from,
      amount: amount,
      type: type,
      note: note,
    };
    const paymentSettings = {
      method: "post",
      body: JSON.stringify(paymentBody),
    };
    const lookupBody = {
      username: to,
    };
    const lookupSettings = {
      method: "post",
      body: JSON.stringify(lookupBody),
    };
    fetch("/lookupValidUser", lookupSettings)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error === false) {
          fetch("/makePayment", paymentSettings);
        }
        setResponse(data.response);
      })
      .catch((e) => console.log(e));
    console.log(response);
    console.log("Payment made");
  }

  return (
    <div>
      <Form className={styles.centerForm}>
        <h2>Send Money</h2>
        <Form.Group className="m-3" style={{ width: "400px" }} controlId="formBasicRecipient">
          <Form.Label>Recipient</Form.Label>
          <Form.Control type="text" placeholder="Recipient" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: "400px" }} controlId="formBasicSender">
          <Form.Label>Sender</Form.Label>
          <Form.Control type="text" placeholder="Sender" />
        </Form.Group>
        
        <Form.Group className="mb-3" style={{ width: "400px" }} controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Amount" />
        </Form.Group>
        
        <Form.Group className="mb-3" style={{ width: "400px" }} controlId="formBasicAmount">
          <Form.Label>Note</Form.Label>
          <Form.Control type="text" placeholder="Note" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: "400px" }} controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the Terms & Services" />
        </Form.Group>
        <Button className="mt-4" onClick={makePayment}>Send Payment</Button>
      </Form>
      {/* <Alert>Successful Payment</Alert> */}
    </div>
  );
};

export default MakePayment;
