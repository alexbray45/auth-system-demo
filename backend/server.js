import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    message: "Login request received",
  });
});

app.get("/", (req, res) => {
  res.send("Enterprise Auth System API is running");
});

app.listen(5000, () => {
  console.log("Server running on http:/localhost:5000");
});
