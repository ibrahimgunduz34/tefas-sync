`use strict`;
const tefas = require('./services/tefas');
const config = require('./config');
const google = require('./services/google');

function prepareData(data) {
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

	return [lastUpdateData, statisticsData]
}

// main
(async () => {
	console.log('fetching statistics from TEFAS...');
	const statistics = await tefas.fetchStatistics();
	
	console.log('Authenticating Google...');
	await google.init(config);
	
	console.log('Cleaning the current spreadsheet...');
	await google.clearSheet(`${config.SHEET_ID}!A3:Z500`);

	const data = prepareData(statistics)
	
	console.log('Storing data...');
	await google.updateSheet(data);

	console.log('DONE!');

})().catch(error => console.error(error))
