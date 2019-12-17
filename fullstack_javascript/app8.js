/*var demo = document.getElementById('demo');
function GetLocation(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(ShowPosition);//showposition is callback function
    } else{
        demo.innerHTML = `geolocation is not supported`;

    }

}


function ShowPosition(position){
    demo.innerHTML =`Latitude is 〽️${position.coords.latitude}
    longitude is 〽️${position.coords.longitude}`;

}
*/
function GetLocation(){
   window.location.assign("http://www.google.com");
}
