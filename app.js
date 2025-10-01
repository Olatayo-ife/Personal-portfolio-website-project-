import express from "express";
import projectRoutes from "./routes/project.js";
import contactRoutes from "./routes/contact.js";
import aboutRoutes from "./routes/about.js";
import homeRoutes from "./routes/home.js";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use("/home", home);
app.use("/about", about);
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

app.all('*', (req, res) => {
  res.render("404");
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
