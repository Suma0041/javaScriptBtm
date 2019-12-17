//var ------->js
//let ------->es6 onwords
//const ------->es6 onwords

var str="suma";
var str1="manju";
var str2="veena";
var str3=new String("reshu");
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3.valueOf);

var num=10;
num=10.5;
num=10/5;
var num1=new Number(2);
console.log(typeof num);
console.log(typeof num1);

//undefined values and null values are special valuesS
/*var username;
var testnull=null;
var bool=true;
var bool1=new Boolean();
console.log(typeof username);
console.log(typeof testnull);
console.log(typeof bool);
console.log(typeof bool1);*/

//arrays
var array=["java","python","suma",undefined,null,{},function () { },true];



//console.log(array.length);
//console.log(array[0]) to display one value based on the index value of the array
/*for(var i=0; i<array.length; i++)//to display all the values present in the array
{
console.log(array[i]);
}*/

/*console.log(typeof array);
console.log(Array.isArray(array)); //it is used to check array or not and string does not have reverse method
console.log(Array.isArray(str4));*/

var str4="hello javascript";
/*var arraylikeobject=Array.from(str4);
var splitType=str4.split("");//covert string into array values
//var splitType=str4.split(" ");
console.log(splitType);
console.log(splitType.length);

var es6waytoconvertstringintoArray=Array.from(str4);
console.log(es6waytoconvertstringintoArray);

console.log(typeof str);

array.forEach(x => console.log(x));
arraylikeobject.forEach(x => console.log(x));//display the output as "h e l l o j a v a s r i p t" as one by one
*/

var array2=["suma","abc"];

var [...newway]= str4;//"..." is spread operator
console.log(typeof newway);
console.log(Array.isArray(newway));


newway.forEach(function(x) {
    console.log(x);
});

var totalArray=array.concat(array2);//concat is used to combine 2 or more arrays in es5 way(ecma6 verion way)
console.log(totalArray);


var es6way=[array,array2];//its just show the values or characters present in the 2 array but its not combine tha array in es6 way
var es6wayy=[...array,...array2,...str];// here spread operator is used to combine the 2 or more arrays in es6 way
console.log(es6way);
console.log(es6wayy);

var arrayIntoString=array.toString();//toString is used to return a string representaion of an array or covverts string to array
console.log(arrayIntoString);
console.log(typeof arrayIntoString);

var onemorewaytoArrayintoString=array.join(`😍`);//ctrl+i
console.log(onemorewaytoArrayintoString)
console.log(typeof onemorewaytoArrayintoString);


//21-11-2019

var Array3 = Array.of("suma", "veena");
var Array4 = Array(7);
console.log(Array3);
console.log(Array4);

//Object creation

var EmpData=[{
    name:'anu',
    age:20,
    company:'Testyantra',
    salary:30000,
    designation:'nodejs developer',
    skills:["java","phython","nodejs"]
},

{
    name:'suma',
    age:25,
    company:'oracle',
    salary:35000,
    designation:'java developer',
    skills:["java","sql","nodejs"],
    username: function() {
        console.log("hello username");
    }
   }
];  
//EmpData.name = "suma";//override the object literal 

//console.log(typeof EmpData);

/*console.log(EmpData["name"]);
console.log(EmpData["age"]);
console.log(EmpData.designation);
console.log(EmpData.salary);
console.log(EmpData.skills[1]);*/

console.log(EmpData);


//https://api.github.com/users------->json web link

//the below code shows the local users of json
window
.fetch("https://api.github.com/users")
.then(data =>{
    data.json().then(item => {
        console.log(item);
    }).catch(err => console.log(err))
})

 .catch(err => console.log(err));
      

 /*   var obj = {
        name = 'janani',
        age = 20,
        company: 'testyantra',
        salary: 50000
    }*/                                                                                                                                      



var obj = new Object();//this is constructor way to creat the object
obj.name = "suma";
obj.age = 21;
obj.company = 'Qspider';
obj.salary = 59000;


console.log(obj);

var test = Object.entries(obj);//entries are used to convert object into array form
console.log(test);

//Assignment
//creat name,age,company,salary,designation,location,date of join,educational details



var Emp = {
    empId: 123,
    empName: "suma",
    empAge: 20,
    empCompany: "testyantra",
    empSalary: 60000,
    empDesignation: "Java Developer",
    empLocation: "Banglore",
    //dateOfJoining: "5-8-2019",
    empDOJ: new Date('5-8-2019'),
    empEducation:"BE",
    empDetails: function(){
        document.write(`<h1>my name is ${this.empName} </h1>
        <ul>
        <li>my age is ${this.empAge}</li>
        <li>i am getting ${this.empSalary}</li>
        <li>i work for ${this.empCompany}</li>
        <li>${this.empLocation}<,/li>
        <li>${this.empDesignation}</li>
        <li>${this.empDoj}</li>
        <li>${this.empEducation}</li>
        </ul>`
        
    );//back tick is used for multiple values or characters
    }

};
emp.empDetails();





