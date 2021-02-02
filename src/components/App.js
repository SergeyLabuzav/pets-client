import React from "react"
import Signup from "./auth/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./auth/Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./auth/ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={ Dashboard }/>
            <PrivateRoute path="/update-profile" component={ UpdateProfile }/>
            <Route path="/signup" component={ Signup }/>
            <Route path="/login" component={ Login }/>
            <Route path="/forgot-password" component={ ForgotPassword }/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
