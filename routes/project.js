import { Router } from "express";
const router = Router();

// Projects route
router.get("/", (req, res) => {
  res.render("project", { title: "My Projects" }); 
});

export default router;
