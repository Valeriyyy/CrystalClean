exports.up = function (knex) {
  return knex.schema.dropTableIfExists("item").createTable("item", (table) => {
    table.increments("id");
    table.string("name", [30]);
    table.decimal("default_price", [6], [2]);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {};
