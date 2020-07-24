const express = require('express');
const Xml = require('../models/xml');

require('dotenv').config();

exports.createSalesOrder = async function(myMap) { 
	var request = require('request');
	const xmlData = new Xml(myMap.get("nome"), myMap.get("codigo"), myMap.get("qtde"), myMap.get("vlr"), myMap.get("data"));

	var xml = await xmlData.dealXmlModel();
	var form = {
		apikey: process.env.BLING_TOKEN,
		xml: xml
	};

	request.post('https://bling.com.br/Api/v2/pedido/json/', { form }
	,function(err, res) {
		console.log("RES")
		return res.body
	}); 
}
