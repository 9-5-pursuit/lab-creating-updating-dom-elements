let firstSection = document.querySelector("main section");
firstSection.setAttribute("class", "featured"); // adds a new class name featured to the main section
let thirdSection = document.querySelector(" section.posts");
let newArticle = document.createElement("article");
thirdSection.append(newArticle); // attachs the new article to last section
let newImage = document.createElement("img");
newArticle.appendChild(newImage); // attachs the new image to article
newImage.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
newImage.setAttribute("alt", "Image of a mountain in front of a lake."); // sets the new image to the existing image attribute
let header = document.createElement("h3");
newArticle.appendChild(header); // attach the header to the article
header.textContent = "Stop Planning";
let p1 = document.createElement("p");
newArticle.append(p1); // attach the first paragraph to the article
p1.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
let aside = document.createElement("aside");
newArticle.append(aside); // attached aside to article
let p2 = document.createElement("p");
aside.append(p2); // attached paragraph to aside
let span = document.createElement("span");
p2.append(span); // attached
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
let link = document.createElement("a");
p2.append(link); // attached link to paragraph
link.setAttribute("href", "#");
link.textContent = "Read more...";
let first = document.querySelector("section.posts article:first-of-type");
let second = document.querySelector("section.posts article:nth-of-type(2)");
second.after(first);
