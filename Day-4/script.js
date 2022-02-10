const searchbtn = document.querySelector('.btn');
const search = document.getElementsByClassName('container');
const input = document.querySelector('.input')
searchbtn.addEventListener('click', ()=> {
    searchbtn.classList.toggle('active')
    input.focus();
})