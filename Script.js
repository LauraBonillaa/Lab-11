const render = async () => {
	const response = await fetch('canciones.json');
  const data = await response.json();
	// Imprimimos el resultado
	console.log(data);
  console.log("holi")

console.log(render);
  const listaCanciones = document.getElementById('productos');
  const contador = document.getElementById('contador');
  let cantidadProductos = 0;

  
    data.forEach(cancion => {
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
          <button onclick="agregarAlCarrito()">Agregar al Carrito</button>
        </div>
      `;
      listaCanciones.appendChild(tarjeta);
    });
  
console.log(listaCanciones)

function agregarAlCarrito() {
  let contador = document.getElementById('contador');
  let cantidadProductos = parseInt(contador.textContent);
  cantidadProductos++;
  contador.textContent = cantidadProductos;
}
}
// Llamada a la función al cargar la página
document.addEventListener('DOMContentLoaded',render);
