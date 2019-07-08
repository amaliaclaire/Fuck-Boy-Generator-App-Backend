
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {
          id: 1,
          quote: 'Weebee',
          category: 'Cat',
          rank: 'fat'
        },
        {
          id: 2,
          quote: 'Deebee',
          category: 'cat',
          rank: 'killer'
        },
        {
          id: 3,
          quote: 'Sam',
          category: 'boyfrand',
          rank: 'best'
        },
        {
          id: 4,
          quote: 'Amalia',
          category: 'girlfriend',
          rank: 'best'
        },
        {
          id: 5,
          quote: 'Winston',
          category: 'stuffed animal',
          rank: 'animal'
        },
        {
          id: 6,
          quote: 'Dug',
          category: 'stuffed animal',
          rank: 'animal'
        },
        {
          id: 7,
          quote: 'Ted',
          category: 'stuffed animal',
          rank: 'animal'
        },

      ]);
    });
};
