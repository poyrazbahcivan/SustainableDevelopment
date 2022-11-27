
function sendContact() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "teamsustainabledevelopment@gmail.com",
        Password: "42woLr#k2LuKw$6qVYGqsP3lJ8cys8HoP@U8U!DfgaZhIRzxY8",
        To: "poyrazbahcivan@gmail.com",
        From: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("fullname").value
        + "Message: " + document.getElementById("message").value
    })
    console.log("Sent.");
  }