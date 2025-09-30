import express from "express";
import projectRoutes from "./routes/project.js";
import contactRoutes from "./routes/contact.js";

const app = express();

app.set("view engine", "ejs");

// Use routes
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

export default app;
