function  Clock() {
    setInterval(function(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var time = `<h1>
    ${hour}:${minutes}:${seconds}
    </h1>`;
    document.getElementById("template").innerHTML = time;
}, 1000);
}


Clock();


//setTimeout(() =>{
//    console.log("hello suma")
//);//it is used to convert asynchronous function to synchronous function
