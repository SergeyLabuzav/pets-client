import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleLogin(e) {
    await handleSubmit(e, false);
  }

  async function handleGoogleLogin(e) {
    await handleSubmit(e, true);
  }

  async function handleSubmit(e, isGoogle) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      if (isGoogle) {
        await loginWithGoogle();
      } else {
        await login(emailRef.current.value, passwordRef.current.value);
      }
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          { error && <Alert variant="danger">{ error }</Alert> }
          <Form onSubmit={ handleSubmit }>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={ emailRef } required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={ passwordRef } required/>
            </Form.Group>
            <Button disabled={ loading }
                    className="w-100"
                    onClick={ handleLogin }>
              Log In
            </Button>
            <hr/>
            <Button disabled={ loading }
                    className="w-100"
                    onClick={ handleGoogleLogin }>With Google
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
