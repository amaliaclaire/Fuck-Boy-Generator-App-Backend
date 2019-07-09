
const knex = require("../../db/knex")
const uuid = require("uuid/v4")


const getResponses = (body) => {
  return knex("responses")
  .select("quote")
  .where(body)
  .then(result => result)
  .catch(err => console.error(err))
}

const createResponse = (id, quote, category, rank) => {
  return knex("responses")
  .insert({
    id,
    quote,
    category,
    rank
  })
  .then(result => result)
  .catch(err => console.error(err))
}

const updateOne = (id, body) => {
  return knex("responses")
  .update(body)
  .then(result => result)
  .catch(err => console.error(err))
}

const deleteResponse = (id) => {
  return knex('responses')
    .where(id)
    .del()
    .then(result => result)
    .catch(err => console.error(err))
}

module.exports = {getResponses, createResponse, updateOne, deleteResponse}
