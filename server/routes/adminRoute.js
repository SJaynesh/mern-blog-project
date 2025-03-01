const express = require('express');

const routes = express.Router();

const { allUserShow,singelUser,deleteUser,changeRole } = require('../controllers/AdminController');

routes.get('/allusershow',allUserShow) 
routes.get('/singeluser',singelUser);
routes.delete('/deleteuser',deleteUser)
routes.put('/chagerole',changeRole)

module.exports = routes;