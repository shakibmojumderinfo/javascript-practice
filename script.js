function myFunction(text){
    console.log(text);
}

// const animate = document.getElementById

const button = document.getElementById("btn");
const container = document.getElementById("div");

button.addEventListener('click', function(){
    myFunction('btn');
}, true)

container.addEventListener('click', function(){
    myFunction('div')
}, true)
// end



// Js dom Navigation 
const text = document.getElementById("previousSibling");

// There is two way acces node value //important
// const wayOne = text.innerHTML;
const wayTwo = text.childNodes[0].nodeValue;

// console.log(wayOne);
console.log(wayTwo);


// Create html element with js DOM
const para = document.createElement('p');
const nodeText = document.createTextNode('3rd paragraph');

addNode = para.appendChild(nodeText);
para.appendChild(nodeText);

const element = document.getElementById("div1");
const p2 = document.getElementById('p2');

element.insertBefore(addNode, p2); //addd element any line after or before
// element.appendChild(addNode); //add element last

// remove childnode
div1 = document.getElementById("div1");
childNode = document.getElementById("p2");

div1.removeChild(childNode);

// end