const formulario = document.getElementById("formularioLogin");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuariosReynaHot")) || [];

    const cuenta = usuarios.find(user => 
        user.usuario === usuario && user.contrasena === contrasena
    );

    if (cuenta) {
        localStorage.setItem("usuarioActivo", cuenta.usuario);
        alert("¡Bienvenido a Reyna Hot! El fuego está listo, el sabor te espera.");
        window.location.href = "Index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});