// Show and Hide the password

const passwordInput = document.getElementById("password");
const passwordShow =  document.getElementById("passwordShow");

function showPassword (){
  passwordInput.setAttribute("type", "text");
  passwordShow.setAttribute("src", "../../img/icons/ocultar_senha.svg")
}

function hidePassword (){
  passwordInput.setAttribute("type", "password");
  passwordShow.setAttribute("src", "../../img/icons/mostrar_senha.svg")

}

passwordShow.addEventListener("click", () =>{
  let inputTypeIsPassword = passwordInput.type == "password"
  
  if(inputTypeIsPassword){
    showPassword();
  } else {
    hidePassword();
  }
})

// Form validation

const form = document.getElementById("form");
const button = document.getElementById("button");
const link = document.querySelector("#button a");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const required = document.querySelectorAll(".required");
const smallRequired = document.querySelectorAll(".small-required");
button.disabled = true;

required.forEach((input) => {
  input.addEventListener("input", () => {
    checkInputs();
  })
})

 button.addEventListener("click", (e) => {
   checkInputs();
 })

 function checkInputs() {
   const userEmailValue = userEmail.value;
   const userPasswordValue = userPassword.value;
   const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

   
   if(userEmailValue === ""){
     setErrorFor(userEmail, 'Por favor, insira um email.');
   } else if(regex.test(userEmailValue)){
     setSuccessFor(userEmail);
   } else {
     setErrorFor(userEmail, 'Email inválido.');
   }

   if (userPasswordValue === "") {
     setErrorFor(userPassword, 'Insira uma senha.');
   } else if(userPasswordValue.length < 6){
     setErrorFor(userPassword, 'A senha deve conter mais de 6 caracteres.');
   } else {
     setSuccessFor(userPassword);
   }

   const formControls = form.querySelectorAll('.form-control');

   const formIsValid = [...formControls].every(formControl => {
     return (formControl.className === "form-control success");
   });

   if(formIsValid){
    button.disabled = false;
   } else {
    button.disabled = true;
   }
 }

 function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');

   small.innerText = message;

   formControl.className = "form-control error";
 }

 function setSuccessFor(input) {
   const formControl = input.parentElement;

   formControl.className = "form-control success";
 }
