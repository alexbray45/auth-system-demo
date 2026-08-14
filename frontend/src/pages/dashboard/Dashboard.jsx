import { useEffect } from "react";
import authService from "../../services/authService";

function Dashboard() {
  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await authService.me();

        console.log("Authenticated user:", response.user);
      } catch (error) {
        console.error("Unable to load user:", error);
      }
    };

    loadUser();
  }, []);

  return <h1>Dashboard Page</h1>;
}

export default Dashboard;
