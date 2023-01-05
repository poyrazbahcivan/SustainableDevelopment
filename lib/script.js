
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
    document.getElementById('fullname').value = ""
    document.getElementById('email').value = ""
    document.getElementById('subject').value = ""
    document.getElementById('message').value = ""
  }
  