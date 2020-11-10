document
  .querySelector("#register-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    // error flags
    let usernameWrongLength = false;
    let passwordHasNoSpecialCharacter = false;
    let passwordNotMatch = false;

    // check for username between 3 to 15 characters
    let username = document.querySelector("#username").value;
    if (username.length < 3 || username.length > 15) {
      usernameWrongLength = true;
    }

    // check for special characters in password
    let specialCharacters = "@#$%!^&";
    let password = document.querySelector("#password").value;
    let hasSpecialCharacter = false;
    for (let char of password) {
      if (specialCharacters.includes(char)) {
        hasSpecialCharacter = true;
        break;
      }
    }
    if (!hasSpecialCharacter) {
      passwordHasNoSpecialCharacter = true;
    }

    // check if the two passwords entered are the same
    let passwordRentry = document.querySelector('#password2').value;
    if (passwordRentry != password) {
        passwordNotMatch = true;
    }

    console.log("usernamewronglength=", usernameWrongLength);
    // display error messages
    if (usernameWrongLength) {
        document.querySelector('#username-error').innerHTML = "Your username must be between 5 to 15 characters";
    }

    if (passwordHasNoSpecialCharacter) {
        document.querySelector('#password-error').innerHTML += "Your password does not has a special character.";
    }

    if (passwordNotMatch) {
        document.querySelector('#password-error').innerHTML += "Your password does not match"
    }

    if (!usernameWrongLength && !passwordHasNoSpecialCharacter && !passwordNotMatch) {
      document.querySelector("#register-form").submit();
    }
  });
