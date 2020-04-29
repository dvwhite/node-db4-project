const db = require("./../../data/dbConfig");

module.exports = { getIngredientById }

function getIngredientById(ingredient_id) {
  return db("ingredients")
    .where({ id: ingredient_id })
    .first();
};