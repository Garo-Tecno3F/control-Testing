let celArray = []
function looping(celDatos){
    for(let i =0; i < celDatos.length; i++){
    contenido.innerHTML +=`
    <div class="col-sm-6 col-md-4 cartita">
    <h4 class="creador">${celDatos[i].Grupo}</h4>
    <a href="${celDatos[i].Enlace}" target="_blank">
      <img class="fotito" src="${celDatos[i].Imagen}" alt="Screen ${celDatos[i].Nombre}">
        </a>
  </div>

  	`
  }
}

function traer(){
fetch('https://script.google.com/macros/s/AKfycbxs96FaMGHJ5sk8KtXqZ-PsOeWzwqYjENX7ha24QrPzn5kaIFlS8XSn-rqM7M0KwmTXMg/exec')
  .then(response => response.json())
  .then(datos => {
  	console.log(datos.datos)
  	 personasArray = [...datos.datos]
  	looping(datos.datos)
  })
  .catch(error => alert("sin resultados"));
  }

traer();