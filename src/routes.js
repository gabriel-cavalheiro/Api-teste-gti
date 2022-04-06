const express = require('express');

const routes = express.Router();
const allProdcuts = [];

// Create

routes.post('/products', (request, response) => {
  const { name, price } = request.body;
  allProdcuts.push({ name, price });
  return response.status(200).json(allProdcuts);
});

module.exports = routes;
