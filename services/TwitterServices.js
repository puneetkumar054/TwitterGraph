const axios = require("axios");
const { fileLoader } = require("ejs");

const moment = require("moment");

class Twitterervices {
  constructor() {}

  async getTweet(requestData = {}) {
    const instance = await axios({
      baseURL: `${process.env.TWITTER_API}?screen_name=${requestData.screen_name}&count=${requestData.count}`,
      method: "get",
      headers: { Authorization: "Bearer " + process.env.BEARER_TOKEN },
    });
    
    return instance;
  }

  getGraphData(tweets){

    let  currentDate = moment();
    let  weekStart = currentDate.clone().startOf("week");
    let  weekEnd = currentDate.clone().endOf("week");
    let  labels = [];
    let  set = [];
    
    let filterData = tweets.filter(function (tweet) {
      currentDate = moment(new Date(tweet.created_at).toLocaleString("en-US"),"MM/DD/YYYY, h:mm:ss a");
      return currentDate.isBetween(weekStart, weekEnd)
    })
    
    // console.log("hello");
    for (let i = 0; i <= 6; i++) {
      let day = moment(weekStart).add(i, "days").format("dddd");
      labels[i] = day;
      set[i] = 0;
      for (let j = 0; j < filterData.length; j++) {
        let currentDate2 = moment(new Date(filterData[j].created_at).toLocaleString("en-US"),"MM/DD/YYYY, h:mm:ss a");
        currentDate2.isBetween(moment(weekStart).add(i, "days").startOf('day'), moment(weekStart).add(i, "days").endOf('day')) ? set[i]++ : '';
      }
    }
    return {labels, set};
  }
}

module.exports = Twitterervices;
