let btn1=document.getElementById("button1");
let btn2=document.getElementById("button2");
let btn3=document.getElementById("button3");
let output=document.getElementById("out")

function getTextData(){
    fetch("textfile.txt")
    .then(response=> response.text())
    .then(data=> output.innerHTML+=`${data}`)
}
function getJsonData(){
    fetch("article.json")
    .then(response=> response.json())
    .then(json=>
        output.innerHTML+=`<ul>${JSON.stringify(json)}</ul>`)
}
btn1.addEventListener("click",()=>{
    getTextData();
});
btn2.addEventListener("click",()=>{
    
    getJsonData();
});

