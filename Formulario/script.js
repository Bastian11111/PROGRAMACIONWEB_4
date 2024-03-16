// campos de texto y seleccion VARIABLES
let title = document.getElementById('title'); // Título
let nameInput = document.getElementById('nameInput'); // Campo de nombre
let appatInput = document.getElementById('appatInput'); // Botón de registro
let apmatInput = document.getElementById('apmatInput'); // Botón de registro
let usuarioInput = document.getElementById('usuarioInput'); // Botón de registro
let correoInput = document.getElementById('correoInput'); // Botón de registro
let claveInput = document.getElementById('claveInput'); // Botón de registro
let verificaClaveInput = document.getElementById('verificaClaveInput'); // Botón de registro
let direccionInput = document.getElementById('direccionInput'); // Botón de registro
let nacimientoInput = document.getElementById('nacimientoInput'); // Botón de registro

// Botones VARIABLES
let signUpButton = document.getElementById('signUp'); // Botón de registro
let signInButton = document.getElementById('signIn'); // Botón de inicio de sesión








// Eventos

signIn.onclick = function() {
    nameInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    appatInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    apmatInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    correoInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    verificaClaveInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    direccionInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    nacimientoInput.style.maxHeight = '0px'; // Ocultar campo de nombre
    title.innerHTML = 'Login'; // Cambiar título
    signUp.classList.add('disable'); // Deshabilitar botón de registro
    signIn.classList.remove('disable'); // Habilitar botón de inicio de sesión
}

signUp.onclick = function() {
    nameInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    appatInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    apmatInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    usuarioInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    correoInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    claveInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    verificaClaveInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    direccionInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    nacimientoInput.style.maxHeight = '60px'; //  Mostrar campo de nombre
    title.innerHTML = 'Registro'; // Cambiar título
    signUp.classList.remove('disable'); // Deshabilitar botón de registro
    signIn.classList.add('disable'); // Habilitar botón de inicio de sesión

}
