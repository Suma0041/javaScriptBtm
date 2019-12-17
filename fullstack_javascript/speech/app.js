//5-12-2019
//BOM(browser object model)

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
// create html elements throught Javascript and insert new element
var p = document.createElement("p");

var words = document.getElementById("words");
words.appendChild(p);
console.log(words);

recognition.addEventListener("result",e => {
    console.log(e.results);
    var trsanscript =[...e.results].map(result => result[0])
    .map(result => result.transcript)
    .join("");
   // console.log(trsanscript);
 //  p.innerHTML = transcript;

 if(e.results[0].isFinal){
     p = document.createElement("p");
     words.appendChild(p);
     p.innerHTML = transcript;
 }
});//this dom method to listen evvents


recognition.addEventListener("end",recognition.start);
recognition.start();//starting speechrecognition...








