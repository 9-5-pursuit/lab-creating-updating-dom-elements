// add the class 'featured' to the first section element

let firstSection = document.querySelector("body main section");
firstSection.setAttribute("class", "featured");

// creating a article element and add it to the end of the section.posted element

let sectionPosts = document.querySelector(".posts");

let newArticle = document.createElement("article");
let newImage = document.createElement("img");
newImage.src = "images/paul-gilmore-unsplash.jpg";
newImage.alt = "Image of a mountain in front of a lake.";
newArticle.appendChild(newImage);

let newHeading = document.createElement("h3");
newHeading.textContent = "Stop Planning";
newArticle.appendChild(newHeading);

let newParagraph = document.createElement("p");
newParagraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.appendChild(newParagraph);

let newAside = document.createElement("aside");
let newAsideParagraph = document.createElement("p");
let newAsideSpan = document.createElement("span");
newAsideSpan.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
let newAsideLink = document.createElement("a");
newAsideLink.href = "#";
newAsideLink.textContent = "Read more...";
newAsideParagraph.appendChild(newAsideSpan);
newAsideParagraph.appendChild(newAsideLink);
newAside.appendChild(newAsideParagraph);
newArticle.appendChild(newAside);

sectionPosts.appendChild(newArticle);

// Moving the first article element to the end of the section.posts element becoming the second article element.

let sectionPosts = document.querySelector(".posts");
let firstArticle = sectionPosts.querySelector("article:first-of-type");
let secondArticle = sectionPosts.querySelector("article:nth-of-type(2)");

sectionPosts.insertBefore(firstArticle, secondArticle);

// this will do the reverse of the above code
// sectionPosts.insertBefore(secondArticle, firstArticle);
