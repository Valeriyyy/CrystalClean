exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("client")
    .createTable("client", (table) => {
      table.uuid("id").defaultTo(knex.raw("uuid_generate_v4 ()"));
      table.string("name", [50]);
      table.string("phone", [15]);
      table.string("email", [50]);
      table.string("notes");
      table.enu("rating", [1, 2, 3, 4, 5]);
      table.timestamps(true, true);
      table.primary(["id"]);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("client");
};
