var xhr = new XMLHttpRequest();
var url = "./health.json"; // changed from news_article.json to health.json

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
  if (xhr.status === 200) {
    var articles = xhr.response.articles;
    var newsDiv = document.getElementById("news-articles");

    articles.forEach(function (article) {
      var articleDiv = document.createElement("div");
      articleDiv.classList.add("news-article");

      var title = document.createElement("h2");
      title.textContent = article.title;

      var description = document.createElement("p");
      description.textContent = article.description;

      var category = document.createElement("p");
      category.textContent = "Category: " + (article.category || "Health");

      var date = document.createElement("p");
      date.textContent = "Date: " + (article.date || "N/A");

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(category);
      articleDiv.appendChild(date);

      newsDiv.appendChild(articleDiv);
    });
  } else {
    console.error("Failed to load articles. Status:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Network error while fetching articles.");
};

xhr.send();
