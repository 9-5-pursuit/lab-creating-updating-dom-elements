const firstPageSection = document.querySelector("section");
firstPageSection.setAttribute("class", "featured");


const sectionPosts = document.querySelector("section.posts");
const article = document.createElement("article");
sectionPosts.append(article);
const image = document.createElement("img");
article.append(image);
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake." );

const h3 = document.createElement("h3");
article.append(h3);
h3.textContent = "Stop Planning";

const pTag1 = document.createElement("p");
article.append(pTag1);
pTag1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement("aside");
article.append(aside);
const pTag2 = document.createElement("p");
aside.append(pTag2);
const span = document.createElement("span");
pTag2.append(span);
span.innerHTML = "<strong>Read Time: </strong> 4 Minutes";

const link = document.createElement("a");
pTag2.append(link);
link.setAttribute("href", "#");
link.textContent = "Read more...";



const firstPost = document.querySelector("section.posts article:first-of-type");
const secondPost = document.querySelector("section.posts article:nth-of-type(2)");

secondPost.after(firstPost);