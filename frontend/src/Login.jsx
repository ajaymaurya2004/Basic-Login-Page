import { useState } from "react";
import API from "./api";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", { username, password });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{backgroundColor:"olivedrab",margin:"auto", borderRadius:"20px",color:"black"}}>
      <h2 style={{ color: "blue" , background:"red" , margin:"auto" }}>Login</h2>
      <input
      style={{backgroundColor:"white",width:"100px",border:"none",margin:"10px",borderRadius:"20px",color:"black"}}
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
      style={{backgroundColor:"white",width:"100px",border:"none",margin:"10px",borderRadius:"20px",color:"black"}}
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} style={{border:"none", margin:"20px",borderRadius:"20px",backgroundColor:"hotpink"}} className="btn liquid">Login</button>
    </div>
  );
}

export default Login;