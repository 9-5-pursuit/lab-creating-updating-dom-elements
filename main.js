const section = document.querySelector("section");
section.setAttribute("class", "featured");


const article = document.createElement("article");
const art1 = document.querySelector("section.posts");
art1.append(article);

const img = document.createElement("img");
article.prepend(img);
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
article.append(h3);
h3.textContent = "Stop Planning";

const pi = document.createElement("p");
article.append(pi);
pi.textContent = "You -- yes you!";

const aside = document.createElement("aside");
article.append(aside);

const pe = document.createElement("p");
aside.append(pe)
 
const span = document.createElement("span");
pe.prepend(span);
span.textContent = "4 Minutes";

const strong = document.createElement("strong");
span.prepend(strong);
strong.textContent = "Read Time ";
 
const a = document.createElement("a");
pe.append(a);
a.textContent = "Read more";
a.setAttribute("href", "#");


const canChild = document.querySelector(".posts article");
console.log(canChild);

const weChild = document.querySelector("section.post article:weChild(2)");

console.log(weChild);

weChild.after(canChild);







