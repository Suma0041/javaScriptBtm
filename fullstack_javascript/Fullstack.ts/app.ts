//13-12-2019
/*
var username:string="suma";
var age:number=10;
var test:boolean=true;
var array:string[]=["java","SQL","nodejs","typescript"];
*/

/*
var username="suma";
username="10";
username=true;//it throughs an error bcoz its not a string data tye
username="manu";
*/

var username: any = "suma";
username = "10";
username = true;
username = "manu";

//var skills:[string,number]=["java","10"];//throughs an error bcoz "10" written in string format

var skills: [string | number] = ["java", 10];

var username1: string | number = "suma";
username1 = 10;
//username1=true; throughs an error bcoz here we specified only 2 data type
