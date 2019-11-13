exports.up = function(knex) {
  return knex.schema
    .createTable("zoos", tbl => {
      tbl.increments("id");
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
      tbl
        .text("address", 128)
        .unique()
        .notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments("id");
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
      tbl.text("species", 128).notNullable();
      tbl
        .integer("zoo_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("zoos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("zoos").dropTableIfExists("animals");
};
