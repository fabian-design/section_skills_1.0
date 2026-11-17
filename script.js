// Anima las barras cuando la sección de habilidades entra en pantalla.
function efectoHabilidades() {
    var skills = document.getElementById('skills');
    if (!skills) return;
    if (window.innerHeight - skills.getBoundingClientRect().top >= 180) {
        ['html', 'js', 'bd', 'ps'].forEach(function (id, i) {
            var barra = document.getElementById(id);
            if (barra) barra.classList.add('barra-progreso' + (i + 1));
        });
        window.removeEventListener('scroll', efectoHabilidades);
    }
}

window.addEventListener('scroll', efectoHabilidades, { passive: true });
window.addEventListener('load', efectoHabilidades);




