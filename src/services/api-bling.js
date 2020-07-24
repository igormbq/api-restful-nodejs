const Xml = require('../models/xml');
const app = express();

require('dotenv').config();


app.post('/',async (req, res) => {
	var request = require('request');
	const testinho = new Xml("testinhoo", 145, "DESCRIPTION", 5, 2, 10);
  
	var xml = await testinho.getXml();
	var form = {
		apikey: process.env.BLING_TOKEN,
		xml: xml
	};
	
  
	request.post('https://bling.com.br/Api/v2/pedido/json/', { form }
	,function(err, res) {
	  console.log(err, res);
	});
  });
  


module.exports = app-bling;