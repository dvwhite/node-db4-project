
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").truncate()
    .then(function () {
      // add data into insert
      return knex("ingredients").insert([
        { name: "Butter, cubed", quantity: "1/2 cup" },
        { name: "Flour", quantity: "2 1/2 cup" },
        { name: "Molasses", quantity: "1/3 cup" },
        { name: "Boiling water", quantity: "2 1/3 cup" },
        { name: "Old-fashioned oats", quantity: "1 cup" },
        { name: "Active dry yeast", quantity: "5 teaspons" },
        { name: "Salt", quantity: "2 teapoons" }
      ]);
    });
};
