/** código utilizado para darle animacion y funcionalidad al Proyecto */

/** de la página sugerida para obtener datos aleatorios se obtiene información del usuario */
let usuario
fetch('https://randomuser.me/api/1.4/?gender=male')
  .then((response) => response.json())
  .then(data => {usuario = data.results[0];})
  //.then(() => {console.log(usuario);});  
console.log(usuario);

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


