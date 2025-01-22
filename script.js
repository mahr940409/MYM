const images = [
  "images/image1.jpeg",
  "images/image2.webp",
  "images/image3.jpeg",
  "images/image4.jpeg",
  "images/image5.jpeg",
  "images/image6.webp",
  "images/image7.webp",
  "images/image8.webp",
  "images/image9.webp",
  "images/image10.webp",
  "images/image11.webp",
  "images/image12.webp",
  "images/image13.webp",
  "images/image14.webp",
  "images/image15.webp",
  "images/image16.webp",
  "images/image17.webp",
  "images/image18.webp",
  "images/image19.webp",
  "images/image20.webp",
  "images/image21.webp",
  "images/image22.webp",
  "images/image23.webp",
  "images/image24.webp",
  "images/image25.jpeg"
];

async function fetchPoems() {
  const response = await fetch("poemas.json");
  const data = await response.json(); // Asegúrate de obtener los datos como un objeto
  return data.poemas; // Devuelve solo el array de poemas
}

document.getElementById("random-button").addEventListener("click", async () => {
  // Imagen aleatoria
  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.getElementById("image-container").innerHTML = `<img src="${randomImage}" alt="Imagen aleatoria">`;

  // Poema aleatorio
  const poems = await fetchPoems();
  const randomPoem = poems[Math.floor(Math.random() * poems.length)];
  document.getElementById("poem-title").textContent = randomPoem.tit || "Sin título";
  document.getElementById("poem-content").textContent = randomPoem.contenido || "Sin contenido";
});
