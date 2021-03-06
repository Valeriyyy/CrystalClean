exports.up = function (knex) {
  return knex.schema.createTable("job", (table) => {
    table.uuid("id").notNullable().defaultTo(knex.raw("uuid_generate_v4 ()"));
    table.uuid("client").notNullable();
    table.uuid("location").notNullable();
    table.increments("order_number", { primaryKey: false });
    table
      .enu("status", ["scheduled", "canceled", "paid", "on_hold"])
      .defaultTo("scheduled");
    table.decimal("estimated_price", 6, 2);
    table.decimal("total_price", 6, 2);
    table.decimal("tip", 6, 2);
    table.string("notes");
    table.datetime("start_at", { useTz: false }).notNullable();
    table.datetime("end_at", { useTz: false }).notNullable();
    table.datetime("paid_at", { useTz: false });
    table.enu("payment_method", ["cash", "check", "card"]);
    table.timestamps(true, true);
    table.primary("id");
    table.foreign("client").references("client.id");
    table.foreign("location").references("location.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("job");
};
