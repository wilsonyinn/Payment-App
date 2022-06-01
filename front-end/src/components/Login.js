import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "../styles.module.css";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSubmit = () => {
    const body = {
      username: username,
      password: password,
    };
    const settings = {
      method: "post",
      body: JSON.stringify(body),
    };
    fetch("/login", settings)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        if (error == null) {
          setIsLoggedIn(true);
          console.log("Hiii");
        } else if (data.error) {
          console.log(error);
        }
      })
      .catch((e) => console.log(e));
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Form className={styles.centerForm}>
        <h2 className="mb-4">Log In</h2>
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

        <Button className="m-3" onClick={handleSubmit}>
          Submit
        </Button>
        <Form.Text className="text-muted">
          Don't have an account? <a href="register">Register Here!</a>
        </Form.Text>
      </Form>
      {error}
      {/* <div>
        Username
        <input value={username} onChange={(e) => updateUsername(e)} />
      </div>
      <div>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {error} */}
    </div>
  );
};

export default Login;
