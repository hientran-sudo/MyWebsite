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
const newArticle  = document.createElement("article")
newArticle.classList.add("profile")
newArticle.setAttribute("id","my")
newArticle.innerHTML=content;

main.append(newArticle)
