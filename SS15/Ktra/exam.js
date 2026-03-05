const form=document.querySelector("#form");
const emailInput=document.querySelector("#form-email");
const passwordInput=document.querySelector("#form-pass");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email=emailInput.value;
    const password=passwordInput.value;
    let user = {
        email,
        password
    }
    console.log(user);
});