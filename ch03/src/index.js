
// console.log('test');
// const title1 = document.getElementById("title");
// console.log(title1);

// const title2 = document.querySelector("#title");
// console.log(title2);

// const container = document.getElementsByClassName('container');
// console.log(container);

// const container2 = document.querySelector('.container');
// console.log(container2);

// const container3 = document.querySelectorAll('.container');
// console.log(container3);

// const divEl = document.createElement("div");
// const pEl   = document.createElement("p");
// const h2El  = document.createElement("h2");

// divEl.prepend(pEl);
// divEl.prepend(h2El);
// console.log('=>', divEl);

const buttonEle = document.createElement("button");
buttonEle.textContent = '버튼';
const divEl = document.querySelector('.container');
divEl.appendChild(buttonEle);

const h1Ele = document.querySelector("#title");
const mainEle = h1Ele.parentElement;
mainEle.removeChild(h1Ele);


