
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe_instructions', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
      tbl.integer('instruction_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
    
      // composite key
      tbl.primary(['recipe_id', 'instruction_id']);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_instructions");
};
