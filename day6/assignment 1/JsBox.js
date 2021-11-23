var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
     console.log("button is clicked");
});
console.log(btn);

//color
var btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
    this.style.backgroundColor="red";
    console.log("red button is clicked");
});
console.log(btn);

//push
var arr=[1,2,3,4,5,6,7];
arr.push(8);
arr.push(9);
console.log(arr);

//pop
arr.pop();
console.log(arr);

//shift
arr.shift();
console.log(arr);

//unshift
arr.unshift(0);
console.log(arr);

//length
console.log(arr.length);

//slice
var arr1=[1,2,3,4,5,6];
var newArr1=arr1.slice(0,4);
console.log(newArr1);
console.log(arr1);

//split
var arr2=[1,2,3,4,5,6]
var newArr2=arr2.splice(1,3);
console.log(newArr2);//2,3,4
console.log(arr2);//1,5,6
