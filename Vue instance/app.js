const app= Vue.createApp({
    data(){
        return{
            title:"Vue.js",
            sallama:"Sallıyorum",
            eduflow:{
                title:"Müfredat",
                target:"_blank",
                url:"https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/learn/lecture/18890636#overview",
                alt:"adgdagdagdasfgadgf"
            },
            owner: "Pogaca",
            coords:{
                x:0,
                y:0,
            },
        };
    },
    methods :{
        changeTitle(pTitle){
            this.sallama= pTitle;
        },
        updateCoords(message,event){
            console.log(message,event.x,event.y);
            this.changeTitle(`${event.x},${event.y}`);
            this.coords={
                x:event.x,
                y:event.y,
            }


        }

    }
}).mount("#app")