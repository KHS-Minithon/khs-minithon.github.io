var fs = require('fs');

var pulledData;

fs.readFile('C:\\Users\\ErnestG\\Google Drive\\Web Projects\\KHS-Minithon\\data\\data.json', 'utf8', function (err, data) {
  if (err) {
	   return;
  }
  
  pulledData = JSON.parse(data);
});