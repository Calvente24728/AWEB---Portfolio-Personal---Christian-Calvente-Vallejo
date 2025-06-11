document.addEventListener('DOMContentLoaded', function() {
    const inputTarea = document.querySelector('.section__label__input');
    const botonAgregar = document.querySelector('.section__label__boton');
    const listaTareas = document.querySelector('.section__ul');

    // Función para agregar una nueva tarea
    botonAgregar.addEventListener('click', function() {
        const texto = inputTarea.value.trim();
        if (texto !== '') {
            agregarTarea(texto);
            inputTarea.value = ''; // Limpiar el input después de agregar
        }
    });

    // También se puede agregar con Enter
    inputTarea.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const texto = inputTarea.value.trim();
            if (texto !== '') {
                agregarTarea(texto);
                inputTarea.value = '';
            }
        }
    });

    // Función para eliminar tareas (delegación de eventos)
    listaTareas.addEventListener('click', function(e) {
        if (e.target.classList.contains('section__ul__boton')) {
            e.target.parentElement.remove();
        }
    });

    // Función auxiliar para crear una nueva tarea
    function agregarTarea(texto) {
        const nuevaTarea = document.createElement('section');
        nuevaTarea.className = 'section__ul__tareas';
        
        const li = document.createElement('li');
        li.className = 'section__ul__tarea';
        li.textContent = texto;
        
        const boton = document.createElement('button');
        boton.className = 'section__ul__boton';
        boton.textContent = 'X';
        
        nuevaTarea.appendChild(li);
        nuevaTarea.appendChild(boton);
        listaTareas.appendChild(nuevaTarea);
    }
});