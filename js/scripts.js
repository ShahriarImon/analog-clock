let hourHand = document.getElementById("hourHand");
let minuteHand = document.getElementById("minuteHand");
let secondHand = document.getElementById("secondHand");

const setRotation = (element, rotationRatio) => {
  element.style.setProperty("--handRotation", rotationRatio * 360);
};

const setClock = () => {
  const currentTime = new Date();
  console.log(currentTime);
  const secondRatio = (currentTime.getSeconds() + 1) / 60;
  const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentTime.getHours()) / 12;
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
};
setInterval(setClock, 1000);
