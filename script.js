import Profile from "./profile.js";
const myProfile = new Profile(
    "Hien Tran",
    24,
    "Fairfield University",
    2022,
    "Software Engineering",
    "2021-08-08.jpg"

);
const main = document.querySelector(".maincontent");
const content = `
     <figure class="profile__image">
       <img src=${myProfile.image} alt="" width = "500" height = "600"/>
     </figure>
     <h1 class="profile__name">${myProfile.name}</h1>
     <ul class="profile__features">
       <li class="profile__age">Age:<span> ${myProfile.age}</span></li>
       <li class="profile__school">School:<span> ${myProfile.school.sn}</span></li>
       <li class="profile__school">Major:<span> ${myProfile.school.m}</span></li>
       <li class="profile__school">Class year:<span> ${myProfile.school.cy}</span></li>
       
     </ul>
`;

const navContent =`
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">Contact</a></li>
`;
const newArticle  = document.createElement("article")
newArticle.classList.add("profile")
newArticle.setAttribute("id","my")
newArticle.innerHTML=content
main.append(newArticle)

const mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation")
const navList = document.createElement("ul")
navList.innerHTML = navContent
mainNav.append(navList)

document.querySelector(".siteheader").append(mainNav)

function headingColor (){
  let titleColor = "blue";
  document.querySelector(".site-title").style.color = titleColor;
}

let color = "purple";
document.querySelector(".left").style.backgroundColor=color;
document.querySelector(".left .color-value").innerHTML=color;

color = "skyblue";

document.querySelector(".right").style.backgroundColor=color;
document.querySelector(".right .color-value").innerHTML=color;

headingColor();

const Experience = {
  desc:"list of my Experience",
  javascript:2,
  java:3
}

const addEx= (current)=>{
  const newArticle = document.createElement("article");
  newArticle.innerHTML=`
  <h1>${current.desc}</h1>
  <ul>
  <li>Javascript: ${current.javascript}</li>
  <li>Javas: ${current.java}</li>
  </ul>
  `;
  return newArticle;
}
const testmain = document.querySelector("testmain");
testmain.append(addEx(Experience));

const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

button.addEventListener("click",()=>{
  button.classList.toggle("active");
  console.log("button was clicked! ");
}, false)

const mousePosition = (event)=>{
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
};

window.addEventListener("mousemove",mousePosition,false);

container.addEventListener("mouseenter",()=>{
  container.classList.add("blue");
}, false
);

container.addEventListener("mouseleave",()=>{
  container.classList.remove("blue");
}, false
);
