/* 
document.getElementById('test-button').addEventListener('click', function(){
   const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
}); 
*/

const titleClickHandler = function(event) {
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /* [DONE] remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
  
    console.log('clickedElement:', clickedElement);
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
    const targetArticleSelector = clickedElement.getAttribute('href');
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(targetArticleSelector);
  
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }