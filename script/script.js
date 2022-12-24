let widget=document.querySelectorAll('.widget');
let burger=document.getElementById('menu');
burger.addEventListener("click",()=>{
    document.querySelector('.nav-Ul').classList.toggle('active');
});
