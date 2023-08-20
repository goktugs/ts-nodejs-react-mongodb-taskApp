import express from "express";
import router from "./routes/authRoutes";

const app = express();

app.use(express.json());

// routes

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.send("Helloss  World");
});

export default app;
