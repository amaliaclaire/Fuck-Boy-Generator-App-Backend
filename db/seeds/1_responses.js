const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {
          id: uuidv4(),
          quote: 'Weebee',
          category: 'Cat',
          rank: 'fat'
        },
        {
          id: uuidv4(),
          quote: 'Deebee',
          category: 'cat',
          rank: 'killer'
        },
        {
          id: uuidv4(),
          quote: 'Sam',
          category: 'boyfrand',
          rank: 'best'
        },
        {
          id: uuidv4(),
          quote: 'Amalia',
          category: 'girlfriend',
          rank: 'best'
        },
        {
          id: uuidv4(),
          quote: 'Winston',
          category: 'stuffed animal',
          rank: 'animal'
        },
        {
          id: uuidv4(),
          quote: 'Dug',
          category: 'stuffed animal',
          rank: 'animal'
        },
        {
          id: uuidv4(),
          quote: 'Ted',
          category: 'stuffed animal',
          rank: 'animal'
        },

      ]);
    });
};
