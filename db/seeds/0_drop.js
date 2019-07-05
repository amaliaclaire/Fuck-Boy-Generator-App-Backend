exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()

    .then(function () {
      return knex('responses').del()
    })
};
