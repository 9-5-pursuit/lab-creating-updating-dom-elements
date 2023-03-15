const sectionClass = document.querySelector("main section");
sectionClass.setAttribute("class", "featured");

const postsSection = document.querySelector("section.posts");
const newArticle = document.createElement("article");
console.log(postsSection);

const newImg = document.createElement("img");
newImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(newImg);

const newHeader = document.createElement("h3");
newHeader.textContent = "Stop Planning";
newArticle.append(newHeader);

const newParagraph = document.createElement("p");
newParagraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.append(newParagraph);

const newAside = document.createElement("aside");
newArticle.append(newAside);

const otherPar = document.createElement("p");
const spanTag = document.createElement("span");
spanTag.innerHTML = "<strong>Read Time:</strong> 4 Minutes";

const newAsideLink = document.createElement("a");
newAsideLink.setAttribute("href", "#");
newAsideLink.textContent = "Read more...";
otherPar.append(spanTag);
otherPar.append(newAsideLink);
newAside.append(otherPar);
newArticle.append(newAside);

postsSection.append(newArticle);

const secondArticle = document.querySelector(
  "section.posts article:nth-of-type(2)"
);
const firstArticle = document.querySelector(
  "section.posts article:first-of-type"
);
firstArticle.before(secondArticle);
console.log(secondArticle);
