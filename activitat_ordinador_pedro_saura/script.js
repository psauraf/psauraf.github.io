// script.js
document.addEventListener('DOMContentLoaded', function () {
    var miVideo = document.getElementById('miVideo');

    // Reproducir el video cuando el ratón pasa por encima
    miVideo.addEventListener('mouseover', function () {
        if (miVideo.paused) {
            miVideo.play();
        }
    });

    // Ocultar los controles predeterminados
    miVideo.controls = false;

});
