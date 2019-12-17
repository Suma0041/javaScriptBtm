
//27-11-2019
//call back function:
/*
function show(){
  console.log("hello show function");
    
}

function showcallback(callback) {

    callback()
    }//called 
    showcallback(show);//calling.....



//FUNCTION AAS CONSTRUCTEOR

    function User(name, age,company,salary,designation) {   ///function as constructor
    this.name = name;
    this.age = age;
    this.company = company;
    this.salary = salary;  
    this.designation = designation;  
    }

    
    new User("manu", 20, "Jspider", 40000, "Java devoloper");//constructor
    console.log(User);


    let user1 = new User("manu", 20, "Jspider", 40000, "Java developer");//constructor
    let user2 = new User("vinu", 24, "Qspider", 50000, "SQL developer");
    console.log(user1);
    console.log(user2);
    
//ARRAY METHODS
//array inbuilt methods
//1.pop() method
var language = ["java", "phython","nodejs", "ruby"];
language.pop();
console.log(language);

//2.shift() method
var language = ["java", "phython","nodejs", "ruby"];
language.shift();
console.log(language);

//3.push() method
var language = ["java", "phython","nodejs", "ruby"];
language.push("angular");
console.log(language);

//4.unshift() method
var language = ["java", "phython","nodejs", "ruby"];
language.unshift("angular");
console.log(language);


//5.splice() method
var language = ["java", "phython","nodejs", "ruby"];
language.splice(1,1);//remove the phython based on the index number written inside the array
language.splice(1,1,"cython");//here based index number replace the "cython" with "phython"
language.splice(1,0,"react");
console.log(language);

//6.forEach() method
var language = ["java", "phython","nodejs", "ruby"];
for(var i=0; i<language.length; i++){

    console.log(language[i]);
}

//language.forEach(value(particular value), index, array)
language.forEach(function (value, index, array) {
   //always callback function should be ananymous function
   

   console.log(index);
   console.log(value);
   console.log(array);
});

language.forEach(function (value, index, array) {
    console.log(`${index}:${value}`);
});
*/


/*
var employees = [
    {
.
        emp_id: "cap101",
        emp_name: "man0u",
        emp_photo: "https://cdn.pixabay.com/photo/2019/11/21/13/52/man-and-animal-4642626__340.jpg",
        emp_age: 20,
        emp_gender:"male",
        emp_company:"Capgemini",
        emp_salary:30000,
        emp_designation: "web developer",
        emp_doj: new Date("2015/05/15"),
        emp_location: "mysore",
        emp_education: "BE"

    },
    {emp_id: "orc201",
    emp_name: "suma",
    emp_photo: "https://cdn.pixabay.com/photo/2019/11/06/05/57/model-4605248__340.jpg",
    emp_age: 24,
    emp_gender:"female",
    emp_company:"oracle",
    emp_salary:50000,
    emp_designation: "SQL developer",
    emp_doj: new Date("2019/09/29"),
    emp_location: "bengaluru",
    emp_education: "BE"},
    {

        emp_id: "bos219",
        emp_name: "manju",
        emp_photo: "https://cdn.pixabay.com/photo/2019/11/25/13/54/girl-4652114__340.jpg",
 ....       emp_age: 25,
        emp_gender:"female",
        emp_company:"boush",
        emp_salary:30000,
        emp_designation: "java developer",
        emp_doj: new Date("2017/09/15"),
        emp_location: "channai",
        emp_education: "BE"
    },
    {
        emp_id: "apt420",
        emp_name: "sushmita",
        emp_photo: "https://cdn.pixabay.com/photo/2019/11/26/16/20/attractive-4654860__340.jpg",
        emp_age: 20,
        emp_gender:"female",
        emp_company:"Aptive",
        emp_salary:30000,
        emp_designation: "fullstack developer",
        emp_doj: new Date("2017/05/30"),
        emp_location: "pune",
        emp_education: "BE"
    },
];

var emp = [];
employees. forEach(function (empData) {
    //var test = emp.push(empData);
    //emp += `
   // <h1>${emp.emp_company}</h1>
    //`
    e...........mp.push(`
    <div class="card" >
    <img src="${empData.emp_photo}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${empData.emp_name}</h5>
     <span class="badge badge-success float-right">${empData.emp_id}</span>
     <hr class="hr">
     <span class="badge badge-primary float-right">${empData.emp_designation}</span>
     <li class="list-group-item">salary:${empData.emp_salary}</li>
     <li class="list-group-item">location:${empData.emp_location}</li>
     <li class="list-group-item">education:${empData.emp_education}</li>
     <li class="list-group-item">age:${empData.emp_age}</li>
     <li class="list-group-item">company:${empData.emp_company}</li>
     <li class="list-group-item">gender:${empData.emp_gender}</li>
     <li class="list-group-item">Date of joing:${empData.emp_doj.toString()}</li>


     <a ref="#" class="btn btn-primary">Go Somewhere</a>
     </div>
     </div>

    `);
});
document.getElementById('template').innerHTML = emp;
*/


//reverse array of names
//very important for interview
var names=["manu","anu","shashi","varun"];
var str="hello javascript";
var num = [10, 50, 30, 60, 1, 30, 54];

var test= names.sort();
var numsort= num.sort(function (a, b) {
    //return b-a;//descending 
    return a-b;//ascending 
});
//console.log(numsort);
//Reverse the string without function---------->important for interview
var stringReverse = [...str].reverse().join("");
console.log(stringReverse);

//reverse the string with function--------->important
function username(str) {
    return[...str].reverse().join("");

    
}

console.log(username("jspiders"));

















.........ontransitioncancel.apply......ontransitioncancel.