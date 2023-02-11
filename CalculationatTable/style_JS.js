let users =[];
function btnClick() 
{
    addRow();
}

function addRow() {
    

    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var okul =document.getElementById("okul").value;
    var sinif = document.getElementById("sinif").value;
    var puan = document.getElementById("puan").value;
       
    let user={
        Ad:ad,
        Soyad:soyad,
        Sinif:sinif,
        Okul:okul,
        Puan:puan,
    };
    users.push(user);
    localStorage.setItem('KAYIT',JSON.stringify(users));
    LOAD();

}
function clearForm() {
  
  $("#ad").val("");
  $("#soyad").val("");
  $("#okul").val("");
  $("#sinif").val("");
  $("#puan").val("");
}

function LOAD(){
  
        
        let data = JSON.parse(window.localStorage.getItem('KAYIT'));
        let index = 1;
        $("#tblData tbody").html("");
        data.forEach(element => {
          let dynamicTR = "<tr>";
          dynamicTR = dynamicTR + "<td> " + index + "</td>";
          dynamicTR = dynamicTR + "<td>" + element.Ad+ "</td>"
          dynamicTR = dynamicTR +"<td>" + element.Soyad + "</td>"
          dynamicTR = dynamicTR + "<td>" + element.Okul + "</td>";
          dynamicTR = dynamicTR + "<td>" + element.Sinif + "</td>";
          dynamicTR = dynamicTR + "<td>" + element.Puan + "</td>";
          dynamicTR = dynamicTR + " </tr>";
          $("#tblData tbody").append(dynamicTR);
          index++;
        });
        clearForm();
        
        
      }
      
      
      
      
      


