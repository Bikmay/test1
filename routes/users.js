var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('./data/outdata/exchangeRates.xml', { encoding : 'utf8' },
      (err, data) => {
        data.split('\n').forEach(line => {
          if(line =="</gesmes:Envelope>"){
            return;
          }
         console.log(line);
        });
      });

  /*const array = fs
      .readFileSync('./data/outdata/exchangeRates.xml')
      .toString()
      .split('\n');
  const outArray = [];
  let j = 0;

  console.log('asdafwqqqqqqqqqqqq');

  array.forEach(function(item, i) {
    console.log(item);
    console.log('cyka');
    if (array[i].includes('\t\t\t')) {
      outArray[j] = item;
      j += 1;
    }
  });

  let data_to_append = '<Root>';
  fs.appendFileSync('./test.xml', `\n${data_to_append}`);
  outArray.forEach(function(item, n) {
    data_to_append = item;
    fs.appendFileSync('./test.xml', `\n${data_to_append}`);
  });
  data_to_append = '</Root>';
  fs.appendFileSync('./test.xml', `\n${data_to_append}`);

   */
});

module.exports = router;
