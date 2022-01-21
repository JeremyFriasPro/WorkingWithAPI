// We will be working with the ISS (International Space Station) API
// ISS API requires no authentication

// storing the api url in a variable
const the_API_URL = 'https://api.wheretheiss.at/v1/satellites/25544';

/* before 'async' executes it will wait until the rest of the code executes...
await woks similar to async */
async function getInfo() {
    // fetching the URL
    const response = await fetch(the_API_URL);
    // formatting the data received to JSON
    const data = await response.json();
    // logging result to console
    console.log(`The Latitude Of The ISS is ${data.latitude}`);
    console.log(`The Longitude Of The ISS is ${data.longitude}`);

    if(data.longitude > 150) {
        console.log("Longitude Passed 150");
    } else if(data.longitude < 150) {
        console.log("Longitude Did Not Pass 150");
    }

    let longitudeDisplay = document.getElementById('lon');
    longitudeDisplay.textContent = data.longitude;
}

getInfo();

// calling the function every 1000 milliseconds (1 second)
setInterval(getInfo, 1000);