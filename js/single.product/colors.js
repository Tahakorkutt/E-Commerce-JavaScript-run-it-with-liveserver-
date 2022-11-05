function colorsFunc(){
    const colorsDOM = document.querySelectorAll(".color-wrapper");
   colorsDOM.forEach((color)=>{
    color.classList.remove("active")
color.addEventListener("click",function(){
    colorsDOM.forEach((item)=>{
        item.classList.remove("active");/* tıkladığmız da silme*/
    })
    color.classList.add("active");

});

   });
}
export default colorsFunc();