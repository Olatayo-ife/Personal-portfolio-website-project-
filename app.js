import express from "express";
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");
app.get('/', (req, res) => {
    // We can pass data here if needed.
    // E.g., to conditionally show a message on the contact form (as set up in the EJS)
    const data = {
        message: null // No message on initial load
    };

    // Render the 'contact.ejs' file and pass the data object
    res.render('contact', data);
});

app.listen(3000,()=>{
  console.log("server is running on http://localhost:3000");
});