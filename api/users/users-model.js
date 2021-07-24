const db = require('../../database/dbConfig');

module.exports = {
    find,
    findChamps,
    findBy,
    findById,
    add,
    update,
    deleteById
};

function find() {
    return db('users').orderBy('id');
}

function findChamps() {
    return db('users')
        .select('username', 'score')
        .orderBy('score', 'desc')
}

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users').where({id});
}

function add(user) {
    return db('users')
        .insert(user, "id")
}

function update(user, id) {
    return db('users')
        .where({ id })
        .update(user)
}

function deleteById(id) {
    return db('users')
        .where({id})
        .del()
}