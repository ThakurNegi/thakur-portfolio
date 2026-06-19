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





let reply = 
"I can help you with Thakur's portfolio, skills, projects and experience.";



let q = question.toLowerCase();




if(q.includes("name") || q.includes("who")){


reply="I am Thakur Singh Negi's AI Assistant. Thakur is a Software Developer, Digital Marketer and Social Media Manager.";

}



else if(q.includes("skill") || q.includes("skills")){


reply="Thakur's skills include HTML, CSS, JavaScript, React, GitHub, Software Development, Digital Marketing, Content Strategy and Social Media Management.";

}





else if(q.includes("bca") || q.includes("education") || q.includes("study")){


reply="Thakur is pursuing BCA from IGNOU and focusing on software development and digital skills.";

}





else if(q.includes("tiq") || q.includes("technocratiq") || q.includes("internship")){


reply="Thakur completed an internship at Technocratiq Digital where he worked on digital marketing, social media and growth related tasks.";

}





else if(q.includes("divya") || q.includes("instagram")){


reply="Thakur managed Divya Negi's Instagram profile focusing on content planning, engagement and audience growth. The profile has 12.2K+ followers.";

}





else if(q.includes("project")){


reply="Projects include Portfolio Website, Social Media Management and Digital Solutions.";

}





else if(q.includes("developer") || q.includes("coding")){


reply="Thakur works with HTML, CSS, JavaScript and focuses on web development.";

}





else if(q.includes("marketing") || q.includes("digital")){


reply="Thakur has experience in digital marketing, content strategy, social media growth and online branding.";

}





else if(q.includes("contact") || q.includes("email")){


reply="Contact Thakur: Adityanegi601@gmail.com | Phone: 8750116752";

}





else if(q.includes("github")){


reply="GitHub link can be added in the portfolio GitHub button.";

}





else{


reply="You can ask me about Thakur's skills, projects, experience, education or contact details.";

}






// typing animation


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

function toggleMenu(){

const menu = document.querySelector(".links");

menu.classList.toggle("active");

}
