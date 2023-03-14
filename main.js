//Test 1
//Select the first section element
const section = document.querySelector("main section");
//Add the "featured" class to that element
section.classList.add("featured");


//Test 2
//Select the section.posts element
const posts = document.querySelector("section.posts");
//Create article element
const article = document.createElement("article");
//Add article element to bottom of section.posts element
posts.append(article);

//Create image element
const img = document.createElement("img");
//Add image to article
article.append(img);
//Set attributes for image and alt text
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

//Select newly created article element
const heading = document.querySelector(
  "section.posts article:last-child"
);
//Create heading element
const h3 = document.createElement("h3");
//Add text to heading element
h3.textContent = "Stop Planning";
//Add heading to article after image element
heading.append(h3)

//Create paragraph element
const p = document.createElement("p");
//Add paragraph element to article after heading element
article.append(p);
//Add text to paragraph element
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

//Create aside element
const aside = document.createElement("aside");
//Add aside element to article after paragraph element
article.append(aside);

//Select aside element
const asideLocation = document.querySelector("section.posts article:last-child aside");
//Create paragraph element
const paragraph = document.createElement("p");
//Add paragraph element inside of aside element
asideLocation.append(paragraph);

//Create span element
const span = document.createElement("span");
//Add text to span element
span.textContent = " 4 Minutes";

//Create strong element
const strong = document.createElement("strong")
//Select paragraph element location inside of aside element
const asideText = document.querySelector(
  "section.posts article:last-child aside p"
);
//Add span element to end of paragraph element 
asideText.prepend(span);
//Select span element location inside of paragraph element
const spanLocation = document.querySelector(
  "section.posts article:last-child aside p span"
);
//Add strong element to span element
spanLocation.prepend(strong);
//Add text to strong element
strong.textContent = "Read Time:";

//Create a hyperlink element tag
const a = document.createElement("a");
//Add hyperlink element tag inside of p tag but outside of span tag
spanLocation.after(a);
//Set attribute for hyperlink element
a.setAttribute("href", "#");
//Add text to hyperlink element
a.textContent = "Read more..."


//Test 3
//Select the first article in posts section
const article1 = document.querySelector("section.posts article:first-child");
//Select the last article 
const article3 = document.querySelector("section.posts article:last-child");
//Move the first article directly before the third article which automatically moves the second article to the first position
article3.before(article1);










