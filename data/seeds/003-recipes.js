
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes").truncate()
    .then(function () {
      // add data into insert
      return knex("recipes").insert([
        { name: "Old-Fashioned Brown Bread" }
      ]);
    });
};
