// Adding class of 'featured' to first section element

const firstSection = document.querySelector("section");
firstSection.setAttribute("class", "featured");

// Create 'article' element and adding it to the end of the section.posts element

const sectionPosts = document.querySelector(".posts");
//console.log(sectionPosts);

const article = document.createElement("article");
sectionPosts.append(article);

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const h3 = document.createElement("h3");
h3.innerText = "Stop Planning";
article.append(h3);

const paragraph = document.createElement("p");
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);

const aside = document.createElement("aside");
article.append(aside);

const paragraph2 = document.createElement("p");
aside.append(paragraph2);

const span = document.createElement("span");
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
paragraph2.append(span);

const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.innerText = " Read more...";
paragraph2.append(anchor);

//  Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.

const allSectionPosts = document.querySelectorAll(".posts article");
// console.log(allSectionPosts[0]);
// console.log(allSectionPosts[1]);

allSectionPosts[1].append(allSectionPosts[0]);
