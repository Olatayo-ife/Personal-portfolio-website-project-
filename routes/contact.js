import { Router } from "express";
const router = Router();

// Contact route
router.get("/", (req, res) => {
  res.render("contact", { title: "Get In Touch" }); 
});

export default router;
