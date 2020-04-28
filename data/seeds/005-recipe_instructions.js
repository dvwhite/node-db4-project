
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions").truncate()
    .then(function () {
      // add data into insert
      return knex("instructions").insert([
        { recipe_id: 1, instruction_id: 1 },
        { recipe_id: 1, instruction_id: 2 },
        { recipe_id: 1, instruction_id: 3 },
        { recipe_id: 1, instruction_id: 4 },
        { recipe_id: 1, instruction_id: 5 },
      ]);
    });
};
