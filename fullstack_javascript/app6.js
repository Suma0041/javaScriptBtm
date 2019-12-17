//2-12-2019

var languages = ["java","java","java","python","python","python"];
var num = [1, 5, 7, 109, 40, 20, 50, 60, 1001, 4001];

//var result = num.filter(x => x > 50)//FAT arrow function
//var testResult = languages.filter(function (value,index,array) {
  //  return array.indexOf(value) === index;
  //console.log(result);  
//});

  //console.log(testResult);//output shows as java and python becoz we avoid the dulpicate value
//var index = languages.indexOf("python");
//console.log(index);

var result = num.filter(function(x){
    return x > 50;//show the ouput------->more than 50 numbers 

});

var es6way = num.filter(y => y > 50);
console.log(result);
/*
var users = ["anu", "manu","manu", "shashi","shashi", "shashi","sanju"];
//var dulpicateUsers = users.filter()


var [...es6wayRemoveDuplicates] = new Set(users);
console.log(es6wayRemoveDuplicates);

var duplicates = [];
for(var i = -0; i < users.length; i++){
    if(users.indexOf(users[i] == -1) {

        duplicates.push(users[i]);
    }
    
    
}
 
console.log(es6wayRemoveDuplicates);
*/

var num = [10, 40, 500, 600, 20, 50, 43, 600, 200];
/*
var test = num.reduce((a,b) => {
     //console.log(a);
     //console.log(b);

     //console.log(a+b);

     return a+b;
});
console.log(test);
*/

//find() method

//var find= num.find(element => element > 12)
//console.log(find);

//fill() method
var lang = ["jee", "angular", "react", "node", "aws"];
//var test1 = lang.fill("java");
//console.log(lang);
//console.log(test1);

//for of array
//important
var users1 = ["suma", "veena", "manju", "reshu"];

for(let user of users1){ console.log(user)}//"for of" loop it displays output in horizontally


var str = "suma how are you?";//it displays the output as vertically inncluding spaces
for(let a of str){console.log(a)}


var keys = lang.keys();
var values = lang.values();
for(let key of keys){

    console.log(key);
}


for(let value of values){
    console.log(value);
}

//includes() methods
var lang1 = ["jee", "angular", "react", "node", "aws"];
if (lang1.includes("angular")){
    alert("angular is exists.......");
} else {
    alert("angular is not exists.....");
}


//lang.map() method
//very important
var forEach = lang1.forEach(x => x);
console.log(forEach);//it will not creat new array, it is only iterate the array
var map = lang1.map(y => y);
console.log(map);// it creates new array   ----> map is much faster than map
console.log(lang1);

//date purpose we use "moment.js" library in JavaScript
var date = new Date();
var year = date.getFullYear();
var hour = date.setHours();
var min = date.getMinutes();
var seconds = date.getSeconds();
var miliseconds = date.getMilliseconds();
var time = date.getTime();
console.log(date);







