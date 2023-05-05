import React, { useState } from "react";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./Login.css";
import { auth } from "../../Firebase/FirebaseConfig";
import { Link, useHistory } from "react-router-dom";


function Login() {
  //router
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          history.push("/");
        })
        .catch((error) => {
          alert(
            "Opps! something went wrong please check your console for more info"
          );
          console.error(error.message);
        });
    } else {
      alert("Please Enter all the fields");
    }
  };

  return (
    <div className="login">
      <Container>
        <Grid centered columns={3} doubling stackable>
          <Grid.Column>
            <h2>Sign In</h2>

            <Card>
              <Form className="login__form">
                <Form.Field required>
                  <label>E-mail</label>
                  <input
                    placeholder="Enter Email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input
                    placeholder="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Field>
                
                <Button color="green" type="submit" onClick={loginUser}>
                  Login
                </Button>
                {/* <p>
                   create account <a href="./Signup.js"></a>
                </p>
                <span className={styles.register}>
                <p>Don't have an account?</p>
                &nbsp;<Link to="/register">Register</Link>
                </span> */}
              <p>Don't have an account?</p>
                &nbsp;<Link to="/signup">Register</Link>
            
              </Form>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
