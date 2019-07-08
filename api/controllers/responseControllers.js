const model = require("../models/responseModels")


getResponses = (req, res, next) => {
  model.getResponses(req.body)
  .then(quotes => res.status(200).send({quotes}))
  .catch(err => console.error(err))
}




module.exports = {getResponses}
