const express = require("express");
const router = express.Router();

const { getRecipesWithIngredient } = require("./../recipes/recipeDb");
const { getIngredientById } = require("./ingredientDb");

router.get("/:id/recipes", validateIngredientId, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const recipes = await getRecipesWithIngredient(id);
    res.status(200).json(recipes);
  } catch (err) {
    errDetail(res, err);
  }
});

// Middlewarae
async function validateIngredientId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const recipe = await getIngredientById(id);
    if (!recipe) {
      return res.status(400).json({
        message: "Bad Request",
        validation: ["Ingredient id doesn't exist"],
        data: {},
      });
    }
    next();
  } catch (err) {
    errDetail(res, err);
  }
}

function errDetail(res, err) {
  console.log(err);
  return res.status(500).json({
    message: "Unable to complete the required operation",
    validation: [],
    data: {},
  });
}

module.exports = router;
