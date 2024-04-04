// const querystring = require ('querystring');

// Aca muestra todos los productos
const index = (req, res) => {
  // const query = querystring.stringify(req.query);

     fetch('https://fakestoreapi.com/products?limit=5')
              .then(res=>res.json())
              .then(json=>console.log(json))

};

// Aca muestra un producto en especifico
const show = (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((producto) => res.json(producto));
};

module.exports = {
  index,
  show,
};
