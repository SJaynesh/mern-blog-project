const express = require('express');

const routes = express.Router();

const { verifyToken, authorizeRole } = require('../middleware/AuthMiddleware');

routes.use('/',require('./authRoute'));
routes.use('/admin',verifyToken,authorizeRole(['admin']),require('./adminRoute'));

module.exports = routes;