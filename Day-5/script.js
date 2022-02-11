const text = document.querySelector(".percent");
const bg = document.querySelector(".bg");

let load = 0;
 
let n = setInterval(blury, 30);
function blury(){
    load++;
    if(load>99){
        clearInterval(n);
    }

    text.innerHTML = `${load}%`;
    text.style.opacity = scale(load , 0,100,1,0);

    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}