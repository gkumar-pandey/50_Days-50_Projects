const container = document.querySelector('.container');
const search = document.querySelector('.btn');
const input = document.querySelector('.input')

search.addEventListener('click', ()=> {
    container.classList.add('active');
    input.focus();
})