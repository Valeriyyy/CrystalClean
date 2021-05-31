exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("line_item")
    .createTable("line_item", (table) => {
      table.increments("id");
      table.integer("item").notNullable();
      table.uuid("job").notNullable();
      table.integer("quantity");
      table.decimal("price", [6], [2]);
      table.foreign("item").references("item.id");
      table.foreign("job").references("job.id");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("job");
};
