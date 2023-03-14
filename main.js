// First Part
const firstSection = document.querySelector("main section");
firstSection.setAttribute("class", "featured");

// Second Part
const secPosts = document.querySelector(".posts");
const newArticle = document.createElement("article");
secPosts.append(newArticle);

let imgTag = document.createElement("img");
imgTag.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imgTag.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(imgTag);

let h3Tag = document.createElement("h3");
h3Tag.textContent = "Stop Planning";
newArticle.append(h3Tag);

let pTag = document.createElement("p");
pTag.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.append(pTag);

let asideTag = document.createElement("aside");
let p2Tag = document.createElement("p");
p2Tag.innerHTML = `<span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a>`;
asideTag.append(p2Tag);
newArticle.append(asideTag);

//  Third Part
let arr = document.querySelectorAll("main section.posts article");
let firstArticle = arr[0];
arr[1].after(firstArticle);
