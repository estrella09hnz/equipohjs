const formularioRegistro = document.getElementById("registroForm");

formularioRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const control = document.getElementById("control").value.trim();
    const semestre = document.getElementById("semestre").value;
    const especialidad = document.getElementById("especialidad").value.trim();
    const turno = document.getElementById("turno").value;
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

   
    if (password !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    
    const usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]"
    );

  
    const existe = usuarios.some(usuario =>
        usuario.control === control
    );

    if (existe) {
        alert("Este número de control ya está registrado.");
        return;
    }

   
    const nuevoUsuario = {
        nombre: nombre,
        control: control,
        semestre: semestre,
        especialidad: especialidad,
        turno: turno,
        password: password
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("¡Registrado con éxito!");

    window.location.href = "login.html";
});