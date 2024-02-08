const apiKey = '6QUvkwoZbg1G58kySwhsuG2CXhBGgOMdbbX3yXFXCxHMuLkqP7DERqfB';

function loadData(search){
  fetch(`https://api.pexels.com/v1/search?query=`+search, {
  headers: {
    Authorization: apiKey
  }
  })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .then(json => {
    let containerFoto = document.getElementById("container-photos");
        const photos = json.photos; // Array contenente gli album

        // Itera su ogni album ottenuto
        photos.forEach(img => {
            // Crea un nuovo div per l'album
            const albumDiv = document.createElement("div");
            albumDiv.classList.add("album");

            // Crea un'immagine per l'album
            const albumImg = document.createElement("img");
            albumImg.src = img.src.medium;

            // Aggiungi l'immagine e il titolo al div dell'album
            albumDiv.appendChild(albumImg);
            containerFoto.appendChild(albumDiv);

        });
    })
  .catch(error => {
    console.log('Si è verificato un errore:', error);
  });

}



  let button = document.getElementById("search-button");

  

  button.addEventListener("click", function(){
    let label = document.getElementById("inputSearch");
    loadData(label.value);
  });