      //26-11-2019
//Function with arguements
/*
function Username(name, age, company, salary){
    console.log(`hello, my name is ${name} and my age is ${age} 
    i work for ${company} and am getting ${salary}`);
}

Username("suma",25,"Qspiders",40000);//parameter values



//function with return statement
function addNumbers(a,b){
    var c = a+b;
   return c;//output is 8
    //console.log(c); output is 8
}

addNumbers(3,5);//not showing anything in the output console

console.log(addNumbers(3,5));//output is "undefined"



//function with default values
function number(num){
    //console.log(num)
    if(num === undefined){
        num = 10*2;
    }
    console.log(num);
}
number();//output is undefined

//es6
function numberwithEs6(num1 = 10){
    console.log(num1);
}
numberwithEs6();

//function argument object

function names(){
   // console.log("my name is ", args);
    //console.log(arguments);
    //console.log(arguments.length);
    //var names = Array.from(arguments);
    var[...names] = arguments;
    names.forEach(function(name) {
        console.log(name);
    });
}
names("suma","reshma","veena","shanti","manju");
*/

Username1();
function Username1(){

    console.log("hello xyz");//ouput is "hello xyz"
}//function hoisting works with naming function

/*
company();
var company = function(){
console.log("my company is qspider");
};//error as "companay is not a function"
*/


var x = "hello x";//global variable

function show(){
    var outerText = "hello outerText";//local variable

    function innerBlock(){

        var innerText = "hello innerText";
        console.log(innerText);
        console.log(outerText);//closure
        console.log(x);
    }
        innerBlock();
}

show();
/*
//naming function does  not support with fat arrow function
function test(){
    document.write('hello tset');
}//normal naming functon

//FAT arrow function//es6
test() =>{

}//normal function
*/

/*
//es6 arrow function
var usernamewithEs6 = () => {
    console.log('hello arrow function...');
}

usernamewithEs6();


var usernamewithEs66 = () => console.log('hello arrow function...');

usernamewithEs66();



//normal function calling
var username = function(name){
    return name;

};

console.log(username("suma")); //normal function calling


var usernamewithEs61 = () => {
    return arguments;
}

console.log(usernamewithEs61("suma"));//es6 fat arrow calling
*/

/*
var usernamewithEs6=(...args) => {
    return args;
};
*/
var username = function(){

    return arguments;
}

console.log(username("suma"));

var usernamewithEs6 = (...args) => {
    return args.forEach(x => console.log(x));
};


console.log(usernamewithEs6("suma","veena","shanti"));


var users = {
    name: "suma",
    age:25,
    company:"Test Yantra",
    salary:20000,
    userInfo: function() {
        console.log(`my name is ${this.name} age is ${this.age} 
        i work for ${this.company} and am gettig ${this.salary}`);
    }
};//normal function example

var users2 = {
    name:"anu",
    age:20,
    company:"TestYantra",
    salary:20000,
    userInfo:() => {
        console.log(`my name is ${users2.name} age is ${users2.age} 
        i work for ${users2.company} and am gettig ${users2.salary}`);
}
};//fat arrow example will not bind "this keyword"
users.userInfo();
users2.userInfo();

//inside object literal

var users1 = {
    name: "manu",
    salary: 30000,
    empData() {
        console.log(`${this.name} ${this.salary}`);0-9
    }
}








