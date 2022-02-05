const panels = document.querySelectorAll(".panel");

panels.forEach((a)=>{

    a.addEventListener('click', ()=> {
        removeclass();
        a.classList.add("active");
    })
});

function removeclass(){
    panels.forEach((z)=>{
        z.classList.remove('active');
    })
}