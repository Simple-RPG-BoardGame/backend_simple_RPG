
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'IDK', score: '17'},
        {id: 2, username: 'IRL', score: '19'},
        {id: 3, username: 'AFK', score: '24'},
      ]);
    });
};
