//Ajax,callback, http requests

class Request{
    constructor(){
        this.xhr=new XMLHttpRequest
    }
    //Get Request
    get(url){
        this.xhr.open("GET",url);//Open connect

        //Important  characteristic because if we use this this working like in fucntion but if we use this this object working everyone
        const temp=this;

        this.xhr.onload=function(){
            console.log(this);

            if(temp.xhr.status===200){
                console.log(temp.xhr.responseText);
            }
        }.bind(this);
        this.xhr.send();
    }
}
const request= new Request();
request.get("https://jsonplaceholder.typicode.com/albums");