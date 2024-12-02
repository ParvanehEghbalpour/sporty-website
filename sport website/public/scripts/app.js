const menuEl=document.querySelector(".menu");
const menuListEl=document.querySelector(".menu-list");
const productsEl=document.querySelector(".products");
let checkOpen=true;

menuEl.addEventListener("click",function(){
    console.log(checkOpen)
   if(checkOpen){
    menuListEl.classList.remove("hidden");
    checkOpen=false;
}else{
    menuListEl.classList.add("hidden");
    checkOpen=true;
}
})

productsEl.addEventListener("click", function(e){
    console.log(e.target.children)
    console.log(e.target.children[0]);
    console.log(e.target.children[1]);
    e.target.children[0].classList.add("active")
    e.target.children[1].classList.remove("hidden");
})
