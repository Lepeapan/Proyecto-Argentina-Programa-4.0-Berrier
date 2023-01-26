/** código utilizado para darle animacion y funcionalidad al Proyecto */

/** de la página sugerida para obtener datos aleatorios se obtiene información del usuario */

fetch('https://randomuser.me/api/1.4/?gender=male')
  .then((response) => response.json())
  .then(data => {usuario = data.results[0];})
  .then(() => {console.log(usuario);});



