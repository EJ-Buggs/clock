const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function time() {
  const h = new Date().getHours() * 30 + 90;
  const m = new Date().getMinutes() * 6 + 90;
  const s = new Date().getSeconds() * 6 + 90;
  hour.style.transform = `rotate(${h}deg)`;
  minute.style.transform = `rotate(${m}deg)`;
  second.style.transform = `rotate(${s}deg)`;
  console.log(h);
}

setInterval(time, 1000);
