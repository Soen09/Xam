// Después de que se complete la animación, redirigir a otra página
window.onload = function() {
    // Esperamos 2 segundos para que termine la animación
    setTimeout(function() {
        window.location.href = "/Inicio/Inicio.html"; 
    }, 1500); // 1500 ms = 1.5 segundos
};
