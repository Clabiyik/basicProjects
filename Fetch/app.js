function getTextFile(){   // txt kullaınmı
    
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getJsonFile(){ // Local bir Json Dosyasından Veri Alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
// getJsonFile();
function getExternalAPI(){
    fetch("https://api.exhangeratesapi.io/latest")
    .then(response => response.json())
    .then(data =>{
        console.log(data.rates.TRY);
    })
    .catch(err=> console.log(err))
}
getExternalAPI()