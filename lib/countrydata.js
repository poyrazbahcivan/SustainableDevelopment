if(window.location.hash) {
    var hash = window.location.hash.substring(1);

} 
else {

}


fetch("lib/countrydata.json").then(response => response.json()).then(data => getData(data));

function getData(data) {
    console.log(data.countries[hash]);
}

