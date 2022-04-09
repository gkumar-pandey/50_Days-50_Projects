const container = document.querySelector(".container");
const form = document.querySelector('#new-post')
let newData = [];
function renderPost(newData) {
  let html = "";
  for (post of newData) {
    html += `<h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr>
          `;
  }
  container.innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    newData = data.slice(0, 5);
    renderPost(newData);
  });

const newPost = document.getElementById("new-post");

newPost.addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = document.getElementById("title").value;
  const postBody = document.getElementById("body").value;

  const datatoPost = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(datatoPost),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((response) => response.json())
    .then((post) => {
       newData.unshift(post);
       renderPost(newData);
       form.reset();
    });
});
