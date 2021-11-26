const request = require('request');

function ticketListController(req, res) {

  const page = req.query.page;
  const per_page = req.query.per_page;
  const url = `https://zccsoumya.zendesk.com/api/v2/tickets?page=${page}&per_page=${per_page}`
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
    res.send(response.body)
  });
}

module.exports = ticketListController

