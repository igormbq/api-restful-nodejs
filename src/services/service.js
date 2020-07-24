const express = require('express');
const pipedriveService = require('./pipedrive-service.js');
const blingService = require('./bling-service.js');

const PORT = 1800;
const app = express();


require('dotenv').config();


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    try {
        var deals = await pipedriveService.getDeals();
		if (deals.data && deals.data.length > 0) {
			deals.data.forEach(deal => {
				var kvArray = [
					["nome", deal.person_name], 
					["codigo", deal.codigo],
					["descricao", deal.title],
					["qtde", deal.products_count],
					["vlr", deal.weighted_value],
					["data", deal.won_time],
				];
				
				var myMap = new Map(kvArray);
				
				blingService.createSalesOrder(myMap).then( res => {
					console.log(res)
				}).catch( err => {
					console.log('there was an error:', err); 
				});

				//BLING constructor(nome cliente, codigo produt, descricao produt, qtde, vlw_unit, vlr, data) {
				//console.log(deal.person_name, 22, 10, deal.title, deal.products_count, deal.weighted_value, deal.won_time);
			});
		} else {
			console.log('No deals found on your account.');
		} 
	} catch (error) {
		console.log(error);
	}
});


module.exports = app;