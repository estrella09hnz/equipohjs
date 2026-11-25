const formularioLogin = document.getElementById("loginForm");
// Holaaaa

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const control = document.getElementById("control").value.trim();
    const password = document.getElementById("password").value;

  
    const usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]"
    );

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.control === control &&
        usuario.password === password
    );

    if (usuarioEncontrado) {
        alert("¡Bienvenido," + usuarioEncontrado.nombre + "!");

        window.location.href = "inicio.html";
    } else {
        alert("Número de control o contraseña incorrectos.");
    }
});
