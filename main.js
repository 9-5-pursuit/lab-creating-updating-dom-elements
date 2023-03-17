document.querySelector('section').classList.add('featured');


// const newPost = document.querySelector(".posts");
const newArticle = document.createElement('article');

const image = document.createElement('img');
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(image);

const heading = document.createElement('h3');
heading.textContent="Stop Planning";
newArticle.append(heading);

const paragraph = document.createElement('p');
paragraph.textContent ="You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

newArticle.append(paragraph);

const aside = document.createElement('aside');
aside.innerHTML ="<p><span><strong>Read Time:</strong> 4 Minutes</span><a href='#'>Read more...</a></p>";
newArticle.append(aside);
 
document.querySelector('section.posts').append(newArticle);
//switching posting
const firstPost = document.querySelector("section.posts article:first-child");
const secondPost = document.querySelector("section.posts article:nth-child(2)");

secondPost.after(firstPost);




