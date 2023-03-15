let article = document.createElement("article")
let img = document.createElement("img")
let h3 = document.createElement("h3")
let p = document.createElement("p")
let aside = document.createElement("aside")

document.querySelector("section:first-child").classList.add("featured")

document.querySelector("section.posts").append(article)

article.append(img)
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

article.append(h3)
h3.textContent = "Stop Planning"

article.append(p)
p.textContent = `You -- yes you! You're an over-planner, I can tell. 
It's time to stop planning so much and instead focusing on relaxing. 
Taking a break at all is so stressful these days; 
why add to the stress by overworking yourself?`

article.append(aside)
aside.innerHTML = `<p>
<span><strong>Read Time:</strong> 4 Minutes</span
><a href="#">Read more...</a>
</p>`

document.querySelector("section.posts").prepend(document.querySelector(".posts article:nth-child(2)"))

