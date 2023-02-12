const btn = document.getElementById("jokeBtn");
const joke = document.querySelector(".joke");
const url = "https://icanhazdadjoke.com/";

const getJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    const res = await fetch(url, config);
    const data = await res.json();

    joke.innerHTML = `${data.joke}`;
  } catch (err) {
    console.log(err);
  }
};

getJoke();

btn.addEventListener("click", () => {
  getJoke();
});
