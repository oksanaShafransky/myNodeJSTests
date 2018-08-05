var request = require('request');

request('https://app.pluralsight.com/library/', function(error, response, body) {
        console.log('RESPONSE = ' + response.statusCode);
        if(!error && response.statusCode == 200) {
                console.log(body);
        } else {
                console.log("ERROR on request: " + error);
        }

});