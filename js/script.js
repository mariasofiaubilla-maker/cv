// Tema claro / oscuro
$("#themeBtn").click(function () {
    $("body").toggleClass("dark-theme");
});

// Animación al hacer scroll
$(window).on("scroll", function () {
    $(".section").each(function () {
        let top = $(this).offset().top - window.innerHeight;
        if ($(window).scrollTop() > top) {
            $(this).fadeIn(800);
        }
    });
});

// Validación formulario
$("#contactForm").submit(function (e) {
    e.preventDefault();
    $("#msg").text("Mensaje enviado correctamente ✔").css("color", "green");
});
