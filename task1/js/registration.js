function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !email || !contact || !dob || !password || !confirmPassword) {
        alert("All fields are required");
        return false;
    }

    if (!gender) {
        alert("Please select gender");
        return false;
    }

    if (contact.length !== 10 || isNaN(contact)) {
        alert("Enter valid 10-digit contact number");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
