const section = document.querySelector("section");
const article = document.createElement("article");

section.setAttribute("class", "featured");
//  <img
//       src="./images/paul-gilmore-unsplash.jpg"
//       alt="Image of a mountain in front of a lake."
//     />
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);
//     <h3>Stop Planning</h3>
const h3 = document.createElement("h3");
h3.innerText = "Stop Planning";
article.append(h3);
//     <p>
//       You -- yes you! You're an over-planner, I can tell. It's time to stop
//       planning so much and instead focusing on relaxing. Taking a break at all
//       is so stressful these days; why add to the stress by overworking yourself?
//     </p>
const ptag1 = document.createElement("p");
ptag1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all
    is so stressful these days; why add to the stress by overworking yourself?`;
article.append(ptag1);
const aside = document.createElement("aside");

const ptag2 = document.createElement("p");

const span = document.createElement("span");
span.textContent = `4 Minutes`;

const strong = document.createElement("strong");
strong.textContent = `Read Time:`;
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
span.prepend(strong);
ptag2.append(span);
ptag2.append(a);
aside.append(ptag2);
article.append(aside);

posts = document.querySelector("section.posts");
posts.append(article);

allposts = document.querySelectorAll(".posts article");
allposts[0].before(allposts[1]);
