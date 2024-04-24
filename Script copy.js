const render = async () => {
  async function fetchMoviesJSON() {
    const response = await fetch('canciones.json');
    const movies = await response.json();
    return movies;
  }

  const data = await fetchMoviesJSON();

  const listaCanciones = document.getElementById('productos');
  const contador = document.getElementById('contador');
  let cantidadProductos = 0;

  data.canciones.forEach(cancion => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('producto');
    tarjeta.innerHTML = `
      <img src="${cancion.imagen}" alt="${cancion.titulo}">
      <div>
        <h2>${cancion.titulo}</h2>
        <p>Artista: ${cancion.artista}</p>
        <p>Álbum: ${cancion.album}</p>
        <p>Género: ${cancion.genero}</p>
        <p>Duración: ${cancion.duracion}</p>
        <button class="agregar">Agregar al Carrito</button>
      </div>
    `;
    listaCanciones.appendChild(tarjeta);
  });

  console.log(listaCanciones);

  listaCanciones.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName == "BUTTON" && e.target.classList.contains('agregar')) {
      let cantidadProductos = parseInt(contador.textContent);
      cantidadProductos++;
      contador.textContent = cantidadProductos;
    }
  });
};

// Llamada a la función al cargar la página
document.addEventListener('DOMContentLoaded', render);
