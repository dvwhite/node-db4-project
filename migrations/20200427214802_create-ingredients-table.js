
exports.up = function(knex) {
  knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments()
      tbl.text("name", 128)
        .notNullable()
      tbl.float("quantity")
        .notNullable()
    });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("ingredients");
};
