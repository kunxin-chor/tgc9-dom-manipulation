let form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let errorList = document.querySelector('#errors');
    errorList.innerHTML = "";

    // error flags
    let usernameTooShort = false;
    let emailIsInvalid = false;
    let didNotAccept = false;

    let username = document.querySelector("#username").value;
    // must be at least 6 characters
    if (username.length < 6) {
       usernameTooShort = true;
       errorList.innerHTML +="<li>Username is too short</lli>";
    }

    // must contain at least one @
    // must contain at least one .
    let email = document.querySelector('#email').value;
    if (!email.includes('@') || !email.includes('.')) {
        emailIsInvalid = true;
        errorList.innerHTML += "<li>Email is invalid</li>";
    }
   
    let acceptCheckbox = document.querySelector('#accept-conditions');
    if (!acceptCheckbox.checked) {
        didNotAccept = true;
        errorList.innerHTML += "<li>Didn't tick the checkbox</li>";
    }

    if (!usernameTooShort && !emailIsInvalid && !didNotAccept) {
          form.submit() 
    }
  
});