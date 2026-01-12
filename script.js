/* Redirect after 8 seconds */
setTimeout(() => {
  window.location.href = "Home/index.html";
}, 8000);

/* Date & Time */
function updateDateTime() {
  const now = new Date();

  const d = String(now.getDate()).padStart(2, "0");
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const y = now.getFullYear();

  const h = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("datetime").textContent =
    `${d}/${m}/${y} : ${h}:${min}:${s}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
