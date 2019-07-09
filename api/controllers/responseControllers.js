const model = require("../models/responseModels")
const uuidv4 = require('uuid/v4')



getResponses = (req, res, next) => {
  model.getResponses(req.body)
  .then(quotes => res.status(200).send({quotes}))
  .catch(err => console.error(err))
}

createResponses = (req, res, next) => {
  const {quote, category, rank} = req.body
  const newId = uuidv4()

  if(!quote || !category || !rank) {
    res.status(500).send(`one or more of the required columns is empty`)
  } else {

    model.createResponse(newId, quote, category, rank)
    .then(result => res.status(200).send('succeeded'))
  }
}

updateResponses = (req, res, next) => {
    if (!req.query.id) res.status(500).send('ID Needed.')
    if (!Object.keys(req.body).length) res.status(500).send('Please designate a column to be updated.')
    model.updateOne(req.query, req.body)
        .then(result => res.status(200).send('Column ' + Object.keys(req.body).toString() + ' from row ' + req.query.id + ' has been updated.'))
        .catch(err => console.error(err))
}


deleteResponses = (req, res, next) => {
    if (!req.params.id) res.status(500).send('ID Needed.')
    model.deleteResponse(req.params)
        .then(result => res.status(200).send('Row ' + req.params.id + ' was deleted.'))
        .catch(err => console.error(err))
}





module.exports = {getResponses, createResponses, updateResponses, deleteResponses}
