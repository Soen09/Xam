// Obtener el ícono del ojo y el campo de la contraseña
const eyeIcon = document.getElementById('eyes');
const passwordField = document.getElementById('password');

// Mostrar la contraseña al hacer clic en el ícono del ojo
eyeIcon.addEventListener('click', () => {
    // Comprobar el tipo de input (si es password o texto)
    if (passwordField.type === "password") {
        // Cambiar el tipo a texto para mostrar la contraseña
        passwordField.type = "text";
        // Cambiar el ícono del ojo 
        eyeIcon.classList.remove('bx-show-alt');
        eyeIcon.classList.add('bx-hide'); 
    } else {
        // Cambiar el tipo a password para ocultar la contraseña
        passwordField.type = "password";
        eyeIcon.classList.add('bx-show-alt');
        eyeIcon.classList.remove('bx-hide');
    }
});

const loginButton = document.querySelector('.btn');
const errorMessage = document.getElementById('error-message');

// Redirige al usuario a otra página cuando haga clic en "Ingresar"
loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío del formulario si no está validado correctamente

    // Se puede agregar validaciones
    const username = document.getElementById('username').value; // Obtener el valor del campo usuario
    const password = document.getElementById('password').value; // Obtener el valor de la contraseña

    // Validación simple (personalizar)
    if (username && password) {
        window.location.href = "/Carga/Carga.html"; 
    } else {
        // Mostrar el mensaje de error si los campos están vacíos
        errorMessage.style.display = "block"; 
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
        errorMessage.style.display = "none";
        }, 3000);
    }
});

