//9-12-2019
/*
var btn = document.getElementById("btn");
/*console.log(btn);

btn.addEventListener("mouseenter",() => {
    alert("button clicked");
    document.body.style.background="pink";
});//click is DOM event
*/
/*
var btn1 = document.getElementById("btn1");

var template1=document.getElementById("template");
var template2=document.getElementById("template1");

btn.addEventListener("click",() => {
//var template1 = document.getElementById("template");
template1.style.display="block";
template2.style.display="none";
template1.innerHTML =
`<h1>Template 1</h1>
`
});


btn1.addEventListener("click",() => {
//var template2 = document.getElementById("template1");
template2.style.display="block";
template1.style.display="none";
template2.innerHTML =
`<h1>Template 2</h1>
`
});


//to identify event
//1.mouse event    2.keyboard event
btn.addEventListener("mouseenter",(e) =>{
    console.log(e);
});


var search=document.getElementById("search");
search.addEventListener("keyup",(e) =>{
    console.log(e);
    console.log(e.target.value);
});//keyboard events

var form = document.querySelector("#form");
form.addEventListener("submit",(e) => {
    e.preventDefault();//it is preventing default functionality or avoid refreshing
    //console.log(e);
    console.log(form.username.value);

});
*/
 /*
 //Synchronous
var username = "suma";
var company="oracle";

console.log(company);//it will execute first 
console.log(username);
*/

//example for Asynchronous
var username = "suma";

setTimeout(() => {//setTimeout is use to make a javascript
    console.log("ajax here.....async");
},10000);

var company = "JSpiders";
console.log("test");
console.log(username);
console.log(company);


//promises
var myPromise = new Promise((resolve, reject) => {       // new Promis constructor......callback "()" is to initialize the promise
    var isClean = true;
 if(isClean){
     resolve("room cleaned");
 } else{
     reject("room is not cleaned")
 }
});

myPromise.then(data => {
    console.log(data);
}).catch(err => console.log(err));//then() --->for resolving and catch()----> for rejecting



var myPromise = new Promise(function(resolve,reject){
    setTimeout(() =>{
        resolve("hello resolve here");
    },100);//1000

    setTimeout(() =>{
        reject("reject here");
    },500);
});

myPromise.then(data => console.log(data)).catch(err => console.log(err));


var promise1 = new Promise((resolve,reject) =>{
    resolve("promise 1 here");
});

var promise2 = new Promise((resolve,reject) => {
    resolve("promise 2 is success here");
});

var promise3 = new Promise((resolve,reject) => {
    resolve("promise 3 here");
});

var promise3 = new Promise((resolve,reject) => {
    reject("promise 4 here reject for network problem");
});

/*
Promise.all([promise1,promise2,promise3])
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));
*/

Promise.race([promise1,promise2,promise3])
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));










                                               