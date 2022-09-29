// 주석은 console 입력시 출력 내용

document.title;
// 'Momentum App'

document.getElementById(title);
//  null

document.getElementById("title");
// <h1 class="please" id="title">Please open your console (press F12) !!!!</h1>

const newTitle = document.getElementById("title");  
newTitle.innerText = "Modifying the title of Application"; 

document.getElementById("title");
// <h1 class="please" id="title">Modifying the title of Application</h1>

document.getElementsByClassName("please");
// HTMLCollection [h1#title.please, title: h1#title.please]

document.getElementsByTagName("h1");
// HTMLCollection [h1#title.please, title: h1#title.please]

console.log(title.id);
// title

console.log(title.className);
// please