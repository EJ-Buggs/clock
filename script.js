const second = document.querySelector("#ss");
const minute = document.querySelector("#mm");
const hour = document.querySelector("#hh");

setInterval(() => {
  const h = new Date().getHours() * 30;
  const m = new Date().getMinutes() * 6;
  const s = new Date().getSeconds() * 6;
  hour.style.transform = `rotate(${h + m / 12}deg)`;
  minute.style.transform = `rotate(${m}deg)`;
  second.style.transform = `rotate(${s}deg)`;
  console.log(h);
});

// function time() {
//   const h = new Date().getHours() * 30;
//   const m = new Date().getMinutes() * 6;
//   const s = new Date().getSeconds() * 6;
//   hour.style.transform = `rotate(${h}deg)`;
//   minute.style.transform = `rotate(${m}deg)`;
//   second.style.transform = `rotate(${s}deg)`;
//   console.log(h);
// }

// setInterval(time, 1000);
