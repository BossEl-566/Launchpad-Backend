import { Router } from "express";

const router = Router();

router.post("/sign-up", (req, res) => {
  // Handle user sign-up logic here
  res.send("User signed up successfully!");
});


export default router;