import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/ui/Card";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <MainLayout>
      <Card>
        <h1>Create Account</h1>
        <p>Create an account to get started.</p>

        <RegisterForm />
        <p>
          Already have an account? <Link to="/login">Sign In</Link>{" "}
        </p>
      </Card>{" "}
    </MainLayout>
  );
}

export default Register;
