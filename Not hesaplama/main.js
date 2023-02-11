let saveBTN = document.getElementById('save');
let toDoContainer = document.getElementById('toDoContainer');
let ad = document.getElementById('inputfield');
let soyad = document.getElementById('inputfield2');
let sınıf = document.getElementById('inputfield3');
let puan = document.getElementById('inputfield4');
let users=[]






function save(e){
    event.preventDefault();
    let ad = document.getElementById('inputfield').value;
    let soyad = document.getElementById('inputfield2').value;
    let sınıf = document.getElementById('inputfield3').value;
    let puan = document.getElementById('inputfield4').value;
    let user={
        Ad:ad,
        Soyad:soyad,
        Sınıf:sınıf,
        Puan:puan,
    };
    users.push(user);
    localStorage.setItem('KAYIT',JSON.stringify(users));
    inputfield.value = "";
    inputfield2.value = "";
    inputfield3.value = "";
    inputfield4.value = "";
    
}
 
function Class1(e){
    toDoContainer.innerHTML='';
    
    event.preventDefault();
    let data = JSON.parse(window.localStorage.getItem('KAYIT'));
    console.log(data)
    data.forEach(element => {
        if(element.Sınıf==1){
            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerText= "AD="+"   "+element.Ad+"   "+"SOYAD="+"   "+element.Soyad+"SINIF="+"   "+element.Sınıf+"   "+"PUAN="+"   "+element.Puan;
            toDoContainer.appendChild(paragraph);
        } 
    }); 
}
function Class2(e){
    toDoContainer.innerHTML='';
    
    event.preventDefault();
    let data = JSON.parse(window.localStorage.getItem('KAYIT'));
    data.forEach(element => {
        if(element.Sınıf==2){
            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerText= "AD="+"   "+element.Ad+"   "+"SOYAD="+"   "+element.Soyad+"SINIF="+"   "+element.Sınıf+"   "+"PUAN="+"   "+element.Puan;
            toDoContainer.appendChild(paragraph);
            
        } 
        
    }); 
  
}
function Class3(e){ 
    event.preventDefault();
    toDoContainer.innerHTML='';
    
    event.preventDefault();
    let data = JSON.parse(window.localStorage.getItem('KAYIT'));
    data.forEach(element => {
        if(element.Sınıf==3){
            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerText= "AD="+"   "+element.Ad+"   "+"SOYAD="+"   "+element.Soyad+"SINIF="+"   "+element.Sınıf+"   "+"PUAN="+"   "+element.Puan;
            toDoContainer.appendChild(paragraph);       
        } 
    }); 
}

// let text ="AD="+"   "+element.Ad+"   "+"SOYAD="+"   "+element.Soyad+"SINIF="+"   "+element.Sınıf+"   "+"PUAN="+"   "+element.Puan;
// let result = text.fontcolor("red");
// document.getElementById("toDoContainer").innerHTML = result;