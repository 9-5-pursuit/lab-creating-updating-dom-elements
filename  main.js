const feature = document.querySelector(section)
feature.setAttribute('class', 'featured')

const newPost = document.querySelector("section .posts")
const newArticle = document.createElement("article")
const image = document.createElement("img");
image.setAttribute("src","./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt","Image of a mountain in front of a lake.")
newArticle.append(image)

const heading = document.createElement(h3)
heading.textContent="Stop planning"
newArticle.append(heading)

const paragraph = document.createElement(p)
paragraph.textContent ="You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
newArticle.append(paragraph)

const aside = document.createElement(aside)
newArticle.append(aside)

const secondParagraph = document.createElement(p)
aside.append(secondParagraph)

const span = document.createElement(span)
secondParagraph.append(span)
span.innerHTMl ='<strong>Read Time:</strong> 4 minutes'

const link = document.createElement(a)
link.setAttribute('href','#');
link.textContent="Read more..."

secondParagraph.append(link)
newPost.append(newArticle)

const postOne = document.querySelectorAll(`.posts article`)[0]
const postTwo = document.querySelectorAll(`.posts, article`)[1]
postOne.before(postTwo)


