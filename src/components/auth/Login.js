import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import paw from "../../assets/paw.svg";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login, loginWithGoogle} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleLogin(e) {
    await handleSubmit(e, false);
  }

  async function handleGoogleLogin(e) {
    await handleSubmit(e, true);
  }

  async function handleSubmit(e, isGoogle) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      if (isGoogle) {
        await loginWithGoogle()
      } else {
        await login(emailRef.current.value, passwordRef.current.value)
      }
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src={ paw }
          alt=""/>
        <h1>Welcome back</h1>
        { error && <Alert variant="danger">{ error }</Alert> }
        <div className="mb-2">
          <input className="custom__input" type="text" placeholder="login" ref={ emailRef } required/>
        </div>
        <div className="mb-3">
          <input className="custom__input" type="password" placeholder="password" ref={ passwordRef } required/>
        </div>
        <button disabled={ loading }
                className="custom-button primary__button"
                onClick={ handleLogin }>Log In
        </button>
        <hr/>
        <button disabled={ loading }
                className="custom-button primary__button"
                onClick={ handleGoogleLogin }>With Google
        </button>
        <div className="login__footer">
          <p>Forgot Password? <Link to="/forgot-password"> Create a new one</Link></p>
          <p>Need an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
