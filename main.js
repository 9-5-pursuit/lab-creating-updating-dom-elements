let firstClass = document.querySelector("section")
firstClass.classList.add("featured")

let article = document.createElement("article");
let section = document.querySelector("section.posts");
section.append(article)
console.log(section)

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.prepend(img)

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning"
article.append(h3)

let p = document.createElement("p");
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(p)

let aside = document.createElement("aside");
article.append(aside)

let p1 = document.createElement("p");
aside.prepend(p1);

let span = document.createElement("span");
p1.prepend(span);
span.textContent = "<strong>Read Time:<strong>"
span.textContent += "4 Minutes"

let a = document.createElement("a")
a.textContent = "Read More"
a.setAttribute("href", "#")
span.append(a)

let first = document.querySelector("section.posts").append(article)
let second = document.querySelector("section.posts article:nth-child(2)")
document.querySelector("section.posts").prepend(second)
