
// 1. Evitar el comportamiento por defecto al hacer click (por ejemplo, que un enlace no navegue a otra página)

document.addEventListener('click', (event) => {
    event.preventDefault();

    const element = event.target;

    // 2. Al hacer click, según el tipo de elemento:

    // 2.1 Imágenes: cambiamos la imagen por un gif aleatorio magic-*
    if (element.tagName === 'IMG') {
        if (!element.dataset.originalSrc) {
            element.dataset.originalSrc = element.getAttribute('src');
        }
        element.src = getRandom(gifs);
        return;
    }

    // 2.2 Párrafos: cambiamos el color del texto y el de fondo
    if (element.tagName === 'P') {
        element.style.color = getRandom(colors);
        element.style.backgroundColor = getRandom(colors);
        return;
    }

    // 2.3 Bloques de article o section: cambiamos el color de fondo
    if (element.tagName === 'ARTICLE' || element.tagName === 'SECTION') {
        element.style.backgroundColor = getRandom(blockColors);
        return;
    }
});


// 3. Al pasar el cursor por encima, y devolver al estado original cuando el cursor sale del elemento

// 3.1 Imágenes: cambiamos la imagen por abracadabra.gif
document.addEventListener('mouseover', (event) => {
    const element = event.target;

    if (element.tagName === 'IMG') {
        if (!element.dataset.originalSrc) {
            element.dataset.originalSrc = element.getAttribute('src');
        }
        element.src = abracadabraGif;
        return;
    }

    // 3.2 Párrafos: cambiamos el color del texto y el de fondo
    if (element.tagName === 'P') {
        element.style.color = getRandom(colors);
        element.style.backgroundColor = getRandom(colors);
        return;
    }

    // 3.3 Bloques de article o section: fondo distinto al de párrafo
    if (element.tagName === 'ARTICLE' || element.tagName === 'SECTION') {
        element.style.backgroundColor = getRandom(blockColors);
        return;
    }
});

// Al salir del elemento devolvemos el estado original
document.addEventListener('mouseout', (event) => {
    const element = event.target;

    // 3.1 Imágenes: restauramos la imagen original
    if (element.tagName === 'IMG' && element.dataset.originalSrc) {
        element.src = element.dataset.originalSrc;
        return;
    }

    // 3.2 Párrafos: eliminamos los estilos y recuperamos los originales
    if (element.tagName === 'P') {
        element.style.color = '';
        element.style.backgroundColor = '';
        return;
    }

    // 3.3 Bloques de article or section: eliminamos el fondo aplicado
    if (element.tagName === 'ARTICLE' || element.tagName === 'SECTION') {
        element.style.backgroundColor = '';
        return;
    }
});

// 4. Función que devuelve un valor aleatorio de un array

const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// Comprobación de la función getRandom
console.log(getRandom(['red', 'blue', 'green']));


// 5. Paleta de colores elegida en coolors.co (Magical palette)

const colors = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590'];

// Colores de fondo para los bloques article/section (distintos a los de párrafo)
const blockColors = ['#22223B', '#4A4E69', '#2A9D8F', '#264653', '#6D597A', '#355070'];


// 6. Gifs mágicos de la carpeta assets, elegidos con getRandom en los apartados 2 y 3

const gifs = [
    'assets/magic-1.gif',
    'assets/magic-2.gif',
    'assets/magic-3.gif',
    'assets/magic-4.gif',
    'assets/magic-5.gif',
    'assets/magic-6.gif'
];

const abracadabraGif = 'assets/abracadabra.gif';
