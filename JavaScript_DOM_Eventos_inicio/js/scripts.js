// querySelector

const heading = document.querySelector('.header__texto h2') //retorna a 0 o a 1 elemnto
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');


enlaces[0].textContent = 'Nuevo texto para Enlace';
// enlaces[0].href = 'http://www.google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion_enlace');

//getElemnentById

// const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
// agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
// agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);






// EVENTOS
// console.log(1);

// window.addEventListener('load', function() { // load espera a que el JS y los arhivos que dependen del html esten listo
//     console.log(2);
// } );

// window.onload = function() {    
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // solo espera a que se descargue el html, pero no espera css o imagen. por eso imprime mas rapido.
//     console.log(4);
// });


// console.log(5);

// window.onscroll = function(e) {  // e es por evento
//     console.log(e);
// }

// seleccionar elementos y asociarles un elemento.

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e) {
//     console.log(e);
//     e.preventDefault();
//     // console.log('Enviando formulario');

//     // Validar un formulario
//     console.log('enviando formulario');
// });




// Eventos de los inputs y textArea

const datos = {
    nombre:'',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// nombre.addEventListener('input', function(e) {
//     console.log(e.target.value);
// } );

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento del submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === ''|| email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        
        return;
    }

    // crear otro alerta de correccion
    mostrarAlerta('Campos enviados correctamente');
    

    

    // console.log('Enviando Formulario');
});






function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(e.target)

    // console.log(datos);

}

// muestra un error en pantalla

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild( error );
//     //desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, (5000));
// }


// function mostrarCorrecto(mensaje) {
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');

//     formulario.appendChild( correcto );
//     setTimeout(() => {
//         correcto.remove();
//     }, 5000);
// }


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement ('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);

}