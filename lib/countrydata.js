if(window.location.hash) {
    var hash = window.location.hash.substring(1);

} 
else {

}


fetch("lib/countrydata.json").then(response => response.json()).then(data => getData(data));

    function getData(data) {
    console.log(data.countries[hash]);
    document.getElementById("value1-1").innerHTML = data.countries[hash]["goal1"]["one"]
    document.getElementById("value1-2").innerHTML = data.countries[hash]["goal1"]["two"]
    document.getElementById("value1-3").innerHTML = data.countries[hash]["goal1"]["three"]
    document.getElementById("value1-4").innerHTML = data.countries[hash]["goal1"]["four"]

    document.getElementById("value2-1").innerHTML = data.countries[hash]["goal2"]["one"]

    document.getElementById("value3-1").innerHTML = data.countries[hash]["goal3"]["one"]
    document.getElementById("value3-2").innerHTML = data.countries[hash]["goal3"]["two"]
    document.getElementById("value3-3").innerHTML = data.countries[hash]["goal3"]["three"]
    document.getElementById("value3-4").innerHTML = data.countries[hash]["goal3"]["four"]

    document.getElementById("value4-1").innerHTML = data.countries[hash]["goal4"]["one"]
    document.getElementById("value4-2").innerHTML = data.countries[hash]["goal4"]["two"]
    document.getElementById("value4-3").innerHTML = data.countries[hash]["goal4"]["three"]
    document.getElementById("value4-4").innerHTML = data.countries[hash]["goal4"]["four"]

    document.getElementById("value5-1").innerHTML = data.countries[hash]["goal5"]["one"]
    document.getElementById("value5-2").innerHTML = data.countries[hash]["goal5"]["two"]
    document.getElementById("value5-3").innerHTML = data.countries[hash]["goal5"]["three"]
    document.getElementById("value5-4").innerHTML = data.countries[hash]["goal5"]["four"]

    document.getElementById("value6-1").innerHTML = data.countries[hash]["goal6"]["one"]
    document.getElementById("value6-2").innerHTML = data.countries[hash]["goal6"]["two"]
    document.getElementById("value6-3").innerHTML = data.countries[hash]["goal6"]["three"]
    document.getElementById("value6-4").innerHTML = data.countries[hash]["goal6"]["four"]

    document.getElementById("value7-1").innerHTML = data.countries[hash]["goal7"]["one"]
    document.getElementById("value7-2").innerHTML = data.countries[hash]["goal7"]["two"]
    document.getElementById("value7-3").innerHTML = data.countries[hash]["goal7"]["three"]
    document.getElementById("value7-4").innerHTML = data.countries[hash]["goal7"]["four"]

    document.getElementById("value8-1").innerHTML = data.countries[hash]["goal8"]["one"]
    document.getElementById("value8-2").innerHTML = data.countries[hash]["goal8"]["two"]
    document.getElementById("value8-3").innerHTML = data.countries[hash]["goal8"]["three"]
    document.getElementById("value8-4").innerHTML = data.countries[hash]["goal8"]["four"]

    document.getElementById("value9-1").innerHTML = data.countries[hash]["goal9"]["one"]
    document.getElementById("value9-2").innerHTML = data.countries[hash]["goal9"]["two"]
    document.getElementById("value9-3").innerHTML = data.countries[hash]["goal9"]["three"]
    document.getElementById("value9-4").innerHTML = data.countries[hash]["goal9"]["four"]

    document.getElementById("value10-1").innerHTML = data.countries[hash]["goal10"]["one"]
    document.getElementById("value10-2").innerHTML = data.countries[hash]["goal10"]["two"]

    document.getElementById("value11-1").innerHTML = data.countries[hash]["goal11"]["one"]

    document.getElementById("value12-1").innerHTML = data.countries[hash]["goal12"]["one"]
    document.getElementById("value12-2").innerHTML = data.countries[hash]["goal12"]["two"]
    document.getElementById("value12-3").innerHTML = data.countries[hash]["goal12"]["three"]
    document.getElementById("value12-4").innerHTML = data.countries[hash]["goal12"]["four"]
    
    document.getElementById("value13-1").innerHTML = data.countries[hash]["goal13"]["one"]
    document.getElementById("value13-2").innerHTML = data.countries[hash]["goal13"]["two"]
    document.getElementById("value13-3").innerHTML = data.countries[hash]["goal13"]["three"]

    document.getElementById("value14-1").innerHTML = data.countries[hash]["goal14"]["one"]
    document.getElementById("value14-2").innerHTML = data.countries[hash]["goal14"]["two"]
    document.getElementById("value14-3").innerHTML = data.countries[hash]["goal14"]["three"]
    document.getElementById("value14-4").innerHTML = data.countries[hash]["goal14"]["four"]

    document.getElementById("value15-1").innerHTML = data.countries[hash]["goal15"]["one"]
    document.getElementById("value15-2").innerHTML = data.countries[hash]["goal15"]["two"]
    document.getElementById("value15-3").innerHTML = data.countries[hash]["goal15"]["three"]
    document.getElementById("value15-4").innerHTML = data.countries[hash]["goal15"]["four"]

    document.getElementById("value16-1").innerHTML = data.countries[hash]["goal16"]["one"]
    document.getElementById("value16-2").innerHTML = data.countries[hash]["goal16"]["two"]
    document.getElementById("value16-3").innerHTML = data.countries[hash]["goal16"]["three"]
    document.getElementById("value16-4").innerHTML = data.countries[hash]["goal16"]["four"]

    document.getElementById("value17-1").innerHTML = data.countries[hash]["goal17"]["one"]
    document.getElementById("value17-2").innerHTML = data.countries[hash]["goal17"]["two"]
    document.getElementById("value17-3").innerHTML = data.countries[hash]["goal17"]["three"]

}
