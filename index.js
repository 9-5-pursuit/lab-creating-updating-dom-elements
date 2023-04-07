
const section = document.querySelector("section");
section.classList.add("featured");

 const article = document.querySelector("article");

 const img = document.createElement("img");
    img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
    img.setAttribute("alt", "Image of a mountain in front of a lake.");
    article.prepend(img);

 const h3 = document.createElement("h3");
    h3.innerText = "Stop Planning";

     article.append(h3);

 const p = document.createElement("p");
 p.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all
    is so stressful these days; why add to the stress by overworking yourself?`;

 article.append(p);

const aside = document.createElement("aside")
aside.innerHTML = `<p>
      <span><strong>Read Time:</strong> 4 Minutes</span
      ><a href="#">Read more...</a>
    </p>`;
article.append(aside)
document.querySelector("section.posts").append(article);

const secondPost = document.querySelector("section.posts article:nth-child(2)")
    
document.querySelector(`section.posts`).prepend(secondPost);


