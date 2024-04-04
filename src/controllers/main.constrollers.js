const path = require('path');


// Llama a la vista principal que esta en views.ejs
const index = (req, res) => {
    res.render("index");
    // res.sendFile(path.resolve(__dirname,"../../private/index.html"));
};


// Controlador de ruta layout 
const private = (req, res) => {
    // console.log(__dirname )
    res.sendFile(path.resolve(__dirname,"../../private/index.html"));
};
module.exports = {
    index,
    private,
};