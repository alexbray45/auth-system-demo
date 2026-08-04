import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (email === "") {
      setErrorMessage("Email is required.");
      return;
    }

    if (password === "") {
      setErrorMessage("Password is required.");
      return;
    }

    console.log("Login Successful");
    console.log(email);
    console.log(password);
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Login</button>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
