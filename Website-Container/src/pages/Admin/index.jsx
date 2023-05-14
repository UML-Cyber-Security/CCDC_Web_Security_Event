import React, { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import "./style.css";

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleLogin = (username, password) => {
      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsLoggedIn(true);
          setErrorMessage(null);
        } else {
          setIsLoggedIn(false);
          setErrorMessage('Invalid username or password');
        }
      });
    };
  
    return (
      <div className="adminPageForm">
        <h1>Admin Page</h1>
        {isLoggedIn ? (
          <div>
            <h2>Login successful!</h2>
            <p>Welcome to the admin page.</p>
          </div>
        ) : (
          <div>
            <LoginForm onLogin={handleLogin} />
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        )}
      </div>
    );
}

export default Admin;