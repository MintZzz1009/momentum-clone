// 주석은 console 입력시 출력 내용

document.title;
// 'Momentum App'

// document.getElementById(title);
//  null

document.getElementById("title");
// <h1 class="please" id="title">Please open your console (press F12) !!!!</h1>

const newTitle = document.getElementById("title1");  
newTitle.innerText = "Modifying the title of Application"; 

document.getElementById("title");
// <h1 class="please" id="title">Modifying the title of Application</h1>

document.getElementsByClassName("please");
// HTMLCollection [h1#title.please, title: h1#title.please]

document.getElementsByTagName("h1");
// HTMLCollection [h1#title.please, title: h1#title.please]

console.log(title1.id);
// title

console.log(title1.className);
// please

const sayHello1 = document.querySelector("div.hello:first-child h1");
console.log(sayHello1);
sayHello1.innerText = "Hello 11"

const sayHello2 = document.querySelector("div.hello:nth-child(2) h1");
console.log(sayHello2);
sayHello2.innerText = "Hello 22"
sayHello2.style.color = "tomato";

const sayHello3 = document.querySelector("div.hello:nth-child(3) h1");    
// last-child 는 왜 안되는것인지?? nth-child(3)으로 하면 된다.
console.log(sayHello3);
console.dir(sayHello3);
sayHello3.innerText = "Please Click me!"



function whenYouClick() {
  sayHello3.style.color = "purple";
}

function handleMouseLeave() {
  sayHello3.innerText = "Enter me by your pointer"
}

function handleMouseEnter() {
  sayHello3.innerText = "Leave me by your pointer"
}

sayHello3.addEventListener("click",whenYouClick);
// sayHello3.onclick = whenYouClick;

sayHello3.addEventListener("mouseenter",handleMouseEnter);
// sayHello3.onmouseenter = handleMouseEnter;

sayHello3.addEventListener("mouseleave",handleMouseLeave);
// sayHello3.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
