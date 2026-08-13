import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import connectDB from "./config/db.js";
import User from "./models/User.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Account created successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      message: "Unable to create account.",
    });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password.",
    });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({
      message: "Invalid email or password.",
    });
  }

  res.status(200).json({
    message: "Login successful.",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

app.get("/", (req, res) => {
  console.log("ROOT ROUTE HIT");
  res.send("Enterprise Auth System API is running");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  } catch (error) {
    console.error("Server failed to start:", error.message);
  }
};

startServer();
