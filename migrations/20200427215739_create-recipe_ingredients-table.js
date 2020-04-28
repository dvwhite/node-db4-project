
exports.up = function(knex) {
  knex.schema
    .createTable('recipe_ingredients', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
    
      // composite key
      tbl.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("recipe_ingredients");
};
