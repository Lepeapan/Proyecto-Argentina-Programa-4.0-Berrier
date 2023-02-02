/** código utilizado para darle animacion y funcionalidad al Proyecto */

/** de la página sugerida para obtener datos aleatorios se obtiene información del usuario */
let usuario
fetch('https://randomuser.me/api/1.4/?gender=male')
  .then((response) => response.json())
  .then(data => {usuario = data.results[0];})
  .then(() => {console.log(usuario);});  
//console.log(usuario);

/** -------------------codigo de MEDIUM.com---------------------- */

// const apiData = () => {
//     fetch('https://randomuser.me/api/1.4/?gender=male')
//       .then((response) => {
//         return response.json()
//     }).then((data) => {
//         fetchedData(data)
//     })
// }

// fetchedData = (apiData) => {
//   console.log(apiData)
// }
//console.log(apiData)
/** ------------------------------------------------------------ */
document.getElementById("boton_DatosPersonales").onclick = function() {
  Contenido('DatosPersonales');
}
//document.getElementsByClassName("escondido").style.display = 'none'
let contador=0
function Contenido(ID){
  let elemento = document.getElementById(ID);
  if (elemento.style.display == 'block') {
    elemento.style.display = 'none';
    }else {
    elemento.style.display = 'block';
  }
  
  //esta parte es para chequear el funcionamiento de los botones en la etapa de desarrollo//
  contador+=1;
  console.log("se presionó el boton "+ID+". En total se hicieron "+contador+" clicks");
}