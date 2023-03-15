// create featured class in section
const featureClass = document.querySelector("section");
featureClass.setAttribute("class", "featured");

// create new article post
const newPost = document.querySelector(".posts");
const newArticle = document.createElement("article");
newPost.append(newArticle);

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
newArticle.append(h3);

const p = document.createElement("p");
p.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.append(p);

const aside = document.createElement("aside");
const asideP = document.createElement("p");
asideP.innerHTML = `<span><Strong>Read Time:</strong> 4 Minutes</span> <a href="#">Read more...</a>`;
aside.append(asideP);
newArticle.append(aside);

// first and second article switch places

const articles = document.querySelectorAll("main section.posts article");
let firstArticle = articles[0];
articles[1].after(firstArticle);
