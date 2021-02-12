import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import paw from "../../assets/paw.svg";

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleReset(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
    setLoading(false)
  }

  return (
    <div className="forgotPassword">
      <div className="forgotPassword__container">
        <img
          src={ paw }
          alt=""/>
        <h1 className="text-center mb-4">Password Reset</h1>
        { error && <Alert variant="danger">{ error }</Alert> }
        { message && <Alert variant="success">{ message }</Alert> }
        <div className="mb-3">
          <input className="custom__input" type="email" placeholder="email" ref={ emailRef } required/>
        </div>
        <button disabled={ loading }
                className="custom-button primary__button"
                onClick={ handleReset }>Reset Password
        </button>
        <div className="forgotPassword__footer">
          <p>Already have an account? <Link to="/login"> Log in</Link></p>
          <p>Need an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
