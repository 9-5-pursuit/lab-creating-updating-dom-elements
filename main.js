let sectionTag = document.querySelector("section");

sectionTag.setAttribute("class", "featured");

const article = document.createElement("article");

let postSection = document.querySelector(".posts");

postSection.append(article);

let imgTag = document.createElement("img");
imgTag.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imgTag.setAttribute("alt", "Image of a mountain in front of a lake.");

let asideTag = document.createElement("aside");

article.innerHTML = "<h3>Stop Planning</h3>";

article.innerHTML +=
  "<p>  You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself? </p>";

article.innerHTML +=
  '<aside> <p> <span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a></p></aside>';

article.prepend(imgTag);

let postArticle = document.querySelectorAll(".posts article");

for (let i = 0; i < postArticle.length; i++) {
  postArticle[i].setAttribute("class", `article${i}`);
}
let firstArticle = document.querySelector(".article0");

let secondArticle = document.querySelector(".article1");

let thirdArticle = document.querySelector(".article2");

secondArticle.after(firstArticle);

firstArticle.classList.remove("article0");
secondArticle.classList.remove("article1");
thirdArticle.classList.remove("article2");
