let num = 123;
num = num.toString();
const pOne = document.getElementById("one");
console.log(num);
pOne.textContent = (` Num contains ${num}. which is a ${typeof(num)}`);