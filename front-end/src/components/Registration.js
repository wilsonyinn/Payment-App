import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "../styles.module.css";

const Registration = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isRegistered, setIsRegistered] = React.useState(false);

  const handleSubmit = () => {
    const body = {
      username: username,
      password: password,
      confPassword: confPassword,
    };
    const settings = {
      method: "post",
      body: JSON.stringify(body),
    };
    fetch("/register", settings)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        if (error == null) {
          console.log("user made");
          setIsRegistered(true);

          // } else if (data.error) {
          //   setError(data.error); //show error
          //   console.log(error)
          // }
        }
      })
      .catch((e) => console.log(e));
  };
  if (isRegistered) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Form className={styles.centerForm}>
        <h2 className="mb-3">Register</h2>
        <Form.Group
          value={email}
          style={{ width: "400px" }}
          onChange={(e) => setEmail(e.target.value)}
          className="m-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group
          value={username}
          style={{ width: "400px" }}
          onChange={(e) => setUsername(e.target.value)}
          className="m-3"
          controlId="formBasicUsername"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group
          value={password}
          style={{ width: "400px" }}
          onChange={(e) => setPassword(e.target.value)}
          className="m-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group
          value={confPassword}
          style={{ width: "400px" }}
          onChange={(e) => setConfPassword(e.target.value)}
          className="m-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to Terms & Services" />
        </Form.Group>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      {/* <div>
        Username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        Confirm Password
        <input
          type="password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {error} */}
    </div>
  );
};

export default Registration;
