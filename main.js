const section = document.querySelector("section");
section.classList.add("featured");

const article = document.createElement("article");
const addToSection = document.querySelector(".posts");

addToSection.append(article);

const img = document.createElement("img");

article.prepend(img);

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");

article.append(h3);

h3.textContent = "Stop Planning";

const firstPeTag = document.createElement("p");

article.append(firstPeTag);

firstPeTag.textContent = "You -- yes you!";

const aside = document.createElement("aside");

article.append(aside);

const secondPeTag = document.createElement("p");

aside.append(secondPeTag);

const span = document.createElement("span");

secondPeTag.prepend(span);

span.textContent = "4 Minutes";

const strong = document.createElement("strong");

span.prepend(strong);

strong.textContent = "Read Time";

const aTag = document.createElement("a");

secondPeTag.append(aTag);

aTag.setAttribute("href", "#");

aTag.textContent = "Read more";

//could have done this instead with innerHTML
// const aside = document.createElement('aside');
// aside.innerHTML = "<p><span><strong>Read Time:</strong> 4 Minutes</span><a href='#'>Read more...</a></p>";
// article.append(aside);

 const stChild = document.querySelector(".posts article");

 console.log(stChild);

 const ndChild = document.querySelector("section.posts article:nth-child(2) ");

 console.log(ndChild);

 ndChild.after(stChild);



