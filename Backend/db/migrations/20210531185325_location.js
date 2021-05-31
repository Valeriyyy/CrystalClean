exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("location")
    .createTable("location", (table) => {
      table.uuid("id").defaultTo(knex.raw("uuid_generate_v4 ()"));
      table.string("address", [50]);
      table.string("unit", [7]);
      table.string("city", [20]);
      table.string("state", [2]);
      table.string("zip", [5]);
      table.string("gate_code");
      table.string("notes");
      table.primary(["id"]);
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("location");
};
