const express = require('express');
const twitterRoutes = require('./twitterRoutes');

/*
All routes will be here
*/
let router = (app) => {  
  let router = express.Router();

  twitterRoutes(router);
  
  app.use('/', router);

}

module.exports = router;
