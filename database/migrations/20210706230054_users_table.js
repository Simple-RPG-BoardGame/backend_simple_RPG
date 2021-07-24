
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (tbl) => {
            tbl.increments('id');
            tbl.string('username', 3).notNullable()
            tbl.integer('score').notNullable()
            tbl.timestamp('created').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
