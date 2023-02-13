//Set Timeout



// setTimeout(function(){
    
//     console.log("Naber");

// },2000);

//******************************LOOP*********************

//SET INTERVAL
let i=0;
let value=setInterval(function(){
i++;
console.log("Sayı:",i);
},1000);

//---------------Clear Interval---------------
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});
