import { useState } from "react";
import API from "./api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await API.post("/register", { username, password });
    alert(res.data.msg);
  };

  return (
    <div style={{backgroundColor:"indigo",margin:"auto",borderRadius:"20px"}}>
      <h2 style={{ color: "blue" , background:"red" , margin:"auto" }}>Register</h2>
      <input
      style={{backgroundColor:"white",width:"100px",border:"none",margin:"10px",borderRadius:"20px"}}
      placeholder="Username"
      onChange={e => setUsername(e.target.value)}
      />
      <input
      style={{backgroundColor:"white",width:"100px",border:"none",margin:"10px",borderRadius:"20px"}}
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} style={{border:"none", margin:"20px",borderRadius:"20px",backgroundColor:"hotpink"}} className="btn liquid">Register</button>
    </div>
  );
}

export default Register;