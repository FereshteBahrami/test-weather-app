//display the current date and time
let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let h5 = document.querySelector("#date");
h5.innerHTML = `${day} ${hours}:${minutes}`;

//display the city name
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#showCity");
  let h1 = document.querySelector("#currentCity");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("let's type a city");
  }
}
let form = document.querySelector("#searchCities");
form.addEventListener("click", search);

//Display temperature in Celsius
function celsiusShow(event) {
  event.preventDefault();
  let celsiusDegree = document.querySelector("#Weather-summary");
  celsiusDegree.innerHTML = "15";
}
let celsiusDegreeLink = document.querySelector("#Celsius-link");
celsiusDegreeLink.addEventListener("click", celsiusShow);

//Display temperature in Fahrenheit
function FahrenheitShow(event) {
  event.preventDefault();
  let FahrenheitDegree = document.querySelector("#Weather-summary");
  FahrenheitDegree.innerHTML = "59";
}
let FahrenheitDegreeLink = document.querySelector("#Fahrenheit-link");
FahrenheitDegreeLink.addEventListener("click", FahrenheitShow);
