const progress = document.getElementById("progress");
const pre = document.getElementsByClassName("pre");
const next = document.getElementsByClassName("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", ()=> {
    currentActive++;
    console.log(currentActive);
})

// next.addEventListener('cick', () => {
//     currentActive++;

//     if(currentActive>circles.length){
//         currentActive = circles.length;
//     }
//     update();
// });

pre.addEventListener('cick', ()=> {
    currentActive--;

    if(currentActive<1){
        currentActive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle, idx)=>{
        if(idx<currentActive){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });
}

next.addEventListener('click', function(){
    console.log("hello world")
});

