const request = require('request');

function tickeDetailController(req, res){

const id = req.params.id;

const url = `https://zccsoumya.zendesk.com/api/v2/tickets/${id}`
console.log(url);
var options = {
  'method': 'GET',
  'url': url,
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic c291bXlhYmhAdXNjLmVkdTpTYWRoeWFANjE3OA=='
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  //console.log(response.body);
  res.send(response.body)
});
}

module.exports = tickeDetailController
