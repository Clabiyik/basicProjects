
let userID=document.querySelector("#userId")
let text=document.querySelector("#text")
let btn=document.querySelector("#btn")
fetchToCard();

function fetchToCard(){
    fetch('https://jsonplaceholder.typicode.com/todos/20')
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        userID.innerHTML=`${data.title}`
        text.innerHTML=`${data.completed}`
        btn.innerHTML=`${data.userId}`


    })
}

fetchToCard()
