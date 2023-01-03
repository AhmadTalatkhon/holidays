async function getMovie() {
  try {
    const result = await fetch("http://www.omdbapi.com/?s=social&page1&i=tt3896198&apikey=910d3ecd");

    const playload = await result.json();
    return playload
  } catch (error) {
    alert("Error");
  }
}
/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
getMovie().then(response => {
  // const movie = console.log(response);

  // const box = document.createElement("div");
  // box.innerHTML = movie.Title;

  // const poster = document.createElement("img");
  // poster.src = movie.Poster

  // document.body.append(box)

  const movies = response.Search
  movies.forEach((movie) => {
    const card = document.getElementById("template-movie").cloneNode(true).content;

    const img = card.querySelector(".card-img-top");
    img.src = movie.Poster;

    card.querySelector(".card-title").innerHTML = movie.Title;
    card.querySelector(".card-text").innerText = `Creation date ${movie.Year}`

    document.body.append(card)
  })
})