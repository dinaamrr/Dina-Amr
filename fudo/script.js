const fav= document.getElementsByClassName('fav');
const wishlist= [];


const element=document.getElementsByClassName("title");


for (let i=0; i<=4;i++){
    fav[i].addEventListener("click",()=> {
        
        wishlist.push(element[i].innerText)
       
    });
    
    
}


console.log(wishlist);