const jwt = require('express-jwt')

exports.authenticad = jwt({ secret: 'my-secret-key' })