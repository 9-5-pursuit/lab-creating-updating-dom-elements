const section = document.querySelector("section");
section.setAttribute("class", "featured");

let posts = document.querySelector("section.posts");

//I'm going to create an article element and load that with the content that I need to.

const article = document.createElement("article");
//img
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.")

//append img to article
article.append(img);

//create h3
const h3 = document.createElement("h3");
 // add it's text content
h3.textContent = "Stop Planning";
//append h3 to article
article.append(h3);

//create p element
const paragraph = document.createElement("p");
//add text content
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
//append paragraph to article
article.append(paragraph);


//create aside element
const aside = document.createElement("aside");

//create paragraph2 element
const paragraph2 = document.createElement("p");
//create span element
const span = document.createElement("span");
//create span text content
span.textContent = " 4 Minutes"
//create strong element 
const strong = document.createElement("strong");
//create strong text content
strong.textContent = "Read Time:";
//create a element
const a = document.createElement("a");
//set a href attribute
a.setAttribute("href", "#")
//set a text content
a.textContent = "Read more...";


//lets load span with strong 
span.prepend(strong);

//load paragraph2 with span
paragraph2.append(span)

//load paragraph2 with a
paragraph2.append(a);

//load aside with paragraph2
aside.prepend(paragraph2);

//load article with aside
article.append(aside);


//append article to posts
posts.append(article);


//swap the articles
let firstPostArticle = document.querySelector("section.posts article");
let allPostsArticles = document.querySelectorAll("section.posts article");
allPostsArticles[0].remove();
allPostsArticles[1].after(firstPostArticle);

