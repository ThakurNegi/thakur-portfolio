// ================= THEME =================

const theme = document.getElementById("theme");

if(theme){

theme.addEventListener("click",()=>{

document.body.classList.toggle("light");

theme.innerHTML = document.body.classList.contains("light")
? "🌙"
: "☀️";

});

}





// ================= ROLE CHANGER =================


const typing = document.querySelector(".typing");


const roles = [

"Software Developer",

"Digital Marketer",

"Social Media Manager"

];


let roleIndex = 0;


setInterval(()=>{

if(typing){

typing.innerHTML = roles[roleIndex];

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

}

},2500);







// ================= SCROLL ANIMATION =================


const elements = document.querySelectorAll(

"section, .project-card, .experience"

);


const observer = new IntersectionObserver((items)=>{


items.forEach(item=>{


if(item.isIntersecting){

item.target.style.opacity="1";

item.target.style.transform="translateY(0)";

}

});


});



elements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="1s ease";

observer.observe(el);


});









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



let question = input.value;


if(question.trim()=="") return;



chat.innerHTML += `

<div class="message user">

${question}

</div>

`;



let q = question.toLowerCase();



let reply = 
"I can help you with Thakur's portfolio, skills, projects, services and experience.";




if(q.includes("name") || q.includes("who")){


reply =
"I am Thakur Singh Negi's AI Assistant. Thakur is a Software Developer, Digital Marketer and Social Media Manager.";


}



else if(q.includes("hi") || q.includes("hello") || q.includes("hey")){


reply =
"Hello 👋 Welcome to Thakur Singh Negi's Portfolio.";


}




else if(q.includes("skill")){


reply =
"Skills: HTML, CSS, JavaScript, React, GitHub, Software Development, Digital Marketing, Content Strategy and Social Media Management.";


}




else if(q.includes("education") || q.includes("bca")){


reply =
"Thakur is pursuing BCA from IGNOU.";


}




else if(q.includes("experience")){


reply =
"Thakur has internship experience at Technocratiq Digital and Social Media Management experience.";


}




else if(q.includes("tiq") || q.includes("technocratiq")){


reply =
"Thakur worked at Technocratiq Digital on digital marketing and growth related tasks.";


}




else if(q.includes("divya") || q.includes("instagram")){


reply =
"Thakur managed Divya Negi's Instagram profile with 12.2K+ followers.";


}




else if(q.includes("project")){


reply =
"Projects include Portfolio Website, Social Media Management and Digital Solutions.";


}




else if(q.includes("github")){


reply =
"GitHub: github.com/ThakurNegi";


}




else if(q.includes("linkedin")){


reply =
"LinkedIn: linkedin.com/in/thakur-singh-negi-473787250";


}




else if(q.includes("contact") || q.includes("email")){


reply =
"Email: Adityanegi601@gmail.com | Phone: 8750116752";


}




else if(q.includes("phone") || q.includes("number")){


reply =
"Phone Number: 8750116752";


}




else if(q.includes("service") || q.includes("services")){


reply =
"Services: Website Development, Digital Marketing and Social Media Management.";


}




else if(q.includes("hire")){


reply =
"You can hire Thakur for Website Development, Digital Marketing and Social Media Management.";


}




else if(q.includes("website")){


reply =
"Thakur develops responsive websites, portfolio websites and landing pages.";


}





chat.innerHTML += `

<div class="message bot typing-ai">

<span></span>

<span></span>

<span></span>

</div>

`;



chat.scrollTop = chat.scrollHeight;




setTimeout(()=>{


document.querySelector(".typing-ai")?.remove();



chat.innerHTML += `

<div class="message bot">

${reply}

</div>

`;



chat.scrollTop = chat.scrollHeight;



},1000);




input.value="";


}









// ================= ENTER SEND =================


const aiInput = document.getElementById("aiInput");


if(aiInput){


aiInput.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){


askAI();


}


});


}








// ================= LOADER =================


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});








// ================= MOBILE MENU =================


function toggleMenu(){


const menu = document.querySelector(".links");


if(menu){

menu.classList.toggle("active");

}


}
