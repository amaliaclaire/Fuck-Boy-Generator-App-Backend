export.seed = (knex) => {
  return knex('responses').del()
  .then(() => {
    return knex('responses').insert([
      {
        id: 1,
        quote: "deebee",
        category: 'cat',
        rank: 'test',
      },
      {
        id: 2,
        quote: "weebee"",
        category: 'cat',
        rank: 'test',
      },
      {
        id: 3,
        quote: "winston",
        category: 'bunn',
        rank: 'test',
      },
      {
        id: 4,
        quote: "dug",
        category: 'komodo dragon',
        rank: 'test',
      },
    ])
  }).then(() => {
    return knex.raw(
      "SELECT setval('responses_id_seq', (SELECT MAX(id) FROM responses))"; 
    )
  })
}
