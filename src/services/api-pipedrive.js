const express = require('express');
const pipedrive = require('pipedrive');

const PORT = 1800;
const app = express();

require('dotenv').config();


pipedrive.Configuration.apiToken = process.env.PIPEDRIVE_TOKEN

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
	try {
		const deals = await pipedrive.DealsController.getAllDeals({ status: 'won' });

		if (deals.data && deals.data.length > 0) {
			//const deal = deals.data[0];
			deals.data.forEach(deal => {
				//console.log(deal)
				//ATLAS = oporturnidade, dia e valor
				//console.log(`Deal ${deal.title} ${deal.person_name}  ${deal.products_count}  (${deal.weighted_value} ${deal.won_time})`);

				//BLING constructor(nome cliente, codigo produt, descricao produt, qtde, vlw_unit, vlr, data) {
				console.log(deal.person_name, 22, 10, deal.title, deal.products_count, deal.weighted_value, deal.won_time);
				var request = require('request');
				const Xml = require('../models/xml');
				const testinho = new Xml(deal.person_name, 30, 15, deal.title, deal.products_count, deal.weighted_value, "22/07/2020");

				var xml = testinho.getXml();
				var form = {
					apikey: '105d0ca9d4d27157f194dac7c4f340a7342ea9a3ed78f00d021f45fc2afed8bf41a88ff5',
					xml: xml
				};


				request.post('https://bling.com.br/Api/v2/pedido/json/', { form }
					, function (err, res) {
						//console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)
						console.log(env.PIPEDRIVE.TOKEN)

						console.log(err, res.body);
				});
			});


			/* const updates = await pipedrive.DealsController.listUpdatesAboutADeal({
				id: deal.id,
				start: 0,
				limit: 10
			}); */

			/* for (const update of updates.data) {
				console.log(`${update.object} from ${update.timestamp.split(' ')[0]}:`);
				console.log(JSON.stringify(update.data, null, 2));
			} */
		} else {
			console.log('No deals found on your account.');
		}
	} catch (error) {
		console.log(error);
	}
});


module.exports = app;