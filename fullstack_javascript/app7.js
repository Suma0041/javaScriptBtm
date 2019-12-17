//03-12-2019
//STRING METHODS
/*
var str = "hello nodejs";
var len = str.length;//displays the length of the chaaraacters present in the string including spaaces
var len1 = str.toUpperCase();//displays output in upper case letters
var str_result = str.toUpperCase();
var str_result1 = str.toUpperCase().toLowerCase();
var str4 = "😍";



//repeat() method
var str3 = str.repeat(10);
console.log(len);
console.log(len1);
console.log(str4);
console.log(str3);
*/


/*
var str = `
<img 
src= "${"https://cdn.pixabay.com/photo/2019/11/30/18/51/robin-4663910__340.jpg"}"
/>
`;


var str3 = str.repeat(50);
document.write(str3);
*/





//replace() ,method
var str5 = `hello nodejs and nodejs is for server side just like java and python`;
//var result = str5.replace("nodejs", "angular");
//console.log(result);//it replace the first nodejs element with angular


// if you want to replace the entire element or you want to change many times the same element

var result3 = str5.replace(/nodejs/g, "angular");
console.log(result3);

var result6 = str5.endsWith("python");
console.log(result6);


//endsWith() and startsWith() methods
var result7 = str5.endsWith("python?");
var result8 = str5.startsWith("hello");
console.log(result7);
console.log(result8);

//charAt() method
var char = str5.charAt(1);
//console.log(char);

var char1 = str5.charCodeAt(1);
//console.log(char1);
var index = str5.indexOf('h')
var lastindex = str5.lastIndexOf('n');
var includes = str5.includes('java');
console.log(char, char1);
console.log(index);
console.log(lastindex);
console.log(lastindex);

//substr() methode
var str6 = `hello nodejs and nodejs is for server side just like java and python`;
var substr = str6.substr(0,5);
console.log(substr);
var SubString = str6.substring(5,0);
console.log(SubString);
var Slice = str6.slice(0,-5);
console.log(Slice);








        










