//const urlApi = "https://newsapi.org/v2/everything?q=keyword&apiKey=90b0a1e6642449088471333a43bcb4c2";
/* const getArticles = require("./server");
console.log(getArticles); */
const urlApi = "http://localhost:3333/articles";
function formatDate(isoString) {
  const date = new Date(isoString);
  const formatted = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted.replace(
    /de ([a-z])/,
    (_match, p1) => "de " + p1.toUpperCase()
  );
}

const dataNewspaper = async () => {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    const newspapers = data.articles;
    console.log(newspapers);

    const html = newspapers
      .map(
        (newspaper) =>
          `<article class="container">
            <header>
              <h2 class="title">${newspaper.title}</h2>
              <p class="date">
                <time datetime="${newspaper.publishedAt}">
                ${formatDate(newspaper.publishedAt)}
                </time>
              </p>
            </header>
            <img class="image" src="${newspaper.urlToImage}" alt="${
            newspaper.title
          }"/>
            <p class="content">
              ${newspaper.content}
            </p>
            <div class="content-footer">
              <span class="author">
                ${newspaper.author}
              </span>
              <a class="link" href="${
                newspaper.url
              }" target="_blank">Acesse a matéria completa <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </article>`
      )
      .join("");
    document.getElementById("newspapers").innerHTML = html;
  } catch (error) {
    console.error(error.message);
  }
};

dataNewspaper();
