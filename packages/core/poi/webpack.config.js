const Poi = require('.')

const poi = new Poi()

module.exports = poi.createWebpackConfig().toConfig()
