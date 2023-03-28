
//
// const body = document.querySelector("body");
// const header = document.createElement("header");
// const heading = document.createElement("h1");
// header.append(heading);

// const nav = document.createElement("nav");
// header.append(nav);

// const ul = document.createElement("ul");
// nav.append(ul);
// for (let i = 0; i < 3; i++) {
//   ul.append(document.createElement("li"));
// }
// const img = document.createElement("img");
// img.setAttribute("class", "featured dog-image hidden");

const featured = document.querySelector("section")
// const featured = document.querySelector('section:first-type-of')
featured.setAttribute("class","featured")
// featured.classList.add('featured')

// 1. create 2. add/append 3. add text inside

const article = document.createAttribute('article')

const img = document.createElement('img')
const h3 = document.createElement('h3')
const p1 = document.createElement('p1')
const aside = document.createElement('aside')
const p2 = document.createElement('P2')
const span = document.createElement('span')
const a = document.createElement('a')




article.append(img)
article.append(h3)
article.append(p1)
article.append(aside)
aside.append(p2)
p2.append(span)
article.append(a)




h3.textContent = "Stop Planning"
p1.textContent= "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
span.textContent = "Read TIme : 4 minutes"




// 3 articles
const articles = document.querySelectorAll('section.posts article')
articles[0].after(article[1])


