var express = require('express');
var app = express();
var twitterAPI = require('twitter');



var twitter = new twitterAPI({
    consumer_key: "zjSjQbj3xyOV01QECh3zzuYRp",
    consumer_secret: "hb47i9sGZ8bHIVEbPRLJ5j7SMRQVeG6uxeboBwfoQCC3AHohYW",
    access_token_key: "2320754958-hQv1iTw6s4DD7FZp4OmncjgIPuRd7tWHCc38a3m",
    access_token_secret: "7veEanjO5rwFlnlJMBWTmYwxRAq14QLiA9067vblxFgWJ"
});


/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/

app.get('/tweets.json', function(req, res) {
    twitter.get('search/tweets', { q: '%23react', result_type: 'recent' }, function(error, tweet, response) {
        if (error) {
            console.log(error);
            res.json(error)

        };
        res.header('Access-Control-Allow-Origin', '*');
        res.json(tweet);
        // console.log(tweet);  // Tweet body.
    });

});

app.listen(process.env.PORT || 4000, function() {
    console.log("Prompter listening on port 3000.");
});