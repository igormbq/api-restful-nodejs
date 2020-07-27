const express = require('express');
const pipedriveService = require('./pipedrive-service.js');
const blingService = require('./bling-service.js');
const dealRepository = require('../repositories/deal-repository');

const app = express();

require('dotenv').config();


// ADVISE : That's a test application, if you are on production environment 
// you must use Webhooks for a better perfomance(see the pipedrive documentation).
app.get('/', async (req, res) => {
    try {
		// This method get all deals with status equals "Won" from PIPEDRIVE
		var deals = await pipedriveService.getDeals("Won");
		
		if (deals.data && deals.data.length > 0) {
			deals.data.forEach(deal => {
				
				// Deal data to make Sales Order
				var myMap = new Map();
				myMap.set("nome", deal.person_name);
				myMap.set("codigo", deal.id);
				myMap.set("descricao", deal.title);
				myMap.set("vlr", deal.weighted_value);
				myMap.set("data", deal.won_time);

				//Make a Sales Order on BLING
			 	blingService.createSalesOrder(myMap).then( res => {
					console.log(res);
				}).catch( err => {
					console.log('there was an error:', err); 
				});

				// Deal json format to make a Collection data 
				var myCollection = {
					"deal": deal.person_name, 
					"value": deal.weighted_value,
					"date": deal.won_time,
					"id_bling": deal.id,
				}

				//Make Collection on AtlasDB
				dealRepository.createDeal(myCollection).then( res => {
					console.log(res);
				}).catch( err => {
					console.log('there was an error:', err); 
				});
			});
		} else {
			console.log('No deals found on your account.');
		} 
	} catch (error) {
		console.log(error);
	}
	res.end();
});


module.exports = app;