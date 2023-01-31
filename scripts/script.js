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