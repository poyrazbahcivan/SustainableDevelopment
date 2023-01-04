fetch("lib/countrydata.json").then(response => response.json()).then(data => showInfo(data));

function showInfo(data) {
    console.log(data.countries);
}