const section = document.querySelector("section");
section.classList.add("featured");



const post = document.querySelector("main .posts");
const articletag = document.createElement("article");
post.append(articletag);




const imageTag = document.createElement("img");

imageTag.src = "./images/paul-gilmore-unsplash.jpg"
imageTag.alt = "Image of a mountain in front of a lake."
articletag.append(imageTag);


const h3Tag = document.createElement("h3");

h3Tag.textContent = "Stop Planning";
articletag.append(h3Tag);


const pTag = document.createElement("p");

pTag.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
articletag.append(pTag);


const asideTag = document.createElement("aside");
articletag.append(asideTag);

const p1Tag = document.createElement("p");
asideTag.append(p1Tag);


const spanTag = document.createElement("span");
spanTag.textContent = " 4 Minutes";
p1Tag.append(spanTag);


const strongTag = document.createElement("strong");
strongTag.textContent = "Read Time:"
spanTag.prepend(strongTag);

const ancorTag = document.createElement("a");
ancorTag.setAttribute("href", "#");
ancorTag.textContent = " Read more...";
p1Tag.append(ancorTag);

const secondArticle = document.querySelector("main .posts article:nth-of-type(2)");
post.prepend(secondArticle);