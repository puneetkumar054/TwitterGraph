const express = require('express');
const router = express.Router();

const twitterRoutes = (router) => {

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

}


module.exports = twitterRoutes;
