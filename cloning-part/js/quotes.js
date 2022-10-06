
const quotes = [
  { 
    quote : "When another person makes you suffer, it is because he suffers deeply within himself, and his suffering is spilling over. He does not need punishment; he needs help. That's the message he is sending.",
    author : "Thich Nhat Hanh"
  },
  {
    quote : "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.",
    author : "Thich Nhat Hanh"
  },
  {
    quote : "스스로를 경멸하는 사람은, 경멸하는 자신을 존중한다.",
    author : "프리드리히 니체"
  },
  {
    quote : "스스로 자신을 존경하면 다른 사람도 그대를 존경할 것이다.",
    author : "공자"
  },
  {
    quote : "왜 자꾸 남이 하는 일만 선망하는가? 당신 자신이 되어라. 다른 사람의 자리는 모두 찼다.",
    author : "김난도 교수"
  },
  {
    quote : "우리가 가지고 있는 15가지 재능으로 칭찬 받으려 하기보다, 가지지도 않은 한가지 재능으로 돋보이려 안달한다. ",
    author : "마크 트웨인"
  },
  {
    quote : "Put yourself on view. This brings your talents to light.",
    author : "Baltasar Gracian"
  },
  {
    quote : "인간은 다른 사람처럼 되고자 하기 때문에 자기 잠재력의 4분의 3을 상실한다.",
    author : "아르투어 쇼펜하우어"
  },
  {
    quote : "It isn't what they call you, is's what you answer to.",
    author : "W.C. Fields"
  },
  {
    quote : "자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author : "발타사르 그라시안"
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;