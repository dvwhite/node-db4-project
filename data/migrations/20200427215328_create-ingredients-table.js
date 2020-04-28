
exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments()
      tbl.text("name", 128)
        .notNullable()
      tbl.float("quantity")
        .notNullable()
      tbl.integer("recipe_id")
        .unSigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
