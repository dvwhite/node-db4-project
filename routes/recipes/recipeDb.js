const db = require("./../../data/dbConfig");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(recipe_id) {
  return db("recipes")
    .where({ id: recipe_id })
    .first();
}

