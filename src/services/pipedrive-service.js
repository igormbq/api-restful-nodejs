const express = require('express');
const pipedrive = require('pipedrive');
const app = express();

require('dotenv').config();
pipedrive.Configuration.apiToken = process.env.PIPEDRIVE_TOKEN

exports.getDeals = async function() { 
	try {
		return await pipedrive.DealsController.getAllDeals({ status: 'won' });
	} catch (error) {
		console.log(error);
	}
}

