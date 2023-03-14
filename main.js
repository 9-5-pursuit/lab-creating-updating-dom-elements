const addClass = document.querySelector("main section")
addClass.classList.add("featured");

const select_Last_Spot_InPosts = document.querySelector("main .posts")
const article = document.createElement("article");
select_Last_Spot_InPosts.append(article)

const img = document.createElement("img");
img.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt","Image of a mountain in front of a lake.");
article.append(img)

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3)

const p = document.createElement("p");
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at allis so stressful these days; why add to the stress by overworking yourself?";
article.append(p)

const aside = document.createElement("aside");
article.append(aside)

const p1 = document.createElement("p");
aside.append(p1)

const span = document.createElement("span")
span.textContent = " 4 Minutes"
p1.append(span)

const strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.prepend(strong)

const a = document.createElement("a");
a.setAttribute("href","#")
a.textContent = "Read more..."
p1.append(a)

const secondArticle = document.querySelector("main .posts article:nth-of-type(2) ")
select_Last_Spot_InPosts.prepend(secondArticle)













