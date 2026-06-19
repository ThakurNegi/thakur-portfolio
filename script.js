// ================= THEME =================

const theme = document.getElementById("theme");

if(theme){

theme.addEventListener("click",()=>{

document.body.classList.toggle("light");


if(document.body.classList.contains("light")){

theme.innerHTML="🌙";

}

else{

theme.innerHTML="☀️";

}

});

}





// ================= MOBILE MENU =================


function toggleMenu(){

const menu = document.querySelector(".links");

if(menu){

menu.classList.toggle("active");

}

}





// ================= ROLE CHANGER =================


const typing = document.querySelector(".typing");


const roles = [

"Software Developer",

"Digital Marketer",

"Social Media Manager"

];


let roleIndex = 0;



function changeRole(){


if(!typing) return;


typing.innerHTML = roles[roleIndex];


roleIndex++;


if(roleIndex >= roles.length){

roleIndex = 0;

}

}


setInterval(changeRole,2500);







// ================= AI OPEN CLOSE =================


function openAI(){

const box = document.getElementById("aiBox");


if(box){

box.classList.toggle("active");

}

}







// ================= AI CHAT =================


function askAI(){


const input = document.getElementById("aiInput");

const chat = document.getElementById("chatBody");


if(!input || !chat) return;



let question = input.value.toLowerCase();



if(question.trim()==="") return;



chat.innerHTML += `

<div class="message user">

${input.value}

</div>

`;





let reply = 

"I can help you with Thakur's portfolio, skills, projects and experience.";





if(question.includes("name")){

reply="My name is Thakur Singh Negi.";

}



else if(question.includes("skill")){

reply="Skills include HTML, CSS, JavaScript, React, Software Development, Digital Marketing and Social Media Management.";

}



else if(question.includes("divya")){

reply="Thakur managed Divya Negi's Instagram profile with content strategy, engagement and growth. The profile has 12.2K+ followers.";

}



else if(question.includes("project")){

reply="Projects include Portfolio Website, Social Media Management and Digital Solutions.";

}



else if(question.includes("experience")){

reply="Experience includes Technocratiq Digital internship and social media management work.";

}



else if(question.includes("contact")){

reply="Email: Adityanegi601@gmail.com | Phone: 8750116752";

}







let bot = document.createElement("div");

bot.className="message bot";


chat.appendChild(bot);





let i=0;


let typingEffect=setInterval(()=>{


bot.innerHTML += reply[i];


i++;


if(i>=reply.length){

clearInterval(typingEffect);

}


chat.scrollTop = chat.scrollHeight;


},35);




input.value="";


}







// ENTER BUTTON SEND


document.getElementById("aiInput")

?.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){

askAI();

}


});






// LOADER


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});
