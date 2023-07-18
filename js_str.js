//consts and vars
let num = 123;
let str1 = "presto";
const pOne = document.getElementById("one");
const pTwo = document.getElementById("two");
//paragraph one
num = num.toString();
console.log(num);
pOne.textContent = (` Num contains ${num}. which is a ${typeof(num)}`);

//paragraph two
pTwo.textContent = ( `str1 contains "${str1}" which is  ${str1.length} char long`);
