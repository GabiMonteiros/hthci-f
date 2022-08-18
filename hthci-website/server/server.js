const express = require('express');
const app = express();

//static files middleware - public css acess to browser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//routes
app.get('/home', (req, res) => {
    res.render('home',{title: 'Home Page'})
})
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get("/about", (req, res) => {
    res.render("about", { title: 'About Us' });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

app.get("/get-involved", (req, res) => {
    res.render("get-involved", { title: "Get Involved" });
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects" });
});

app.get("/team", (req, res) => {
    res.render("team", { title: "Team" });
});

app.get('/thankyou', (req, res) => {
    res.render("thankyou", { title: "Thanks" });
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: 'Not Found' });
});