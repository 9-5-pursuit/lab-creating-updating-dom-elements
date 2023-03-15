const first = document.querySelector("section");
first.classList.add("featured");

const newA = document.createElement("article");

newA.innerHTML = `
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
`;

const Posts = document.querySelector("section.posts");
Posts.append(newA);

const firstArticle = document.querySelector(
  "section.posts article:first-of-type"
);
const secondArticle = document.querySelector(
  "section.posts article:nth-of-type(2)"
);

secondArticle.after(firstArticle);
