# Tefas SYNC

## How To Get Credentials
* Go to https://console.cloud.google.com/
* Create a project and switch to it.
* Go to *API and Services* and click *+ ENABLE API AND SERVICES* button on top of the page.
* Search for *Google Sheets API* and click on it from the result
* Click 'ENABLE' button and then 'MANAGE' button.
* Go to *Credentials* tab.
* Click *Create Credentials* button from the right side of the page and choose *Service account* from the opened popup.
* Give a name to the service and continue with next.. next...
* After created the credentials, go to the created credentials details and open the *KEYS* tab.
* Press *ADD KEY* button and choose JSON from the opened pop up page.
* Copy or move the downloaded json file into the project folder and rename it as *credentials.json*


## How To Run Tefas SYNC

* Run the following command

```shell
$ node sync.js
```

The heat-map will be generated here:
https://docs.google.com/spreadsheets/d/1cKXLD-mBjFdB5lR1rJ1NcHNSFHUrLyD5CoHc_cSIs1s/edit#gid=1640054438


## TODO(s)
* Build the spread sheet with all the headers and conditional formattings from the scratch when the script is executed.