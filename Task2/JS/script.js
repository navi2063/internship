function generateCaptcha() {

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("mainCaptcha").innerText = captcha;
}

function validateForm() {

    var generated = document.getElementById("mainCaptcha").innerText;
    var userInput = document.getElementById("inputCaptcha").value;
    var message = document.getElementById("message");

    if (generated === userInput) {
        message.style.color = "green";
        message.innerText = "Login Successful ";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Captcha ";
        generateCaptcha(); 
        return false;
    }

    return false; 
}
