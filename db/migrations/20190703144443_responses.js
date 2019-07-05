
exports.up = function(knex, Promise) {
  return knex.schema.createTable("responses", table => {
    table.increments();
    table
      .string("quote")
      .notNullable()
      .defaultTo("");
    table
      .text("category")
      .notNullable()
      .defaultTo("");
    table
      .text("rank")
      .notNullable()
      .defaultTo("");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("responses");
};
