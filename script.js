const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function time() {
  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();
  hour.style.transform = `rotate(${h * 30 + 90}deg)`;
  minute.style.transform = `rotate(${m * 6 + 90}deg)`;
  second.style.transform = `rotate(${s * 6 + 90}deg)`;
  console.log(h);
}

setInterval(time, 1000);
