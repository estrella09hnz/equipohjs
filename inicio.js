const formularioLogin = document.getElementById("loginForm");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const control = document.getElementById("control").value.trim();
    const password = document.getElementById("password").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.control === control &&
        usuario.password === password
    );

    if (usuarioEncontrado) {

        sessionStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );

        alert("¡Bienvenido, " + usuarioEncontrado.nombre + "!");

        if (usuarioEncontrado.semestre === "1") {
            window.location.href = "inicio1.html";

        } else if (usuarioEncontrado.semestre === "3") {
            window.location.href = "inicio3.html";

        } else if (usuarioEncontrado.semestre === "5") {
            window.location.href = "inicio.html";

        } else {
            alert("Tu semestre todavía no tiene un catálogo disponible.");
        }

    } else {
        alert("Número de control o contraseña incorrectos.");
    }
});