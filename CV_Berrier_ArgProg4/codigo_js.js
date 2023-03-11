/** código utilizado para darle animacion y funcionalidad al Proyecto */

/** Se utiliza la API de la página sugerida para obtener datos aleatorios y completar la información del usuario */

var datosDeUsuario = {}
/**se crea una funcion que obtenga los datos de la API */
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
/**se crea una funcion que inserte en el html los datos obtenidos */
function MostrarDatos(datos) {
  console.log(datos)
  let dob = datos.dob.date
  let fechaNac = dob.substring(0,10);
  let telefono = datos.cell
  let email = datos.email
  let nombre= `${datos.name.first} ${datos.name.last}`
  //** --------------------formato basico de los datos-------------- */
  // document.getElementById('info_de_h1').innerHTML= 
  //   `CURRICULUM VITAE<br>
  //    ${datos.name.first} ${datos.name.last}<br>
  //    ${datos.cell}<br> 
  //    ${datos.email}`;
  //** ----------------------se mejora el formato, permitiendo que se contacte directamente por link de whatsapp o email----------- */
  document.getElementById('info_de_h1').innerHTML= 
     'CURRICULUM VITAE<br>'+nombre+
     '<br><a href="https://api.whatsapp.com/send?phone='+telefono+
     '&text=Hola, te estamos contactando desde el CV web">'+telefono+
     '</a> <br> <a href="mailto:'+email+'?Subject=Contacto%20desde%20CV%20web%20">'+email+'</a>'
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

/** se ejecuta la funcion luego de la carga de la pagina */
window.onload = () => {ObtenerDatos()};


// /** --------------------------Codigo para los botones de la barra lateral--------------------------------- */

document.addEventListener('click', () => {document.getElementById("recibidor").style.display ='none'}); /**se muestra un cartel que explica el funcionamiento de la botonera hasta realizar el primer click dentro de la pagina */

function Contenido(ID){
  let elemento = document.getElementById(ID);
  if (elemento.style.display == 'block') {
    elemento.style.display = 'none';
    }else {
    elemento.style.display = 'block';
  }
}