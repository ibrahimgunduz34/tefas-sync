const { google } = require('googleapis');

let _service;
let _config;

async function init (config) {
    _config = config;
    const auth = await authenticate();
    _service = google.sheets({version:"v4", auth});
}

async function authenticate (config) {
	const auth = new google.auth.GoogleAuth({
		keyFile: _config.CREDENTIALS_FILE,
		scopes: _config.SCOPES,
	});

	return auth.getClient();
}

async function clearSheet (range) {
    await _service.spreadsheets.values.clear({
		spreadsheetId: _config.SPREADSHEET_ID, 
		range
	});
}

async function updateSheet(data) {
    await _service.spreadsheets.values.batchUpdate({
		spreadsheetId: _config.SPREADSHEET_ID,
		resource: {
			data,
			valueInputOption: "USER_ENTERED",
		}
	})
}

module.exports = {
    init,
    clearSheet,
    updateSheet,
}