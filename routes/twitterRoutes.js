const { skips } = require("debug");
const { fileLoader } = require("ejs");
const express = require("express");
const TwitterServices = require("../services/TwitterServices");

const twitterRoutes = (router) => {
  /* Get  Index Page */
  router.get("/", function (req, res, next) {
    res.render("index", { title: "Twitter Graph" });
  });

  /*Get twitter tweets*/
  router.get("/get-tweets", async function (req, res, next) {
    try {
      let screen_name = (req.query && req.query.screen_name) || null;
      let page_no = (req.query && req.query.page_no) || 1;
      let count = 0;
      let limit = 10;
      let skip = 0;

      count = page_no*limit;
      skip = (page_no-1)*limit;

      if (!screen_name) {
        res.render("error", {
          message: "User name required.",
          error: {
            code: 402,
            status: "REQUIRED",
          },
        });
      } else {
        let twitterServices = new TwitterServices();

        let tweets = await twitterServices.getTweet({
          screen_name,
          count,
        });

        tweets = skip == 0 ? tweets.data : tweets.data.splice(-10, skip);
        
        let graph_data = twitterServices.getGraphData(tweets);
        
        res.render("tweets", { data: tweets, graph: graph_data});
      }
    } catch (error) {
      res.render("error", {
        message: "server error.",
        error: {
          code: 500,
          status: "SERVER ERROR",
        },
      });
    }
  });
};

module.exports = twitterRoutes;
