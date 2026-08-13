import { useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/ui/Card";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  useEffect(() => {
    document.title = "Enterprise Auth System | Sign In";
  }, []);

  return (
    <MainLayout>
      <Card>
        <h1>Sign In</h1>

        <p>Welcome back! Please enter your details to sign in.</p>

        <LoginForm />

        <p>
          <Link to="/forgot-password">Forgot Password</Link>
        </p>

        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Card>
    </MainLayout>
  );
}

export default Login;
