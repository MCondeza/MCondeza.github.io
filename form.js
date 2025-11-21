document.getElementById("survey-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        edad: document.getElementById("edad").value,
        ocupacion: document.getElementById("dropdown").value,
        mensaje: document.getElementById("textarea").value
    };

    emailjs.send("service_fp8mckp", "template_7ws7hea", params)
    .then(function() {
        alert("Tu mensaje fue enviado correctamente ✔");
        document.getElementById("survey-form").reset();
    }, function(error) {
        alert("❌ Ocurrió un error: " + JSON.stringify(error));
    });
});
