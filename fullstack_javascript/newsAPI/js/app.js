var search = document.getElementById("search");

search.addEventListener("keyup", e => {
if(e.keyCode === 13){
    var getCityName = e.target.value;
} 
    getWeather(getCityName);


});

function getWeather(getCityName){
console.log(getCityName);
const weatherApi =`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=7d738ba785f3ca858c11d75411ed046f`;

window.fetch(weatherApi)
.then(data => {
    data.json()
    .then(weather => {
        var output="";
        console.log(weather);
        console.log(weather.coord.lon);
        console.log(weather.coord.lat);

       var weatherData = weather.weather;
       var output="";
       for(let x of weatherData){
      //console.log(x);
      //console.log(x.id);
      //console.log(x.main);
      //console.log(x.description);
      //console.log(x.icon);
      output +=`

      <div class="mt-4 weatherBlock">
        <div class="card-body">
         <h1>${weather.name}</h1>
         <span class="icon">
         <img src="http://openweathermap.org/img/wn${x.icon}.png"/></span>
         <p><span>temp:</span>
         <span class="temp">${weather.main.temp}&deg;c</span></p>
         <span class="des float-left">${x.description}</span>
         <span class="des float-right">${x.main}</span>
        </div>
      </div>
      `;
       
    }
        document.getElementById("template").innerHTML=output;
    }).catch(err => console.log(err));
})
.catch(err => console.log(err));
}

//const newsApi=`b9d447296623495db6cf8f22742c1163`;
//=`https://newsapi.org/v2/top-headlines?country=in&category=sportsapiKey=4f41b2cf9a3f4eb58489783155c27fb3`;
const SportsApiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4f41b2cf9a3f4eb58489783155c27fb3`;
window.fetch(SportsApiUrl)
.then(data =>{
    data.json()
    .then(Sportsnews =>{
        console.log(Sportsnews);
        let sportsData=Sportsnews.articles;
        let output="";

        for(let sports of sportsData){
            output +=`
            
            <h1 class="h1Title"><a href="${sports.url}" target=_blank></a>${sports.title}</h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>
            `;
            document.getElementById("left").innerHTML=output;
        }
    }).catch(err => console.log(err))
}).catch(err => console.log(err));


//time javascript here

setInterval(() =>{
    var time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);



const EntUrl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4f41b2cf9a3f4eb58489783155c27fb3`;

window.fetch(EntUrl).then(data => {

    data.json().then(ent =>{
        let entData=ent.articles;
        let output="";

        for(let ent of entData){
            output +=`
                        
            <h1 class="h1Title"><a href="${ent.url}" target=_blank></a> ${ent.title}</h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>
            `;
            document.getElementById("right").innerHTML=output;
        }
        console.log(ent);
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

const topHeadtlineApiUrl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=4f41b2cf9a3f4eb58489783155c27fb3`;
window.fetch(topHeadtlineApiUrl)
.then(data =>{
    data.json()
    .then(topnews =>{
        console.log(topnews);
        let topnewData=topnews.articles;
        let output="";

        for(let topnew of topnewData){
            output +=`
            
            <h1 class="h1Title"><a href="${topnew.url}" target=_blank></a>${topnew.title}</h1>
            <p>${topnew.description}</p>
            <img src="${topnew.urlToImage}"/>
            <p>${topnew.publishedAt}</p>
            `;
            document.getElementById("middle").innerHTML=output;
        }
    }).catch(err => console.log(err))
}).catch(err => console.log(err));