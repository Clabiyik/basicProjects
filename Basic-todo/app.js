let Btn=document.getElementById('Btn');
let Alan=document.getElementById('Alan');
let inputField=document.getElementById('inputField');

Btn.addEventListener('click',function(){
    var paragraph= document.createElement('p')
    paragraph.innerText=inputField.value;
    Alan.appendChild(paragraph);
})

