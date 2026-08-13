import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Input from "../ui/Input";
import authService from "../../services/authService";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Name is required.");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("Email is required.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setErrorMessage("Password is required.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }
    if (!confirmPassword.trim()) {
      setErrorMessage("Please confirm your password.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await authService.register(name, email, password);

      console.log(response);

      navigate("/login");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to create account. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <Button type="submit">Create Account</Button>

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default RegisterForm;
