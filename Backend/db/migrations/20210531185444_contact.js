exports.up = function (knex) {
  return knex.schema.createTable("contact", (table) => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4 ()"));
    table.string("first_name", [25]);
    table.string("last_name", [25]);
    table.string("phone", [15]);
    table.string("email", [50]);
    table.string("notes");
    table.uuid("client");
    table.primary(["id"]);
    table.foreign("client").references("client.id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("contact");
};
