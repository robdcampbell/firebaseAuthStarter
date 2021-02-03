import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;