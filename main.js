// 1.
const sectionTag = document.querySelector("main");
sectionTag.firstElementChild.classList.add("featured");


// 2.
const newSection = document.createElement("article");
const postSection = document.querySelector(".posts");
postSection.lastElementChild.after(newSection);


// content inside of article 
//img
const img = document.createElement("img");
const imgInside = document.querySelector("newSection");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
newSection.prepend(img);

//h3
const h3 = document.createElement("h3");
const underImg = document.querySelector("newSection img");
h3.innerText = "Stop Planning";
img.after(h3);

//p
const p = document.createElement("p");
p.innerText= `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself? `
h3.after(p);
console.log(newSection);

//aside
const aside = document.createElement("aside");
p.after(aside);

//p inside aside
const pInsideAside = document.createElement("p");
aside.append(pInsideAside);

//span
const span = document.createElement("span");
span.innerText= "4 Minutes";
pInsideAside.prepend(span);

//strong
const strong = document.createElement("strong");
strong.innerText = "Read Time:";
span.prepend(strong);

//a
const a = document.createElement("a");
a.setAttribute("href","#");
a.innerText = "Read more...";
pInsideAside.append(a);



// 3.
let articles = document.querySelectorAll(" main .posts article");
let articleTwo = articles[1];
postSection.prepend(articleTwo)
