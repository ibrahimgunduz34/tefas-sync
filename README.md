# Tefas SYNC

## How To Get Credentials
* Go to https://console.cloud.google.com/
* Create a project and switch to it.
* Go to **API and Services** and click **+ ENABLE API AND SERVICES** button on top of the page.
* Search for **Google Sheets API** and click on it from the result
* Click **ENABLE** button and then **MANAGE** button.
* Go to **Credentials** tab.
* Click **Create Credentials** button from the right side of the page and choose **Service account** from the opened popup.
* Give a name to the service and continue with next.. next...
* After created the credentials, go to the created credentials details and open the **KEYS** tab.
* Press **ADD KEY** button and choose **JSON** from the opened pop up page.
* Copy or move the downloaded json file into the project folder and rename it as **credentials.json**


## How To Run Tefas SYNC

* Run the following command

```shell
$ node run sync
```

The heat-map will be generated here:
https://docs.google.com/spreadsheets/d/1cKXLD-mBjFdB5lR1rJ1NcHNSFHUrLyD5CoHc_cSIs1s/edit#gid=1640054438

## How To Run Tefas SYNC Inside Docker

* Build the docker image if you run it first time.

```shell
$ docker build -t tefas-sync:latest -f Dockerfile .
```

* Run Tefas SYNC by executing the following command:

```shell
$ docker run --rm tefas-sync:latest
```

## Available Configurations:
The configurations that the application can interpret explained below are placed in *config.js* file.

* **CREDENTIALS_FILE:** Name of the credential file with absolute path.
* **SPREADSHEET_ID:** Identifier of the spreadsheet to be updated. You can obtain the id directlry from the spreadsheet url.
* **SCOPES:** Scope of the services to be accessed. No need to change.  Should remain as ["https://www.googleapis.com/auth/spreadsheets"]
* **SHEET_ID:** Name of the sheet to be updated.

## TODO(s)
* Build the spread sheet with all the headers and conditional formattings from the scratch when the script is executed.