var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = "http://fourdiamonds.donordrive.com/event/khs16";


request(url, function(error, response, html){

	if(!error) {

      var $ = cheerio.load(html);

      var money_raised, participants;

      money_raised = $('#donationsTotal h5').eq(0).text().replace(/[^0-9.]/g, '');
      participants = $('#donationsTotal h5').eq(1).text().replace(/[^0-9.]/g, '');

      var result = JSON.stringify({ money_raised : money_raised, participants : participants}, null, 4);

      fs.writeFile('result.json', result, function (err,data) {
      	if (err) {
      		return console.log(err);
      	}
      });

    }
});
