import { useEffect, useState } from "react";
import API from "./api";
import './Dashboard.css'

function Dashboard({ setToken }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    API.get("/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setMessage(res.data.msg);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <h2 style={{color:"olive"}} className="slide-in-text">{message}</h2>
      <button onClick={logout} className="btn liquid">Logout</button>
    </div>
  );
}

export default Dashboard;