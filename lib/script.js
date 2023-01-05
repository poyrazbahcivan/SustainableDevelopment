
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "teamsustainabledevelopment@gmail.com",
        Password : "",
        To : 'poyrazbahcivan@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : document.getElementById('message').value
    })
    console.log("Sent.");
  }
  