//var firstNumber = document.getElementById("firtsnumber");
//console.log(firstNumber.Value);



function addNumbers() {
   var firstnumber = parseInt(document.getElementById("firstnumber").value);
    var secondnumber = parseInt(document.getElementById("secondnumber").value);
    document.getElementById("result").value =  firstnumber + secondnumber;
   /*
    if(isNaN(firstnumber)){
        alert('please add number')
    }
    
if (isNaN(secondnumber)){
    alert('please add second number')
    }*/

    if(firstnumber === ""){
        alert('firstnumber is required');
        return;
    }
   // var secondnumber = parseInt(document.getElementById("secondnumber").value);
    if(secondnumber === ""){
        alert('secondnumber is required');
        return;
    }
   // document.getElementById("result").value = firstnumber + secondnumber;
    if(isNaN(firstnumber)){
        alert('please add number')
    }
    
if (isNaN(secondnumber)){
    alert('please add second number')
}
}