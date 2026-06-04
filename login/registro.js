const formularioRegistro = document.getElementById("formularioRegistro");

formularioRegistro.addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("nuevoUsuario").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("nuevaContrasena").value.trim();

  let usuarios = JSON.parse(localStorage.getItem("usuariosReynaHot")) || [];

  const usuarioExiste = usuarios.some(cuenta => cuenta.usuario === usuario);
  const correoExiste = usuarios.some(cuenta => cuenta.correo === correo);

  if (usuarioExiste) {
    alert("Ese usuario ya existe. Intenta con otro.");
    return;
  }

  if (correoExiste) {
    alert("Ese correo ya está registrado.");
    return;
  }

  const nuevaCuenta = {
    usuario: usuario,
    correo: correo,
    contrasena: contrasena
  };

  usuarios.push(nuevaCuenta);
  localStorage.setItem("usuariosReynaHot", JSON.stringify(usuarios));

  alert("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
});