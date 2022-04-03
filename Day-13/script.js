const Title = document.querySelector('.heading')
Title.innerHTML = `<h1>BoredBot</h1>`

const btn = document.querySelector('.btn')
const button = document.createElement('button')
// button.innerText = "Button"
btn.appendChild(button)
button.addEventListener('click',()=> {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
        .then(data => {
            console.log(data)
            const textDiv = document.querySelector('.text')
            textDiv.innerText = data.activity;
        })
})

