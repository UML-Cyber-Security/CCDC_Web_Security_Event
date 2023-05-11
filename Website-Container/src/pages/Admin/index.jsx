import React from "react";
import LoginForm from "../../components/Login/LoginForm";

function Admin() {
 const handleLogin = (username, password) => {
 // Add your login logic here
 };

 return (
 <div>
 <h1>Admin Page</h1>
 <LoginForm onLogin={handleLogin} />
 </div>
 );
}

export default Admin;