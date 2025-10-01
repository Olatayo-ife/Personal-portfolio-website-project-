import express from "express";
import about from "./routes/about.js";
import home from "./routes/home.js";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(about);
app.use(home);
app.use(contact);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 