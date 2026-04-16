const toggleButon = document.createElement('button');
const projectContent = document.getElementById('texto');
toggleButon.textContent = 'Mostrar más';
projectContent.classList.add('oculto');
toggleButon.addEventListener('click', () => {
    projectContent.classList.toggle('oculto');
    toggleButon.textContent = projectContent.classList.contains('oculto') ? 'Mostrar más' : 'Mostrar menos';
});
projectContent.parentNode.insertBefore(toggleButon, projectContent.nextSibling);
