const temaKey = 'gelatoflowTema';
const botonTema = document.getElementById('botonTema');

function aplicarTema(tema) {
    const modoNocturnoActivo = tema === 'nocturno';
    document.body.classList.toggle('modo-nocturno', modoNocturnoActivo);

    if (!botonTema) return;

    botonTema.setAttribute('aria-pressed', String(modoNocturnoActivo));
    botonTema.setAttribute(
        'title',
        modoNocturnoActivo ? 'Cambiar a modo claro' : 'Cambiar a modo nocturno'
    );
}

function cambiarTema() {
    const temaActual = document.body.classList.contains('modo-nocturno') ? 'claro' : 'nocturno';
    localStorage.setItem(temaKey, temaActual);
    aplicarTema(temaActual);
}

aplicarTema(localStorage.getItem(temaKey) || 'claro');

if (botonTema) {
    botonTema.addEventListener('click', cambiarTema);
}
