/** código utilizado para darle animacion y funcionalidad al Proyecto */

/** Utilizamos la API de la página sugerida para obtener datos aleatorios y completar la información del usuario */

var datosDeUsuario = {}

function ObtenerDatos() {

  fetch('https://randomuser.me/api/1.4/?gender=male')
  .then((response) => {response.json()
    .then(data => {datos = [data.results[0]];
    console.log(datos);
    MostrarDatos(datos[0]);
    })
    .catch(error => console.log(error));
  })
  .catch(error => console.log(error))
}

function MostrarDatos(datos) {
  console.log(datos)
  let dob = datos.dob.date
  let fechaNac = dob.substring(0,10);
  document.getElementById('info_de_h1').innerText= 
    `${datos.name.first} ${datos.name.last}
     ${datos.cell}
     ${datos.email}`;
  document.getElementById('Nombre').innerHTML=
      '<h3>Nombre: </h3>'+`${datos.name.first}`
  document.getElementById('Apellido').innerHTML=
      '<h3>Apellido: </h3>'+`${datos.name.last}`
  document.getElementById('Nacimiento').innerHTML=
      '<h3>Nacimiento: </h3>'+fechaNac
  document.getElementById('Domicilio').innerHTML=
      '<h3>Domicilio: </h3>'+`${datos.location.street.name} ${datos.location.street.number}, ${datos.location.city}, ${datos.location.country}`
  document.getElementById('DNI').innerHTML=
      '<h3>DNI: </h3>'+`${datos.id.value}`
  document.getElementById('foto').src = datos.picture.large
}


window.onload = () => {ObtenerDatos()};


// /** ---------------------------Codigo para los botones de la barra lateral--------------------------------- */

document.addEventListener('click', () => {document.getElementById("recibidor").style.display ='none'});

function Contenido(ID){
  let elemento = document.getElementById(ID);
  if (elemento.style.display == 'block') {
    elemento.style.display = 'none';
    }else {
    elemento.style.display = 'block';
  }
}