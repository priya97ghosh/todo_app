const express = require("express");
const app = express();

//  getting error is undefiend.

//GET Method
app.get('/', (req, res) => {
    res.render("todo.ejs");
})

// POST Method
app.post('/', (req, res) => {
    console.log(req.body);
})
app.set("view engine", "ejs");

app.use(express.urlencoded({
    extended:true
}));

app.listen(3000, () =>
console.log("server is running on port 3000")
);