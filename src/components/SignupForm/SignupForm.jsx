import { useState } from "react";
import "./SignupForm.css";

export function SignupForm() {
  const [username, setUsername] = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!username || !email || !password) { alert("Please fill in all fields."); return; }
    if (!/\S+@\S+\.\S+/.test(email))      { alert("Please enter a valid email address."); return; }
    alert("Sign Up successful!");
  };

  const handleCancel = () => { setUsername(""); setEmail(""); setPassword(""); };

  return (
    <div className="signup-content">
      <div className="signup-container">
        <input className="signup-input" type="text"     placeholder="Username"          value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="signup-input" type="email"    placeholder="example@gmail.com" value={email}    onChange={(e) => setEmail(e.target.value)} />
        <input className="signup-input" type="password" placeholder="Password"          value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="signup-buttons">
          <button className="btn-submit" onClick={handleSignUp}>Sign Up</button>
          <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}