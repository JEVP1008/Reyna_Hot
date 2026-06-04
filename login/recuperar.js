const formularioRecuperar = document.getElementById("formularioRecuperar");

formularioRecuperar.addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correoRecuperar").value.trim();
  const usuarios = JSON.parse(localStorage.getItem("usuariosReynaHot")) || [];

  const cuenta = usuarios.find(user => user.correo === correo);

  if (cuenta) {
    alert("Cuenta encontrada. Tu usuario es: " + cuenta.usuario + " y tu contraseña es: " + cuenta.contrasena);
  } else {
    alert("No encontramos una cuenta registrada con ese correo.");
  }
});