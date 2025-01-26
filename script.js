const images = [
  'images/image1.jpeg',
  'images/image2.webp',
  'images/image3.jpeg',
  'images/image4.jpeg',
  'images/image5.jpeg',
  'images/image6.webp',
  'images/image7.webp',
  'images/image8.webp',
  'images/image9.webp',
  'images/image10.webp',
  'images/image11.webp',
  'images/image12.webp',
  'images/image13.webp',
  'images/image14.webp',
  'images/image15.webp',
  'images/image16.webp',
  'images/image17.webp',
  'images/image18.webp',
  'images/image19.webp',
  'images/image20.webp',
  'images/image21.webp',
  'images/image22.webp',
  'images/image23.webp',
  'images/image24.webp',
  'images/image25.jpeg',
  'images/image26.webp',
  'images/image27.webp',
];

// Cargar los poemas desde poemas.json
async function fetchPoems() {
  const response = await fetch('poemas.json');
  const data = await response.json();
  return data.poemas; // Devuelve solo el array de poemas
}

// Botón: Mostrar poema e imagen aleatorios
document.getElementById('random-button').addEventListener('click', async () => {
  // Imagen aleatoria
  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.getElementById(
    'image-container'
  ).innerHTML = `<img src="${randomImage}" alt="Imagen aleatoria">`;

  // Poema aleatorio
  const poems = await fetchPoems();
  const randomPoem = poems[Math.floor(Math.random() * poems.length)];
  document.getElementById('poem-title').textContent =
    randomPoem.title || 'Sin título';
  document.getElementById('poem-content').textContent =
    randomPoem.content || 'Sin contenido';
});

// Botón: Mostrar todos los poemas e imágenes
document.getElementById('view-all-button').addEventListener('click', async () => {
  const poems = await fetchPoems(); // Obtener todos los poemas
  const container = document.getElementById('all-content-container');
  container.innerHTML = ''; // Limpiar el contenedor antes de agregar contenido nuevo

  // Iterar sobre los poemas y las imágenes
  poems.forEach((poem, index) => {
    const poemElement = document.createElement('div');
    poemElement.className = 'poem'; // Clase para estilizar, opcional
    poemElement.innerHTML = `
      <h2>${poem.title || 'Sin título'}</h2>
      <p>${poem.content || 'Sin contenido'}</p>
      ${
        images[index]
          ? `<img src="${images[index]}" alt="Imagen del poema ${index + 1}">`
          : '<p>No hay imagen disponible.</p>'
      }
    `;
    container.appendChild(poemElement);
  });
});
