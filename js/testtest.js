const body = document.querySelector("body");

const apple = function(HTMLElements) {
  const a = HTMLElements.querySelector("h1");
  const b = HTMLElements.querySelector("h2");
  const c = HTMLElements.querySelector("h3");
  const d = HTMLElements.querySelector("h4");
  console.log(`apple ${HTMLElements}`);
  
  return  HTMLElements.querySelector("h1");
}

const appleBody = apple(body);
console.log(appleBody);

function banana(args) {
  
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

banana(appleBody);