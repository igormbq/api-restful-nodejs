const express = require('express');
const pipedrive = require('pipedrive');
const app = express();

require('dotenv').config();
pipedrive.Configuration.apiToken = process.env.PIPEDRIVE_TOKEN

exports.getDeals = async function(status) { 
	try {
		return await pipedrive.DealsController.getAllDeals({ status: status });
	} catch (error) {
		console.log(error);
	}
}

