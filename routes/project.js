import { Router } from "express";
const router = Router();

// Projects route
router.get("/", (req, res) => {
  res.render("projects"); 
});

export default router;
