// adding a class named feature
const section = document.querySelector("section");
section.setAttribute("class", "featured");

// creating a new post
const sectionPosts = document.querySelector("section.posts");
const article = document.createElement("article");

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const heading3 = document.createElement("h3");
heading3.textContent = "Stop Planning";
article.append(heading3);

const paragraph1 = document.createElement("p");
paragraph1.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paragraph1);

const aside = document.createElement("aside");

article.append(aside);

const paragraph2 = document.createElement("p");
aside.append(paragraph2);

const span = document.createElement("span");
paragraph2.append(span);
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";

const link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Read more...";

paragraph2.append(link);

sectionPosts.append(article);

// switched places

const firstPost = document.querySelector("section.posts article:first-of-type");
const secondPost = document.querySelector(
  "section.posts article:nth-of-type(2)"
);

secondPost.after(firstPost);
