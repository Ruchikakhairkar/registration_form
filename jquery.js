$(document).ready(function () {
  $("#registrationForm").submit(function (event) {
    event.preventDefault();
    const name = $("#name");
    const username = $("#username");
    const email = $("#email");
    const password = $("#password");
    const confirmPassword = $("#confirmPassword");

    $("#error").text("");
    $(".error-border").removeClass("error-border");

    let isValid = true;

    if (name.val().trim() === "") {
      $("#error").html("Name is required");
      name.addClass("error-border");
      isValid = false;
    }

    if (username.val().trim() === "") {
      $("#error").html("Username is required");
      username.addClass("error-border");
      isValid = false;
    }

    if (email.val().trim() === "") {
      $("#error").html("Email is required");
      email.addClass("error-border");
      isValid = false;
    }

    if (password.val().trim() === "") {
      $("#error").html("Password is required");
      password.addClass("error-border");
      isValid = false;
    }

    if (confirmPassword.val().trim() === "") {
      $("#error").html("Confirm Password is required");
      confirmPassword.addClass("error-border");
      isValid = false;
    }

    if (password.val() !== confirmPassword.val()) {
      $("#error").html("Password and Confirm Password do not match");
      password.addClass("error-border");
      confirmPassword.addClass("error-border");
      isValid = false;
    }

    if (isValid) {
      $("#success").text("Form submitted successfully!");
    }
  });
});
