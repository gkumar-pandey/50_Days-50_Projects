const imageContainer = document.querySelector('.img-container')



fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data =>{
    imageContainer.innerHTML = `<img src="${data.message}"/>`
})