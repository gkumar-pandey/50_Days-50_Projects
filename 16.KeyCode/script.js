const container = document.querySelector(".container");
window.addEventListener("keydown", (e) => {
  const { code, key, keyCode } = e;

  container.innerHTML = `<div>
  <div class="key">
      ${key}
      <small>event.key</small>
  </div>
  <div class="key">
       ${keyCode}
      <small>event.keycode</small>
  </div>
  <div class="key">
      ${code}
      <small>event.code</small>
  </div>
</div>`;
});
