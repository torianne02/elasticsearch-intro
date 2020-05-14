const ELASTICSEARCH = require("elasticsearch");
const client = new ELASTICSEARCH.Client({
  host: "localhost:9200"
  // log: "trace"
});

client
  .get({
    index: "simpsons",
    type: "episode",
    id: 999,
    _sourceExclude: ""
  })
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error(err);
  });