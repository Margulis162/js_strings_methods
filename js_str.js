//consts and vars
let num = 123;
let str1 = "presto";
const pOne = document.getElementById("one");
const pTwo = document.getElementById("two");
const pThree = document.getElementById("three");
const pFour = document.getElementById("four")
const list = document.querySelector("ul");
//paragraph one
num = num.toString();
console.log(num);
pOne.textContent = (` Num contains ${num}. which is a ${typeof(num)}`);

//paragraph two
pTwo.textContent = ( `str1 contains "${str1}" which is  ${str1.length} char long`);

//pharagraph three 
for(i=0;i<str1.length; i++){
    const listItem = document.createElement('li');
    listItem.textContent = str1[i];
    list.appendChild(listItem);
    
}

//pharagraph four 
pFour.innerHTML =(`Our string also starts with "p" and we can test it with <strong>startsWith("p")</strong> method it says - <strong>${str1.startsWith('p')}</strong>.
But does it <strong>endsWith()</strong> "c"?, and that is <strong>${str1.endsWith('c')}</strong>.`);

