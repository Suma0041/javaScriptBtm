//25-11-2019
/* var user = "shashi";
var user = "manu";

const user = "manu";

//error */



/*
const user = {
    name : "manu",
    age: 20,
    company: "testYantra",
    salary: 20000
};

user.name = "anu";

console.log(user);
//no error if it isa object
*/

/*for(var i=0; i<=10; i++){
    var username = "shashi"
    console.log(i)
}

console.log(username);//global scope

function user() {
    var age = 20;//fuction scope
    console.log(age);
}
user();
*/


/* for(var i=0; i<=10; i++){
    let username = "shashi";  //blocked scope...
    console.log(i);
    console.log(username);
*/


/* 
"use strict"

 var username = "shahsi";
console.log(username);
*/

/*
console.log(usernamme);
 let username = "manu";
*/

/*
var username = "manu";
var username = "shashi";
console.log(username);
*/
/*
const username = "manu";
const username = "shashi";
console.log(username);
 */

 
 /*
 let username1 = "shashi";
    username1 = "manu";
    console.log(username1);
*/
/*
let username = "shashi";
let username = "manu";
console.log(username);
*/

/*
function username() {
    alert("hello function")
}//called function

username();//calling function
*/


/* (function loadTemplate(){
    document.write(`
   
<!DOCTYPE html>
<html>
    
<head>
	<title>My Awesome Login Page</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
</head>
<!--Coded with love by Mutiullah Samim-->
<body>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
`
})()
*/



function loadTemplate1() {
var template1=document.getElementById("template1");
//console.log(template1);
template1.innerHTML = `

<h1>load template1</h1>
<html>
<head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<style>
.row.heading h2 {
    color: #fff;
    font-size: 52.52px;
    line-height: 95px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 40px;
    padding-bottom: 20px;
    text-transform: uppercase;
}
ul{
  margin:0;
  padding:0;
  list-style:none;
}
.heading.heading-icon {
    display: block;
}
.padding-lg {
	display: block;
	padding-top: 60px;
	padding-bottom: 60px;
}
.practice-area.padding-lg {
    padding-bottom: 55px;
    padding-top: 55px;
}
.practice-area .inner{ 
     border:1px solid #999999; 
	 text-align:center; 
	 margin-bottom:28px; 
	 padding:40px 25px;
}
.our-webcoderskull .cnt-block:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    border: 0;
}
.practice-area .inner h3{ 
    color:#3c3c3c; 
	font-size:24px; 
	font-weight:500;
	font-family: 'Poppins', sans-serif;
	padding: 10px 0;
}
.practice-area .inner p{ 
    font-size:14px; 
	line-height:22px; 
	font-weight:400;
}
.practice-area .inner img{
	display:inline-block;
}


.our-webcoderskull{
  background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
  
}
.our-webcoderskull .cnt-block{ 
   float:left; 
   width:100%; 
   background:#fff; 
   padding:30px 20px; 
   text-align:center; 
   border:2px solid #d5d5d5;
   margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
   width:148px; 
   height:148px; 
   border-radius:100%; 
   display:inline-block;
   margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{ 
   width:148px; 
   height:148px; 
   border-radius:100%; 
}
.our-webcoderskull .cnt-block h3{ 
   color:#2a2a2a; 
   font-size:20px; 
   font-weight:500; 
   padding:6px 0;
   text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
  text-decoration:none;
	color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
	color:#337ab7;
}
.our-webcoderskull .cnt-block p{ 
   color:#2a2a2a; 
   font-size:13px; 
   line-height:20px; 
   font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
	margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{ 
    display:inline-block; 
	width:auto; 
	margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{ 
   font-size:24px; 
   color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
   color:#025a8e;
}

</style>

<section class="our-webcoderskull padding-lg">
  <div class="container">
    <div class="row heading heading-icon">
        <h2>Our Team</h2>
    </div>
    <ul class="row">
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
            <h3><a href="#">Kappua </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
       </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
    </ul>
  </div>
</section>
`;
}
function loadTemplate2() {
    var template2=document.getElementById("template2");
    template2.innerHTML = `
    <h1>load template2</h1>
<html>
<head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->


<style>
nav > .nav.nav-tabs{

  border: none;
    color:#fff;
    background:#272e38;
    border-radius:0;

}
nav > div a.nav-item.nav-link,
nav > div a.nav-item.nav-link.active
{
  border: none;
    padding: 18px 25px;
    color:#fff;
    background:#272e38;
    border-radius:0;
}

nav > div a.nav-item.nav-link.active:after
 {
  content: "";
  position: relative;
  bottom: -60px;
  left: -10%;
  border: 15px solid transparent;
  border-top-color: #e74c3c ;
}
.tab-content{
  background: #fdfdfd;
    line-height: 25px;
    border: 1px solid #ddd;
    border-top:5px solid #e74c3c;
    border-bottom:5px solid #e74c3c;
    padding:30px 25px;
}

nav > div a.nav-item.nav-link:hover,
nav > div a.nav-item.nav-link:focus
{
  border: none;
    background: #e74c3c;
    color:#fff;
    border-radius:0;
    transition:background 0.20s linear;
}
</style>


 <div class="container">
              <div class="row">
                <div class="col-xs-12 ">
                  <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                      <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">About</a>
                    </div>
                  </nav>
                  <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                    <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                  </div>
                
                </div>
              </div>
        </div>
      </div>
</div>

    `;
}
function loadTemplate3() {
    //var template3=document.getElementById("template3");
    var template3=document.getElementById("template3");
    template3.innerHTML = `
    <h1>load template2</h1>
     <html>
    <head>

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Shadows+Into+Light' rel='stylesheet' type='text/css'>


<style>

body{padding: 10px 250px; text-align: center; font-family: 'Shadows Into Light', cursive; font-size: 30px;}
h2{
font-size: 55px;
}
.social {
    position: relative;
    height: 3em;
    width: 13.5em;
    margin: 150px 450px;
}

.social li {
    display: block;
    height: 4em;
    line-height: 4em;
    margin: -2.2em;
    position: absolute;
    -webkit-transition: -webkit-transform .7s;
    -moz-transition: -moz-transform .7s;
    -ms-transition: -ms-transform .7s;
    -o-transition: -o-transform .7s;
    transition: transform .7s;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    text-align: center;
    width: 4em;

}

.social a {
    color: #fffdf0;
    display: block;
    height: 4em;
    line-height: 6em;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 4em; 
  
}

.social li:hover {
  -webkit-transform: scale(1.3,1.3) rotate(45deg);
    -moz-transform: scale(1.3,1.3) rotate(45deg);
  -ms-transform: scale(1.3,1.3) rotate(45deg);
    -o-transform: scale(1.3,1.3) rotate(45deg);
  transform: scale(1.3,1.3) rotate(45deg);
}

.facebook {
    background: #155b9d;
    left: 0;
    top: 0%;
}

.twitter {
    background: #1a9ec4;
    bottom: 0;
    left: 25%;
}
.facebook2 {
    background: #155b9d;
    left: 50%;
    top: 0%;
}

.twitter2 {
    background: #1a9ec4;
    bottom: 0;
    left: 25%;
}

.pinterest {
    background: #e11a30;
    left: 50%;
    top: 0%;
}
.behance {
    background: #3f7aa3;
    bottom: 0;
    left: 75%;
}
.behance2 {
    background: #3f7aa3;
    top: 0%;
    left: 50%;
}
.behance3 {
    background: #3f7aa3;
    bottom: 0;
    left: 75%;
}
</style>


<div class="container">
	<div class="row">
    <div class="col-md-12">
		<h2>SOCIAL ICONS WITH NICE EFFECTS and<br /> unusual position</h2>
                            <div class="col-md-6 .col-md-offset-3">
                                 <ul class="social">
                                  <li class="facebook"><a href="http://facebook.com/alterowo"><i class="fa fa-facebook fa-3x"></i></a></li>
                                  <li class="twitter"><a href="http://twitter.com/Kyokushinowa"><i class="fa fa-twitter fa-3x"></i></a></li>
                                  <li class="pinterest"><a href="http://www.pinterest.com/beatagibalska/"><i class="fa fa-pinterest-p fa-3x"></i></a></li>
                                  <li class="behance"><a href="https://www.behance.net/Kurnikowa"><i class="fa fa-behance fa-3x"></i></a></li>
                                </ul>
                          </div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
    	<h2>You can edit this CSS if you want<br /> and if you need.</h2>
                            <div class="col-md-6 .col-md-offset-3">
                                 <ul class="social">
                                  <li class="facebook"><a href="http://facebook.com/alterowo"><i class="fa fa-facebook fa-3x"></i></a></li>
                                  <li class="twitter"><a href="http://twitter.com/Kyokushinowa"><i class="fa fa-twitter fa-3x"></i></a></li>
                                  <li class="behance2"><a href="https://www.behance.net/Kurnikowa"><i class="fa fa-behance fa-3x"></i></a></li>
                                </ul>
                          </div>
    </div>
    </div>
     <div class="row">
    <div class="col-md-12">
        <h2>Every Simple to USE <br /> with FONT AWESOME</h2>
                            <div class="col-md-6 .col-md-offset-3">
                                 <ul class="social">
                                  <li class="facebook2"><a href="http://facebook.com/alterowo"><i class="fa fa-facebook fa-3x"></i></a></li>
                                  <li class="twitter2"><a href="http://twitter.com/Kyokushinowa"><i class="fa fa-twitter fa-3x"></i></a></li>
                                  <li class="behance3"><a href="https://www.behance.net/Kurnikowa"><i class="fa fa-behance fa-3x"></i></a></li>
                                </ul>
                          </div>
    </div>
       <h2>ENJOY!</h2><i class="fa fa-angellist fa-4x"></i>

    </div>
</div>



    `;
}
function loadTemplate4() {
    var template4=document.getElementById("template4");
    template4.innerHTML = `
    <h1>load template4</h1>
     <html>
    <head>
<style>

    /* Coded with love by Mutiullah Samim */
		body,
		html {
			margin: 0;
			padding: 0;
			height: 100%;
			background: #60a3bc !important;
		}
		.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			background: #f39c12;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #60a3bc;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #c0392b !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #c0392b !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #c0392b !important;
    }
    </style>

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->
    
    <!DOCTYPE html>
    <html>
        
    <head>
      <title>My Awesome Login Page</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    </head>
    <!--Coded with love by Mutiullah Samim-->
    <body>
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form>
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="" class="form-control input_user" value="" placeholder="username">
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password" name="" class="form-control input_pass" value="" placeholder="password">
                </div>
                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customControlInline">
                    <label class="custom-control-label" for="customControlInline">Remember me</label>
                  </div>
                </div>
                  <div class="d-flex justify-content-center mt-3 login_container">
               <button type="button" name="button" class="btn login_btn">Login</button>
               </div>
              </form>
            </div>
        
            <div class="mt-4">
              <div class="d-flex justify-content-center links">
                Don't have an account? <a href="#" class="ml-2">Sign Up</a>
              </div>
              <div class="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
    


     `;
  }








