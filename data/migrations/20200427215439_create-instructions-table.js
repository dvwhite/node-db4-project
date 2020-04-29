exports.up = function(knex) {
  return knex.schema
    .createTable("instructions", tbl => {
      tbl.increments()
      tbl.text("step", 128)
        .notNullable()
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
