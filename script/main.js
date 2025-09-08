const menuBtn = document.querySelectorAll(".menu-btn");
const leftSide = document.querySelector(".left-side");

menuBtn.forEach(item=>{
    item.addEventListener("click", ()=>{
        leftSide.classList.toggle("active")
    })
})