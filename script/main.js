const menuBtn = document.querySelectorAll(".menu-btn");
const leftSide = document.querySelector(".left-side");

menuBtn.forEach(item=>{
    item.addEventListener("click", ()=>{
        leftSide.classList.toggle("active")
    })
})



const textRound = document.querySelector(".round-text p");
textRound.innerHTML = textRound.innerHTML.split('').map(
    (char,i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');

