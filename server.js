const express = require("express");
const bodyParser = require("body-parser");
var Twit = require("twit");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/twitter", (req, res) => {
  const queryStr = req.query.searchQuery;
  var client = new Twit({
    consumer_key: "1x7fY5zdggejFT0fKPGAUszu1",
    consumer_secret: "nKWkxJr3wNtyH8ACDmhrtJNRQtHe8Z1wA1HNyqoGkcTPbMqyMT",
    access_token: "1157349481-t54jd7zfLjX9kWUmyj2iPaA3pLxDHgZfpIehmgT",
    access_token_secret: "mDIAfswlUvnnVDWnqcq5ghpAeuIvUgUVJfi7lPMZrcXex",
  });
  client.get("search/tweets", { q: queryStr, count: 10 }, function (
    err,
    data,
    response
  ) {
    // console.log(data);
    res.send(data);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
