var express = require('express');
var router = express.Router();
const xml2js = require('xml2js');
const https = require('https');
const fs = require('fs');
var Transform = require('stream').Transform;
var util = require('util');

const ab = require('../public/javascripts/sc')

/* GET home page. */
router.get('/', function(req, res, next) {
 const pathToFile = './data/outdata/exchangeRates.xml';
 const file = fs.createWriteStream(pathToFile);
 const request = https.get(
      'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',
      function(response) {
        response.pipe(file);
      }
  );



  fs.readFile(pathToFile, function(err, data) {


    var parser = new xml2js.Parser(/* options */);
    parser.parseStringPromise(data,{rootName: "Cube"}).then(function (result) {
      console.dir(result);
      console.log('Done');
      json = JSON.parse(result);



    })
        .catch(function (err) {
          console.log("FAIL")
        });
  });
  res.render('index', { title: 'Express' });
});



module.exports = router;
