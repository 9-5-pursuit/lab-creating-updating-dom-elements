const section = document.querySelector("section");

section.setAttribute("class", "featured");

const sectPosts = document.querySelector("section.posts");
const article = document.createElement("article");

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const headingThree = document.createElement("h3");
headingThree.textContent = "Stop Planning";
article.append(headingThree);

const paraOne = document.createElement("p");
paraOne.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paraOne);

const aside = document.createElement("aside");

article.append(aside);

const paraTwo = document.createElement("p");
aside.append(paraTwo);

const span = document.createElement("span");
paraTwo.append(span);
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";

const link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Read more...";

paraTwo.append(link);

sectPosts.append(article);

const firstPost = document.querySelector("section.posts article:first-of-type");
const secPost = document.querySelector("section.posts article:nth-of-type(2)");

secPost.after(firstPost);
