//6-12-2019
//DOM(document object model)

//var document = document.all;
//console.log(document.all);


//var val = document.all;
//console.log(val);
//console.log(val[1]);

//below properties we can access directly
/*document.doctype;
document.domain;
document.characterSet;
document.contentType;
document.charset;
document.bgColor;
document.URL;
document.addEventListener;
document.all;
document.anchors;
document.createElement;
document.body;
document.head;
document.forms;
document.images;
document.links;*/

/*
var val = document.doctype;

 val = document.domain;

 val = document.characterSet;//output-->UTF8
 val = document.contentType;//output --> text/html
 console.log(val);  */

/*
 let images = document.images;
 console.log(images);

 /*
 [...images].forEach(x => console.log(x));
 [...images].map(x => console.log(x));

 for(let x of images){
     console.log(x);
 }

 for(var i=0; i<images.length; i++){
     console.log(imaages[i]);
 }
 */
//[...images].forEach(x => {
    //x.classList.add("jspiders-images","Qspiders");//addinng classes virtually
    //x.id = "images";//adding id to an element
    //x.classList.remove("text");//delete class virtually
  //  let getattribute = x.getAttribute("class");//getting "class" attribute from html
    //console.log(getattribute);
    //let setattribute = x.setAttribute("title", "all images are good");//creating new attribute to html...
    //console.log(setattribute);
//});

//new task
/*
let links = document.links;
console.log(links);

[...links].forEach(link => {
link.classList.add("link");
link.style.background = "red";
link.style.color = "white";
link.style.padding = "10px";
link.style.borderRadius = "4px";
link.style.border = "1px solid #111";

});
*/

/*
var ul = document.getElementById("ul");//id
console.log(ul);
var li = document.getElementsByClassName("li");
var tag = document.getElementsByTagName("a");
console.log(li);

[...li].map(x => console.log(x));
[...tag].map(y => console.log(y));
*/

/*
let ul1 = document.getElementById("ul");
let lis = ul1.getElementsByTagName("li");

[...lis].map(li => {
    li.style.background = "#eee";
    li.style.padding = "10px";
    li.style.color = "#111";
    li.style.border = "1px solid #111";
    li.style.marginBottom = "10px";
    li.style.listStyle = "none";
});
*/

/*
let ul = document.querySelector("#ul");//just like css selector
//let li = document.querySelector(".li-list");

let liFirst = document.querySelectorAll(".li-list:first-child");
let liLast = document.querySelectorAll(".li-list:last-child");
let nthChild = document.querySelectorAll(".li-list:nth-child(3)");



liFirst.forEach(x =>{
    x.style.background = "#eee";
    x.style.padding = "10px";
    x.style.color = "#111";
    x.style.border = "1px solid #111";
    x.style.marginBottom = "10px";
    x.style.listStyle = "none";
    x.style.color = "red";
});

liLast.forEach(x =>{
    x.style.background = "black";
    x.style.padding = "10px";
    x.style.color = "#111";
    x.style.border = "1px solid #111";
    x.style.marginBottom = "10px";
    x.style.listStyle = "none";
    x.style.color = "red";
});

nthChild.forEach(x =>{
    x.style.background = "#eee";
    x.style.padding = "10px";
    x.style.color = "#111";
    x.style.border = "1px solid #111";
    x.style.marginBottom = "10px";
    x.style.listStyle = "none";
    x.style.color = "purple";
});
//console.log(ul);
//console.log(li);
*/



let liOdd = document.querySelectorAll("ul li:nth-child(odd)");
let liEven = document.querySelectorAll("ul li:nth-child(even)");

liOdd.forEach(odd => {
    odd.classList.add("odd");
    odd.textContent="odd here";
});

liEven.forEach(even =>{
    even.classList.add("even");
    even.textContent="even here";
})







