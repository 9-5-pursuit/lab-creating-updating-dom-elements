const addFeature = document.querySelector("main section");
addFeature.setAttribute("class", "featured");

//------------Swap section-----------------------//
const selectEl = document.querySelector("main .posts article");

const targetEl = document.querySelector("main .posts article:last-child");

targetEl.after(selectEl);

//-----------------------------------------------//

const newArt = document.createElement("article");
const secPosts = document.querySelector("main .posts");
secPosts.append(newArt);

const postImg = document.createElement("img");
postImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
postImg.setAttribute("alt", "Image of a mountain in front of a lake.");
newArt.append(postImg);

const stopH3 = document.createElement("h3");
stopH3.textContent = "Stop Planning";
postImg.after(stopH3);

let youP = document.createElement("p");
stopH3.after(youP);
youP.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

const asideEL = document.createElement("aside");
const strongP = document.createElement("p");

youP.after(asideEL);
asideEL.append(strongP);

//--------------HEll-----------//

let spanRef = document.createElement("span");
strongP.append(spanRef);

const strongRead = document.createElement("strong");
strongRead.textContent = "Read Time:";

spanRef.textContent += " 4 Minutes";
spanRef.prepend(strongRead);

const readA = document.createElement("a");
readA.setAttribute("href", "#");
readA.textContent = "Read more...";

spanRef.after(readA);

//-------------Further HELL-----------//

// const selectedArt = document.querySelector(".posts article");

// console.log(selectedArt);

// selectedArt.after();
