const section = document.querySelector(`section`);
section.setAttribute(`class`, `featured`); 
const posts = document.querySelector(`section.posts`);

const article = document.createElement(`article`);
posts.append(article);

const image = document.createElement(`img`);
image.setAttribute(`src`, `./images/paul-gilmore-unsplash.jpg`);
image.setAttribute(`alt`, `Image of a mountain in front of a lake.`);
article.append(image);

const heading3 = document.createElement(`h3`);
heading3.textContent = `Stop Planning`;
article.append(heading3);

const paragraph = document.createElement(`p`);
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);

const aside = document.createElement(`aside`);
article.append(aside);

const paragraph2 = document.createElement(`p`);
aside.append(paragraph2);

const strong = document.createElement(`strong`);
strong.textContent = `Read Time:`;

const span = document.createElement(`span`);
span.textContent = ` 4 Minutes`;
paragraph2.append(span);
span.prepend(strong);

const aTag = document.createElement(`a`);
aTag.textContent = `Read more...`;
aTag.setAttribute("href", "#");
paragraph2.append(aTag);

const newPosts = document.querySelectorAll(`.posts article`)[0]
const newPosts2 = document.querySelectorAll(`.posts article`)[1]
newPosts.before(newPosts2)
