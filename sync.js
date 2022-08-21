`use strict`;
const tefas = require('./tefas');
const config = require('./config');
const google = require('./google');


// main
(async () => {
	console.log('fetching statistics from TEFAS...');
	const data = await tefas.fetchStatistics();
	
	console.log('Authenticating Google...');
	await google.init(config);
	
	console.log('Cleaning the current spreadsheet...');
	await google.clearSheet(`${config.SHEET_ID}!A3:Z500`);

	const lastUpdateData = {
		range: `${config.SHEET_ID}!A1`,
		values: [
			[`Son guncelleme:  ${new Date().toLocaleString('tr-TR')}`]
		]
	}

	const statisticsData = {
		range: `${config.SHEET_ID}!A3`,
		values: data.map(row => Object.values(row))
	}
	
	console.log('Storing data...');
	await google.updateSheet([lastUpdateData, statisticsData]);

	console.log('DONE!');

})().catch(error => console.error(error))
