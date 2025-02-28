const express = require('express');

const routes = express.Router();

const { allUserShow } = require('../controllers/AdminController');

routes.get('/allusershow',allUserShow) 

module.exports = routes;