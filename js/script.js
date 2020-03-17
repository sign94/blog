const titleClickHandler = function(event) {
  const clickedElement = this;
  event.preventDefault();

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* add class 'active' to the clicked link */
  this.classList.add("active");

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }
  /* get 'href' attribute from the clicked link */

  const articleSelector = this.getAttribute("href");
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  /* add class 'active' to the correct article */
  targetArticle.classList.add("active");
};
const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks() {
  /* remove contents of titleList */
  const titleList = (document.querySelector(optTitleListSelector).innerHTML =
    "");
  /* for each article */
  const articles = document.querySelectorAll(".post");

  let html = " ";

  for (let article of articles) {
    console.log(article);

    /* get the article id */
    const articleId = article.getAttribute("id");
    console.log(articleId);
    /* find the title element */

    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";
    console.log(linkHTML);
    /* insert link into titleList */
    article.insertAdjacentHTML("afterend", linkHTML);
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;
}

generateTitleLinks();
