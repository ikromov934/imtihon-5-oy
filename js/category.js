const elform = document.querySelector(".form");
const elinput = document.querySelector(".inputs");
const btn = document.querySelector(".btns")
let newsContainer = document.getElementById("news-container");

let key = "d4b5997dc7c24caf97ccfcbd5196d4a9"

elform.addEventListener('click', function (evt) {
  evt.preventDefault();
  let search = elinput.value;
  let searchUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&q=${search}&apiKey=${key}`
  newsContainer.innerHTML = ""
  getData(searchUrl)
});




const url =
  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93c3516338mshccae5e8340c1ebcp18d82cjsn10386345d93b",
    "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
  },
};

async function getData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderNews(result.articles);
  } catch (error) {
    console.error(error);
  }
}

function renderNews(articles) {
 
  articles.forEach((article) => {
    let newsItemElement = document.createElement("div");
    newsItemElement.classList.add("news-item");

    let imgElement = document.createElement("img");
    imgElement.classList.add("news-img");
    imgElement.src = article.urlToImage;

    let titleElement = document.createElement("h2");
    titleElement.classList.add("news-title");
    titleElement.textContent = article.title;

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("news-description");
    descriptionElement.textContent = article.description;

    let sourceElement = document.createElement("p");
    sourceElement.classList.add("news-source");
    sourceElement.textContent = "Source: " + article.source.name;

    newsItemElement.appendChild(imgElement);
    newsItemElement.appendChild(titleElement);
    newsItemElement.appendChild(descriptionElement);
    newsItemElement.appendChild(sourceElement);
    newsContainer.appendChild(newsItemElement);
  });
}

getData(url, options);

