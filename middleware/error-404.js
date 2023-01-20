const error404 = (req,res) => res.status(404).send('Route does not exist')

module.exports = error404