const express = require('express');
const mongoose = require('mongoose');
const pipedrive = require('pipedrive');

const PORT = 1800;
const app = express();

require('dotenv').config();


pipedrive.Configuration.apiToken = 'c18a0700683cfd8369c4dae6d58cb078bb06e69f';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    try {
		const deals = await pipedrive.DealsController.getAllDeals({status: 'won' });
        //console.log(deals)
        if (deals.data && deals.data.length > 0) {
			//const deal = deals.data[0];
            deals.data.forEach(deal =>{
                console.log(`Deal ${deal.title} (${deal.value} ${deal.currency})`);
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