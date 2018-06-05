var Crawler = require("simplecrawler");

var crawler = new Crawler("https://www.silverbean.com/");

crawler.interval = 10000; //10 seconds
crawler.maxConcurrency = 3;
crawler.MaxDepth =1;

crawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

crawler.start();



