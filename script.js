/* const apiKey = '6QUvkwoZbg1G58kySwhsuG2CXhBGgOMdbbX3yXFXCxHMuLkqP7DERqfB'; */
const apiKey = '563492ad6f91700001000001b0ec30909a274fddaf88db2ac6d23e44';


function loadData(search){
  fetch(`https://api.pexels.com/v1/search?query=`+search, {
  headers: {
    Authorization: apiKey,
  }
  })
  .then((response) => response.json())
  .then(res => {
    let cont = document.querySelector(".row");

    cont.innerHTML = res.photos.map((photo) => {
      return ` <div class='col col-4'> <div class="card mb-4 shadow-sm">
              <img src='${photo.src.large}' />

              <div class="card-body">
                
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div> </div>`
  }).join("")
})
.catch((err) => console.error(err))
}


  let button = document.getElementById("search-button");

  button.addEventListener("click", function(){
    let label = document.getElementById("inputSearch");
    loadData(label.value);
  });