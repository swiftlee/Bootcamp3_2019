let config = require('../config/config'),
    request = require('request');



module.exports = function(req, res, next) {
  if(req.body.address) {
      //This code just formats the address so that it doesn't have space and commas using escape characters
      let addressTemp = req.body.address;
      let addressTemp2 = addressTemp.toLowerCase();
      let addressTemp3 = addressTemp2.replace(/\s/g, "%20");
      let addressTemp4 = addressTemp3.replace(/,/g , "%2C");
      
    //Setup your options q and key are provided. Feel free to add others to make the JSON response less verbose and easier to read 
    let options = {
      q: addressTemp4,
      key: config.openCage.key,  
    };

    //Setup your request using URL and options - see ? for format
    request({
      url: 'https://api.opencagedata.com/geocode/v1/json', 
      qs: options
      }, function(error, response, body) {
        //For ideas about response and error processing see https://opencagedata.com/tutorials/geocode-in-nodejs
        
        //JSON.parse to get contents. Remember to look at the response's JSON format in open cage data
        
        /*Save the coordinates in req.results -> 
          this information will be accessed by listings.server.model.js 
          to add the coordinates to the listing request to be saved to the database.

          Assumption: if we get a result we will take the coordinates from the first result returned
        */
        //  req.results = stores you coordinates
        const payload = JSON.parse(body);
        const coords = payload.results[0].geometry;
        console.log("latitude:", coords.lat);
        console.log("longitude:", coords.lng);
        req.results = {
            latitude: coords.lat,
            longitude: coords.lng
        };
        next();
    });
  } else {
    next();
  }
};  