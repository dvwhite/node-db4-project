exports.up = function(knex) {
  return knex.schema
    .createTable("instructions", tbl => {
      tbl.increments()
      tbl.text("instruction", 128)
        .notNullable()
      tbl.integer("recipe_id")
        .unSigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
