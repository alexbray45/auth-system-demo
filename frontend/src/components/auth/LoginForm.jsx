import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import RememberMe from "./RememberMe";

function LoginForm() {
  // State variables to hold the email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Validation function to check if the email and password fields are not empty
  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Email is required.");
      return;
    }

    if (!password.trim()) {
      setErrorMessage("Password is required.");
      return;
    }

    // If validation passes, log the email and password to the console and navigate to the dashboard
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <RememberMe
        checked={rememberMe}
        onChange={(event) => setRememberMe(event.target.checked)}
      />

      <Button>Login</Button>

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
