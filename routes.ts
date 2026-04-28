import express from "express";
import type { Router, Request, Response } from "express";
import { luhnCheck } from "./luhn.js";

const router = express.Router();

router.post("/validate-card", (req: Request, res: Response) => {
  const { cardNumber } = req.body;

  // Handle missing input
  if (!cardNumber) {
    res.status(400).json({
      success: false,
      message: "Card number is required",
    });
    return;
  }

  // Handle non-string input
  if (typeof cardNumber !== "string") {
    res.status(400).json({
      success: false,
      message: "Please enter a valid card number",
    });
    return;
  }

  // Handle empty string
  if (cardNumber.trim() === "") {
    res.status(400).json({
      success: false,
      message: "Card number cannot be empty",
    });
    return;
  }

  const isValid = luhnCheck(cardNumber);

  if (isValid) {
    res.status(200).json({
      success: true,
      valid: true,
      message: "Card number is valid",
    });
  } else {
    res.status(200).json({
      success: true,
      valid: false,
      message: "Card number is invalid",
    });
  }
});

export default router;
