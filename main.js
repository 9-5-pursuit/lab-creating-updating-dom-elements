// class of "featured" goes first `section` element on the page
document.querySelector("section").classList.add("featured");

const article = document.createElement("article");

// img after article
const img = document.createElement("img");

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

// h3 (append) after img
const h3 =document.createElement("h3");

h3.textContent = "Stop Planning";
article.append(h3);

// p append after h3
const p = document.createElement("p");

p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(p);

// aside append after p
const aside = document.createElement("aside");

aside.innerHTML = "<p><span><strong>Read Time:</strong> 4 Minutes</span><a href='#'>Read more...</a></p>";
article.append(aside);

// add at the end of the `section.posts` element.
document.querySelector("section.posts").append(article);

// Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article (prepend)
const article1 = document.querySelector("section.posts article:first-child");
const article2 = document.querySelector("section.posts article:nth-child(2)");

article2.before(article1);
document.querySelector("section.posts").prepend(article2); 
























 


