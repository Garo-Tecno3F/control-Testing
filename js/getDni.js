const consultarButton = document.querySelector('#consultar');
const tablaResultados = document.querySelector('#tablaResultados');

function getRowData(dni) {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwG7g4CKRC7kDGjhUVoTvNKoA2rEiddxz68ExRiCjSFhwOTjvWS57sMGBPhuxiOi-AKYQ/exec';
  
    fetch(`${scriptUrl}?dni=${dni}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //document.getElementById('resultado').textContent =  data//JSON.stringify(data, null, 2);
        mostrar_datos(data);
      })
      .catch(error => console.error('Error:', error));
  }

consultarButton.addEventListener('click', function() {
    const dni = document.querySelector('#dni2').value;
    getRowData(dni)
        //document.getElementById('resultado').textContent ='Consultar button clicked!'+ dni;
});

function mostrar_datos(x){
  tablaResultados.innerHTML = '';

  let encabezados = '<tr><th>Nombre</th><th>Apellido</th><th>Estado</th></tr>'; 
  tablaResultados.innerHTML += encabezados;

  let fila = `<tr><td>${x[1]}</td><td>${x[2]}</td><td>${x[5]}</td></tr>`;
    tablaResultados.innerHTML += fila;

  /*for (let i = 0; i < x.length; i++){
    let fila = `<tr><td>${x[2]}</td><td>${registro.apellido}</td><td>${registro.estado}</td></tr>`;
    tablaResultados.innerHTML += fila;
};*/

};

