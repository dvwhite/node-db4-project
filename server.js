const express = require("express");
const server = express();
const cors = require("cors");

// Middleware
server.use(express.json());
server.use(cors());

// Routes
const recipeRoutes = require("./recipes/recipeRouter");
const ingredientRoutes = require("./ingredients/ingredientRouter");
server.use("/api/recipes", recipeRoutes)
server.use("/api/ingredients", ingredientRoutes)

// Error middleware
server.use((err, req, res) => {
  if (err) {
    return res.status(500).json({
      message: "Unable to complete the required operation",
      validation: [],
      data: {}
    });
  }
})

module.exports = server;
