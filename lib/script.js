
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "teamsustainabledevelopment@gmail.com",
        Password : "2CB4D65B9CC26AAFB93D4AE6CDC0E9882CD7",
        To : 'poyrazbahcivan@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : document.getElementById('message').value
    }).then(
      message => alert(message)
    );
    console.log("Sent.");
  }

  function getCountryData(countryTag){
    var database = database[countryTag];
    
  }
  