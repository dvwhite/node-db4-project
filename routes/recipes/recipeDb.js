const db = require("./../../data/dbConfig");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getRecipesWithIngredient
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

function getInstructions(recipe_id) {
  return db("recipes as r")
    .select(["i.number", "i.step"])
    .leftJoin("recipe_instructions as ri", "r.id", "ri.recipe_id")
    .leftJoin("instructions as i", "i.id", "ri.instruction_id")
    .orderBy("i.number")
}

function getRecipesWithIngredient(ingredient_id) {
  return db("recipes as r")
    .select(["r.name"])
    .leftJoin("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .leftJoin("ingredients as i", "i.id", "ri.ingredient_id")
    .where("i.id", ingredient_id)
}