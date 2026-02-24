import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  if (token) {
    return <Dashboard setToken={setToken} />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showRegister ? <Register /> : <Login setToken={setToken} />}
      <br /><br />
      <button onClick={() => setShowRegister(!showRegister)} className="btn liquid">
        {showRegister ? "Go to Login" : "Go to Register"}
      </button>
    </div>
  );
}

export default App;