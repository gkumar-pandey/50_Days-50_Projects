const label = document.querySelectorAll('label');
// console.log(label);

label.forEach( (e) => {
    
    let letterArr = e.innerHTML.split('');
    // console.log(typeof letterArr)
    let spanTags = [];
    
    for(let i=0; i<letterArr.length; i++){
        spanTags.push(`<span style= "transition-delay: ${i*50}ms"> ${letterArr[i]}</span>`);
    }
    e.innerHTML = spanTags.join('')
     
    
    
     
})
