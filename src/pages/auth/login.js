import React from "react";
import { useHistory } from "react-router";
export default function Login() {
  
  // hooks
  const history=useHistory()
  
  // methods
  const handleLogin = () => {
    localStorage.setItem("token", "t01");
    history.push("dashboard")
  };
  
  // JSX
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
