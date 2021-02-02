import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import paw from "../../assets/paw.svg";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <img
          src={ paw }
          alt=""/>
        <h1>Sign Up</h1>
        { error && <Alert variant="danger">{ error }</Alert> }
        <div className="mb-2">
          <input className="custom__input" type="text" placeholder="login" ref={ emailRef } required/>
        </div>
        <div className="mb-2">
          <input className="custom__input" type="password" placeholder="password" ref={ passwordRef } required/>
        </div>
        <div className="mb-3">
          <input className="custom__input" type="password" placeholder="confirm password" ref={ passwordConfirmRef }
                 required/>
        </div>
        <button disabled={ loading }
                className="custom-button primary__button"
                onClick={ handleSubmit }>Sign Up
        </button>
        <div className="signup__footer">
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  )
}
