let firstClass = document.querySelector("section")
firstClass.classList.add("featured")

let article = document.createElement("article");
let section = document.querySelector("section.posts");
section.append(article)
console.log(section)

let image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.prepend(image)

let header = document.createElement("h3");
header.textContent = "Stop Planning"
article.append(header)

let paragraph = document.createElement("p");
header.after(paragraph)
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

let aside = document.createElement("aside");
paragraph.after(aside)

let p = document.createElement("p");
aside.prepend(p);

let span = document.createElement("span");
p.prepend(span);
span.textContent = "<strong>Read Time:<strong>"
span.textContent += "4 Minutes"

let a = document.createElement("a")
a.textContent = "Read More"
a.setAttribute("href", "#")
span.append(a)

let first = document.querySelector("section.post article")