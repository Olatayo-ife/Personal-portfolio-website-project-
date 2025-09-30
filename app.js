import express from "express";
const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");

app.get('/contact', (req,res) =>{
        res.render('contact', { title: 'Contact Us', intro: 'Have a project in mind or just want to say hello? Feel free to reach out! always open to new opportunities and collaborations.', contactMe:+2347066058238});
});
app.get('/', (req, res) => {
    // Data to be passed to the EJS template
    
    const data = {
        message: null // No message on initial load
    };

    // Render the 'contact.ejs' file and pass the data object
    res.render('contact', data);
});

app.listen(3000,()=>{
  console.log("server is running on http://localhost:3000");
});