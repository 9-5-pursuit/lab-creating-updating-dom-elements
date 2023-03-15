//...Add a class of "featured" to the first section element on the page.
// const firstSection = document.querySelector("body main section");
// firstSection.setAttribute("class", "featured");
const firstSection = document.querySelector("main section");
firstSection.setAttribute("class", "featured");

//...Create the following article element with JavaScript and add at the end of the section.posts element.
const newArticle = document.createElement("newArticle");
const sectionPosts = document.querySelector("body main section.posts");
sectionPosts.append(newArticle);

const splashImage = document.createElement("splashImage");
splashImage.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
splashImage.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(splashImage);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
newArticle.append(h3);

const paragraphElement = document.createElement("paragraphElement");
paragraphElement.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.append(paragraphElement);

const asideElement = document.createElement("asideElement");
newArticle.append(asideElement);

const paragraphTwo = document.createElement("paragraphTwo");
asideElement.append(paragraphTwo);

const strongSpan = document.createElement("strongSpan");
strongSpan.textContent = "Read Time:";

const justSpan = document.createElement("justSpan");
justSpan.textContent = "4 Minutes";

paragraphTwo.append(justSpan);
justSpan.prepend(strongSpan);

const aElement = document.createElement("aElement");
aElement.textContent = "Read more...";
aElement.setAttribute("href", "#");
paragraphTwo.append(aElement);

//...Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
