const ELASTICSEARCH = require("elasticsearch");
const client = new ELASTICSEARCH.Client({
  host: "localhost:9200",
  apiVersion: '7.6'
});

client
  .get({
    index: "simpsons",
    type: "episode",
    id: 1,
    _sourceIncludes: [
      'title'
    ]
  })
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error(err);
  });