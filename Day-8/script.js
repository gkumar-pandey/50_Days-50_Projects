const quoteText = document.querySelector('.quote');
const btn = document.querySelector('.button');
const authorName = document.querySelector('.name');
const copybtn = document.querySelector('.copy');
const twitterbtn = document.querySelector('.twitter');
 

function randomquote(){
    // console.log('hello');
    btn.classList.add("loading");
    btn.innerText = "Loading Quote..";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author
        btn.innerText = "New Quote";
        btn.classList.remove("loading");
    });
}

copybtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterbtn.addEventListener('click', ()=>{
    let tweeterUrl = `https://twitter.com/share?url=${quoteText.innerText}`;
    window.open(tweeterUrl, "__blank");
});


btn.addEventListener('click', randomquote);