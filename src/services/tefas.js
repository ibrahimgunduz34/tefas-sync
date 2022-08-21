`use strict`;

const fetch = require('node-fetch');

const TEFAS_STATISTICS_URL = 'https://www.tefas.gov.tr/api/DB/BindComparisonFundReturns';

function buildGetStatisticsRequest () {
    return {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7,ro;q=0.6",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.tefas.gov.tr/FonKarsilastirma.aspx",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "calismatipi=2&fontip=YAT&sfontur=&kurucukod=&fongrup=&bastarih=Ba%C5%9Flang%C4%B1%C3%A7&bittarih=Biti%C5%9F&fonturkod=&fonunvantip=&strperiod=1%2C1%2C1%2C1%2C1%2C1%2C1&islemdurum=1",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }
}

async function fetchStatistics () {
    const request = buildGetStatisticsRequest();
    const response = await fetch(TEFAS_STATISTICS_URL, request);
    if (!response.ok) {
        throw new Error('Failed to fetch the statistics from TEFAS');
    }
    const result = await response.json();
    return result.data;
}

module.exports = {
    fetchStatistics,
}