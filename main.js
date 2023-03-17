const featuredSection = document.querySelector("section");

// console.log(featuredSection);

featuredSection.classList.add("featured");

/*
<article>
  <img
    src="./images/paul-gilmore-unsplash.jpg"
    alt="Image of a mountain in front of a lake."
  />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all
    is so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <span><strong>Read Time:</strong> 4 Minutes</span
      ><a href="#">Read more...</a>
    </p>
  </aside>
</article>
*/

const addNewArticle = document.createElement("article");

const addNewImg = document.createElement("img");
addNewImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
addNewImg.setAttribute("alt", "Image of a mountain in front of a lake.");
addNewArticle.append(addNewImg);

// console.log(addNewArticle);

const addH3 = document.createElement("h3");
addH3.textContent = "Stop Planning";
addNewArticle.append(addH3);

// console.log(addNewArticle);

const addP = document.createElement("p");
addP.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
addNewArticle.append(addP);

// console.log(addNewArticle);

const addAside = document.createElement("aside");
addAside.innerHTML = "<p><span><strong>Read Time:</strong> 4 Minutes</span><a href='#'>Read more...</a></p>"
addNewArticle.append(addAside);

document.querySelector(".posts").append(addNewArticle);

// const movePosts = document.querySelector(".posts article:nth-child(1)");
// // console.log(movePosts);
// document.querySelector(".posts").after(movePosts);

const movePosts = document.querySelector(".posts article:nth-child(2)");
// console.log(movePosts);
document.querySelector(".posts").prepend(movePosts);