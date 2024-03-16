
// Variables

let signUpButton = document.getElementById('signUp'); // Botón de registro
let signInButton = document.getElementById('signIn'); // Botón de inicio de sesión
let nameInput = document.getElementById('nameInput'); // Campo de nombre
let title = document.getElementById('title'); // Título

signIn.onclick = function() {
    nameImput.style.maxHeight = '0px'; // Ocultar campo de nombre
    title.innerHTML = 'Login'; // Cambiar título
    signUp.classList.add('disable'); // Deshabilitar botón de registro
    singIn.classList.remove('disable'); // Habilitar botón de inicio de sesión
}

signUp.onclick = function() {
    nameImput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    title.innerHTML = 'Registro'; // Cambiar título
    signUp.classList.remove('disable'); // Deshabilitar botón de registro
    singIn.classList.add('disable'); // Habilitar botón de inicio de sesión

}