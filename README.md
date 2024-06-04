# GeoIP REST Interface

## Description

The GeoIP CLI tool will take a public IP address as input and it will output the latitude and longitude values in a format that is easy to consume by another tool. You may use this tool to find the coordinates of requests coming into your network and log these values in a file or a database for tracking or data visualization purposes.

## Prerequisites

The GeoIP CLI tool leverages the IPStack API so you will need to sign up for a free account and use the API Key provided. [Click here](https://ipstack.com/signup/free) to get started and make a note of the API Key.

Additionally, make sure you have NodeJS version 18 or newer installed as well as NPM. Follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get started.

## Usage

### Prep Work

Start by cloning the repo or downloading the project files. Then, install the required dependencies by executing the following command from the repo folder:

```
npm install
```

Then, create a copy of the `.env.EXAMPLE` file and name the new copy `.env` using the following command:

```
cp .env.EXAMPLE .env
```

Open the `.env` file in a text editor, enter the API Key you retrieved from your [IPStack dashboard](https://ipstack.com/dashboard), and save your changes. The resulting file should look like this:

```
API_KEY=abcdefghij0123456789etc
```

NOTE: The `.env` file is not provided by default and it is added as an entry in the `.gitignore` file to ensure this private key is not uploaded to a GitHub repo by accident. Alternatively, you can set the `API_KEY` environment variable in your system; steps to do this are outside of the scope of this README.

### Running the Tool

To run the tool, execute one of the following commands - replace `<IP_ADDRESS>` with the actual public IP Address:

- `node index.js <IP_ADDRESS>`
- `npm --silent start <IP_ADDRESS>`

### Output

The output of the tool separates the latitutde and longitude with a comma, it looks like this:

```
<LATITUDE>,<LONGITUDE>
```