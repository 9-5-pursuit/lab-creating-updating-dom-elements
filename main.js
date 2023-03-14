//question1
const newClass = document.querySelector("main section");

newClass.classList.add("featured");
// question2
const newElement = document.createElement("article");
const post = document.querySelector("main .posts");
post.append(newElement);

const paragraph1 = document.createElement("p");

paragraph1.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning somuch and instead focusing on relaxing. Taking a break at all is so stressfull these days; why add to the stress by overworking yourself?";

newElement.append(paragraph1);
const paragraph2 = document.createElement("p");

const aside = document.createElement("aside");
newElement.append(aside);

const img2 = document.createElement("img");

img2.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img2.setAttribute("alt", "Image of a mountain in front of a lake.");
newElement.prepend(img2);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
img2.after(h3);
const check = document.querySelectorAll("img");

aside.prepend(paragraph2);

const span = document.createElement("span");

const strong = document.createElement("strong");

strong.textContent = "Read Time:";

span.textContent = " 4 Minutes ";
paragraph2.prepend(span);
span.prepend(strong);

const atag = document.createElement("a");
atag.setAttribute("href", "#");
atag.textContent = "Read more...";

paragraph2.append(atag);

console.log(check);
//question 3

const allArticles = post.querySelectorAll("article");

console.log(allArticles);

const art1 = allArticles[0];

const art2 = allArticles[1];

art2.after(art1);
