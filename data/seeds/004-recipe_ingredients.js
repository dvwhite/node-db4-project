
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").truncate()
    .then(function () {
      // add data into insert
      return knex("ingredients").insert([
        { recipe_id: 1, ingredient_id: 1 },
        { recipe_id: 1, ingredient_id: 2 },
        { recipe_id: 1, ingredient_id: 3 },
        { recipe_id: 1, ingredient_id: 4 },
        { recipe_id: 1, ingredient_id: 5 },
        { recipe_id: 1, ingredient_id: 6 },
        { recipe_id: 1, ingredient_id: 7 },
      ]);
    });
};
