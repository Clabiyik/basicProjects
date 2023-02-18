const product = [
    {
        id: 0,
        image: 'https://img.theculturetrip.com/450x300/wp-content/uploads/2019/04/feature_nyc_shutterstock_788608396-2.jpg',
        title: 'AMERICA',
        price: 250,
    },
    {
        id: 1,
        image: 'https://us.123rf.com/450wm/artjoms/artjoms1510/artjoms151000022/46893402-malta,-valletta.jpg',
        title: 'MALTA',
        price: 180,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/b6/32/99/b63299ecd65283df6a6bb867d0dd64a8--ireland-pictures-in-pictures.jpg',
        title: 'IRELAND',
        price: 80,
    },
    {
        id: 3,
        image: 'https://i.gocollette.com/tour-media-manager/tours/europe/norway/642/packages/master-package/search-result-image/highlightsofnorway_search.jpg',
        title: 'NORWAY',
        price: 400,
    },
   
];
let btn = document.querySelector("#btn");
let wishlist=document.querySelector("#wishList");


const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item,image,price;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>    
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
   
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    } 
    
    


    

}
btn.addEventListener("click",()=>{
    wishlist.classList.add("visible");
});
