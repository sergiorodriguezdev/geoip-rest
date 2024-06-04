// Import modules
require("dotenv").config();

// Check if API_KEY environment variable exists
if (!process.env.API_KEY) {
  console.error("API Key is missing. Please update your .env file or set the API_KEY environment variable in your system.");
  process.exit(1);
}

// Check if IP Address CLI argument is missing
if (process.argv.length === 2) {
  console.error(
    "IP Address value is missing. Please enter an IP Address as an argument."
  );
  process.exit(1);
}

// Grab third argument and use it as IP Address
// I'm not validating the format of this value to verify it's a valid IP Address because the IPStack API will do it for me
const IP_ADDRESS = process.argv[2];

// Build request URL using IP Address provided and API Key from environment variables
const API_URL = `http://api.ipstack.com/${IP_ADDRESS}?access_key=${process.env.API_KEY}`;

// Fetch data
fetchData(API_URL);

// Function definition to request data from IPStack API.
async function fetchData(url) {
  try {
    const response = await fetch(url);  // Send request
    const data = await response.json(); // Get JSON payload

    // Check if request failed and throw exception
    if (!data.success || data.error) {
        throw data.error
    } else {
        // Output latitude and longitude values separated by a comma
        console.log(`${data.latitude},${data.longitude}`);
    }
  } catch (error) {
    // Log error
    console.error("There's been an error retrieving the latitude and longitude of the provided IP Address.")
    console.error(error);
  }
}
