const url = "https://api.jikan.moe/v4";
const animeGrid = document.querySelector("#anime-grid");
const darkModeSwitch = document.querySelector("#dark-mode-switch");

darkModeSwitch.addEventListener("change", () => {
  document.querySelector("html").classList.toggle("dark");
});

/* async function getAnimeImages() {
  try {
    const response = await fetch(url, options);
    const result = await response.jason();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getAnimeImages(); */

function getAnimeImages() {
  fetch(url + "/top/anime?genre=14/pictures")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Iterate through the anime objects in the data array
      data.data.forEach(function (anime) {
        //Access the anime URLs and create img elements
        const imgUrl = anime.images.jpg.image_url;
        const animeTitle = anime.title;
        const seriesType = anime.type;
        if (imgUrl) {
          //map images to a card
          animeGrid.innerHTML += `
            <div id="card">              
              <figure>    
                <div id="series-type">${seriesType}</div>         
                <img id="card-image" src="${imgUrl}" alt="Anime Poster">               
                <div id="play-button-container">
                 <a href="">
                    <img
                      id="play-button"
                      src="/assets/play-button-black.png"
                      alt="play-button"
                      />
                  </a>
                </div>
              </figure>
              <figcaption>${animeTitle}</figcaption>
            </div>`;
        }
      });
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
getAnimeImages();
