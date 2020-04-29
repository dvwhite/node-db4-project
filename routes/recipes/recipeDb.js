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

function getShoppingList(recipe_id) {
  return db("recipes as r")
    .select(["i.name", "i.quantity"])
    .leftJoin("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .leftJoin("ingredients as i", "i.id", "ri.ingredient_id")
}
