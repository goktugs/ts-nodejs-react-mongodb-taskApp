import express from "express";
import authController from "../controllers/authController";

const router = express.Router();

router.post("/register", (req, res) => {
  authController.register(req, res);
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

router.post("/upload-avatar", (req, res) => {
  res.send("You are trying to upload avatar");
});

export default router;
