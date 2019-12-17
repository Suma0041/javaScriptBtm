//10-12-2019
//......load git apis
//communicate between loacal server and  github server
/*
const api= "https://api.github.com/users";
//console.log(window.fetch(api));//output shows as promise pending it means not yet connected 
window
.fetch(api)
.then(data => {
  //console.log(data);//shown output as reponse with url
  data.json().then(user =>{
      console.log(user);
  })
  .catch(err => console.log(err));
})
.catch(err => console.log(err));
*/

/*
const api= "https://api.github.com/users";
 
window
.fetch(api)
.then(data => {

  data.json().then(users =>{
      //print object
      for(let x of users){
          console.log(x.login);
      }
  })
  .catch(err => console.log(err));
})
.catch(err => console.log(err));
*/


/*
//fetcing details from another server

const api= "https://api.github.com/users";
 
window
.fetch(api)
.then(data => {

  data.json().then(users =>{
      //print object
      var output = [];
      for(let user of users){
        //var output ="";
          output += `
          <div class="container">
          <table class="table table-bordered mt-4">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>photo</th>
            <th>repo</th>
            <th>url</th>
         </tr>
         <tr>
            <td>${user.id}</td>
            <td>${user.login}</td>
            <td><img style="width:100px;
            height:100px;
            border-radius:100%" src="${user.avatar_url}"/></td>
            <td>${user.repo_url}</td>
            <td>${user.url}</td>
        </tr>
        </table>
        </div>

          `;
          document.getElementById("template").innerHTML= output;
      }
  })
  .catch(err => console.log(err));
})
.catch(err => console.log(err));
*/
