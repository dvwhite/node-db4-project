exports.up = function(knex) {
  knex.schema
    .createTable("instructions", tbl => {
      tbl.increments()
      tbl.text("name", 128)
        .notNullable()
    });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("instructions");
};
