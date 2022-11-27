document.addEventListener("DOMContentLoaded", function(){
    fullname = document.getElementById('fullname');
    email = document.getElementById('email');
    subject = document.getElementById('subject');
    message = document.getElementById('message');

})

function sendContact() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "teamsustainabledevelopment@gmail.com",
        Password: "42woLr#k2LuKw$6qVYGqsP3lJ8cys8HoP@U8U!DfgaZhIRzxY8",
        To: "poyrazbahcivan@gmail.com",
        From: email.value,
        Fullname: fullname,
        Subject: subject,
        Body: message
    })
    console.log("Sent.");
  }