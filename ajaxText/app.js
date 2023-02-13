// HTTP STATUS
// 200: OK 
// 403: FORBIDDEN
// 404: NOT FOUND
// 505:INTERNAL SERVER ERROR

// Holds the status of the XMLHttpRequest 
// 0:request not initialized
// 1:server connection established
// 2:request received
// 3:processing request
// 4:request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){
  //XMLHTTP REQUEST
  const xhr= new XMLHttpRequest();
  xhr.onload=function(){
    if(this.status===200){
      console.log(this.responseText);
    }
  }
  //This method is the old usage method is correct but the above method is used more now
  // xhr.onreadystatechange=function(){
  //   // console.log(this.readyState);
  //   // console.log(this.status);

  //   if(this.status==200&&this.readyState==4){
  //     //Response Ready
  //     console.log(this.responseText);

  //   }
  // }
  xhr.open("GET","EXAMPLE.TXT",true);
  xhr.send();
})