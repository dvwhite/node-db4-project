const express = require("express");
const server = express();
const cors = require("cors");

// Middleware
server.use(express.json());
server.use(cors());

// Routes
const recipeRoutes = require("./routes/recipes/recipeRouter");
const ingredientRoutes = require("./routes/ingredients/ingredientRouter");
server.use("/api/recipes", recipeRoutes)
server.use("/api/ingredients", ingredientRoutes)

// Error middleware
server.use((err, req, res, next) => {
  console.log(err)
  if (err) {
    return res.status(500).json({
      message: "There was an error performing the required operation",
      validation: [],
      data: {}
    });
  }
})

module.exports = server;
