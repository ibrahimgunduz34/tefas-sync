`use strict`;

const path = require('path');

module.exports = {
    CREDENTIALS_FILE: path.join(__dirname, 'credentials.json'),
    SPREADSHEET_ID:'1cKXLD-mBjFdB5lR1rJ1NcHNSFHUrLyD5CoHc_cSIs1s',
    SCOPES: ["https://www.googleapis.com/auth/spreadsheets"],
    SHEET_ID: 'heat-map',
}

