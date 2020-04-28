
exports.up = function(knex) {
  knex.schema
    .createTable("recipes", tbl => {
      tbl.increments()
      tbl.text("name", 128)
      tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
      tbl.integer("instruction_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("instructions")
    })
};

exports.down = function(knex) {
  knex.scheme.dropTableIfExists("recipes");
};
