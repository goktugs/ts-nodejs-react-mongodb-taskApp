import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("You are trying to sign up");
});

router.post("/login", (req, res) => {
  res.send("You are trying to sign in");
});

router.post("/logout", (req, res) => {
  res.send("You are trying to sign out");
});

router.post("/refresh", (req, res) => {
  res.send("You are trying to refresh");
});

export default router;
