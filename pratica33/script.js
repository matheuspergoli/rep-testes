"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    const cursosMapeados = cursos.map((curso) => {
        return `<section>
              <h1>${curso.nome}</h1>
              <p>Horas: ${curso.horas}</p>
              <p>Aulas: ${curso.aulas}</p>
              <p>Nível: ${curso.nivel}</p>
              <p>Gratuito: ${curso.gratuito ? 'sim' : 'não'}</p>
            </section>`;
    });
    cursosMapeados.forEach((curso) => {
        document.body.innerHTML += curso;
    });
}
