
const knex = require("../../db/knex")
const uuid = require("uuid/v4")


getResponses = (body) => {
  return knex("responses")
  .select("quote")
  .where(body)
  .then(result => result)
  .catch(err => console.error(err))
}


module.exports = {getResponses}
