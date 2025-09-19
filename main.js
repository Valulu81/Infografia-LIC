document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Expresiones regulares
    const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/;
    const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const regexTelefono = /^\+?\d{8,14}$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    const regexUrl = /^(https?:\/\/)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

    // Valores
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;
    const url = document.getElementById("url").value;

    // Validaciones
    document.getElementById("errorNombre").textContent = regexNombre.test(nombre) ? "" : "Nombre inválido (Ej: Juan Pérez)";
    document.getElementById("errorEmail").textContent = regexEmail.test(email) ? "" : "Correo inválido  (Ej: nombre@dominio.com)";
    document.getElementById("errorTelefono").textContent = regexTelefono.test(telefono) ? "" : "Teléfono inválido";
    document.getElementById("errorPassword").textContent = regexPassword.test(password) ? "" : "Contraseña insegura, debe contener al menos 8 caracteres, una mayúscula, un número y un carácter especial";
    document.getElementById("errorUrl").textContent = regexUrl.test(url) ? "" : "URL inválida (Ej: https://www.ejemplo.com)";

    // Verifica si todo es válido
    const errores = [
        regexNombre.test(nombre),
        regexEmail.test(email),
        regexTelefono.test(telefono),
        regexPassword.test(password),
        regexUrl.test(url)
    ];

    const todoValido = errores.every(Boolean);
    const mensajeExito = document.getElementById("mensajeExito");

    if (todoValido) {
        mensajeExito.textContent = "✅ ¡Formulario enviado correctamente!";
        mensajeExito.style.opacity = "1";

        // Oculta el mensaje después de 4 segundos
        setTimeout(() => {
            mensajeExito.style.opacity = "0";
        }, 4000);

        // Reinicia el formulario
        document.getElementById("registroForm").reset();
    } else {
        mensajeExito.textContent = "";
        mensajeExito.style.opacity = "0";
    }
});
