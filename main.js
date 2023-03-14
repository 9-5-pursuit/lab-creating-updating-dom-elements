// Part One

let firstSection = document.querySelector("main section");
firstSection.setAttribute("class", "featured");


// Part Two


let postSection = document.querySelector(".posts");

let article = document.createElement("article");

postSection.append(article);

let image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

article.prepend(image);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

article.append(h3);

let p1 = document.createElement("p");
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

article.append(p1);

let asideElement = document.createElement("aside");

article.append(asideElement);

let p2 = document.createElement("p");

asideElement.prepend(p2);

let linkElement = document.createElement("a");
linkElement.setAttribute("href", "#");
linkElement.textContent = "Read more";

p2.append(linkElement);

let spanElement = document.createElement("span");

p2.prepend(spanElement);

let strongElement = document.createElement("strong");
strongElement.textContent = "Read Time:";

spanElement.prepend(strongElement);

let text = " 4 Minutes";

spanElement.append(text);


// Part Three


articleArray = document.querySelectorAll(".posts article");

articleItem = articleArray[1];

postSection.prepend(articleItem);
