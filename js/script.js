const titleClickHandler = function(event){
  const clickedElement = this;
  event.preventDefault();

      /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
  }

      /* add class 'active' to the clicked link */
  this.classList.add("active")

      /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts article.active");

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
      /* get 'href' attribute from the clicked link */

  const articleSelector = this.getAttribute("href")
    console.log(articleSelector)

      /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector)
      /* add class 'active' to the correct article */
    targetArticle.classList.add("active")
}
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}