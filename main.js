function s(x1, x2, x3, x4) {
  if (x1 != 9000) {
    x1 += 18;
    x2 += 2;
    x3 += 14;
    x4 += 10;
    document.getElementById("ys").innerHTML = x1;
    document.getElementById("ls").innerHTML = x2;
    document.getElementById("fs").innerHTML = x3;
    document.getElementById("ts").innerHTML = x4;
    setTimeout(() => {
      s(x1, x2, x3, x4);
    }, 1000);
  }
}
s(0, 0, 0, 0);


function button() {
  let strEm = document.getElementById("textlog").value;
  let strPa = document.getElementById("passlog").value;
  let boollog = false;
  let boolpas = false;
  if (strEm.length == 0) {
    document.getElementById("at").innerHTML = "Это полне не может быть пустым";
    document.getElementById("blocklog").style.border = "0.2vmin solid red";
    document.getElementById("blocklog").style.boxShadow = "0 0.4vmin red";
  } else if (
    strEm.indexOf("@") == -1 ||
    strEm.indexOf(".") == -1 ||
    strEm.indexOf("@") > strEm.indexOf(".") ||
    strEm.indexOf("@") == 0 ||
    strEm.indexOf(".") - strEm.indexOf("@") == 1 ||
    strEm.length - strEm.indexOf(".") == 1
  ) {
    document.getElementById("at").innerHTML = "Введите правильный адрес";
    document.getElementById("blocklog").style.border = "0.2vmin solid red";
    document.getElementById("blocklog").style.boxShadow = "0 0.4vmin red";
  } else {
    document.getElementById("at").innerHTML = "";
    document.getElementById("blocklog").style.border =
      "0.2vmin solid rgb(122,122,122)";
    document.getElementById("blocklog").style.boxShadow =
      "0 0.4vmin rgb(122,122,122)";
    boollog = true;
  }

  if (strPa.length == 0) {
    document.getElementById("ap").innerHTML = "Это полне не может быть пустым";
    document.getElementById("blockpas").style.border = "0.2vmin solid red";
    document.getElementById("blockpas").style.boxShadow = "0 0.4vmin red";
  } else {
    document.getElementById("ap").innerHTML = "";
    document.getElementById("blockpas").style.border =
      "0.2vmin solid rgb(122,122,122)";
    document.getElementById("blockpas").style.boxShadow =
      "0 0.4vmin rgb(122,122,122)";
    boolpas = true;
  }

  if (boollog == true && boolpas == true) {
    window.open("https://www.google.ru", "_blank");
  }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const urlExRub =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/rub.json";
const urlExUsd =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
const urlExEur =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json";
const urlExTry =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/try.json";
const urlExCny =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cny.json";

async function convert(n) {
  let respExRub = await fetch(urlExRub);
  let dataExRub = await respExRub.json();
  let respExUsd = await fetch(urlExUsd);
  let dataExUsd = await respExUsd.json();
  let respExEur = await fetch(urlExEur);
  let dataExEur = await respExEur.json();
  let respExTry = await fetch(urlExTry);
  let dataExTry = await respExTry.json();
  let respExCny = await fetch(urlExCny);
  let dataExCny = await respExCny.json();

  let Ex1 = document.getElementById("select-1").value;
  let Ex2 = document.getElementById("select-2").value;
  let N1 = Number(document.getElementById("number-1").value);
  let N2 = Number(document.getElementById("number-2").value);
  if (n == 1) {
    switch (Ex1) {
      case "RUB":
        switch (Ex2) {
          case "RUB":
            document.getElementById("number-2").value = N1 * dataExRub.rub.rub;
            alert("Выберите отличающиеся валюты");
            break;
          case "USD":
            document.getElementById("number-2").value = N1 * dataExRub.rub.usd;
            break;
          case "EUR":
            document.getElementById("number-2").value = N1 * dataExRub.rub.eur;
            break;
          case "TRY":
            document.getElementById("number-2").value = N1 * dataExRub.rub.try;
            break;
          case "CNY":
            document.getElementById("number-2").value = N1 * dataExRub.rub.cny;
            break;
        }
        break;
      case "USD":
        switch (Ex2) {
          case "RUB":
            document.getElementById("number-2").value = N1 * dataExUsd.usd.rub;
            break;
          case "USD":
            document.getElementById("number-2").value = N1 * dataExUsd.usd.usd;
            alert("Выберите отличающиеся валюты");
            break;
          case "EUR":
            document.getElementById("number-2").value = N1 * dataExUsd.usd.eur;
            break;
          case "TRY":
            document.getElementById("number-2").value = N1 * dataExUsd.usd.try;
            break;
          case "CNY":
            document.getElementById("number-2").value = N1 * dataExUsd.usd.cny;
            break;
        }
        break;
      case "EUR":
        switch (Ex2) {
          case "RUB":
            document.getElementById("number-2").value = N1 * dataExEur.eur.rub;
            break;
          case "USD":
            document.getElementById("number-2").value = N1 * dataExEur.eur.usd;
            break;
          case "EUR":
            document.getElementById("number-2").value = N1 * dataExEur.eur.eur;
            alert("Выберите отличающиеся валюты");
            break;
          case "TRY":
            document.getElementById("number-2").value = N1 * dataExEur.eur.try;
            break;
          case "CNY":
            document.getElementById("number-2").value = N1 * dataExEur.eur.cny;
            break;
        }
        break;
      case "TRY":
        switch (Ex2) {
          case "RUB":
            document.getElementById("number-2").value = N1 * dataExTry.try.rub;
            break;
          case "USD":
            document.getElementById("number-2").value = N1 * dataExTry.try.usd;
            break;
          case "EUR":
            document.getElementById("number-2").value = N1 * dataExTry.try.eur;
            break;
          case "TRY":
            document.getElementById("number-2").value = N1 * dataExTry.try.try;
            alert("Выберите отличающиеся валюты");
            break;
          case "CNY":
            document.getElementById("number-2").value = N1 * dataExTry.try.cny;
            break;
        }
        break;
      case "CNY":
        switch (Ex2) {
          case "RUB":
            document.getElementById("number-2").value = N1 * dataExCny.cny.rub;
            break;
          case "USD":
            document.getElementById("number-2").value = N1 * dataExCny.cny.usd;
            break;
          case "EUR":
            document.getElementById("number-2").value = N1 * dataExCny.cny.eur;
            break;
          case "TRY":
            document.getElementById("number-2").value = N1 * dataExCny.cny.try;
            break;
          case "CNY":
            document.getElementById("number-2").value = N1 * dataExCny.cny.cny;
            alert("Выберите отличающиеся валюты");
            break;
        }
        break;
    }
  } else {
    switch (Ex2) {
      case "RUB":
        switch (Ex1) {
          case "RUB":
            document.getElementById("number-1").value = N2 * dataExRub.rub.rub;
            alert("Выберите отличающиеся валюты");
            break;
          case "USD":
            document.getElementById("number-1").value = N2 * dataExRub.rub.usd;
            break;
          case "EUR":
            document.getElementById("number-1").value = N2 * dataExRub.rub.eur;
            break;
          case "TRY":
            document.getElementById("number-1").value = N2 * dataExRub.rub.try;
            break;
          case "CNY":
            document.getElementById("number-1").value = N2 * dataExRub.rub.cny;
            break;
        }
        break;
      case "USD":
        switch (Ex1) {
          case "RUB":
            document.getElementById("number-1").value = N2 * dataExUsd.usd.rub;
            break;
          case "USD":
            document.getElementById("number-1").value = N2 * dataExUsd.usd.usd;
            alert("Выберите отличающиеся валюты");
            break;
          case "EUR":
            document.getElementById("number-1").value = N2 * dataExUsd.usd.eur;
            break;
          case "TRY":
            document.getElementById("number-1").value = N2 * dataExUsd.usd.try;
            break;
          case "CNY":
            document.getElementById("number-1").value = N2 * dataExUsd.usd.cny;
            break;
        }
        break;
      case "EUR":
        switch (Ex1) {
          case "RUB":
            document.getElementById("number-1").value = N2 * dataExEur.eur.rub;
            break;
          case "USD":
            document.getElementById("number-1").value = N2 * dataExEur.eur.usd;
            break;
          case "EUR":
            document.getElementById("number-1").value = N2 * dataExEur.eur.eur;
            alert("Выберите отличающиеся валюты");
            break;
          case "TRY":
            document.getElementById("number-1").value = N2 * dataExEur.eur.try;
            break;
          case "CNY":
            document.getElementById("number-1").value = N2 * dataExEur.eur.cny;
            break;
        }
        break;
      case "TRY":
        switch (Ex1) {
          case "RUB":
            document.getElementById("number-1").value = N2 * dataExTry.try.rub;
            break;
          case "USD":
            document.getElementById("number-1").value = N2 * dataExTry.try.usd;
            break;
          case "EUR":
            document.getElementById("number-1").value = N2 * dataExTry.try.eur;
            break;
          case "TRY":
            document.getElementById("number-1").value = N2 * dataExTry.try.try;
            alert("Выберите отличающиеся валюты");
            break;
          case "CNY":
            document.getElementById("number-1").value = N2 * dataExTry.try.cny;
            break;
        }
        break;
      case "CNY":
        switch (Ex1) {
          case "RUB":
            document.getElementById("number-1").value = N2 * dataExCny.cny.rub;
            break;
          case "USD":
            document.getElementById("number-1").value = N2 * dataExCny.cny.usd;
            break;
          case "EUR":
            document.getElementById("number-1").value = N2 * dataExCny.cny.eur;
            break;
          case "TRY":
            document.getElementById("number-1").value = N2 * dataExCny.cny.try;
            break;
          case "CNY":
            document.getElementById("number-1").value = N2 * dataExCny.cny.cny;
            alert("Выберите отличающиеся валюты");
            break;
        }
        break;
    }
  }
}

let mass = new Array(21);
for (i = 0; i < 21; ++i) {
  mass[i] = new Array(3);
}
mass[0][0] = "Berlin";
mass[0][1] = "52.52";
mass[0][2] = "13.41";

mass[1][0] = "Paris";
mass[1][1] = "48.86";
mass[1][2] = "2.35";

mass[2][0] = "London";
mass[2][1] = "51.50";
mass[2][2] = "-0.13";

mass[3][0] = "Madrid";
mass[3][1] = "40.42";
mass[3][2] = "-3.70";

mass[4][0] = "Vienna";
mass[4][1] = "48.21";
mass[4][2] = "16.37";

mass[5][0] = "Brussels";
mass[5][1] = "50.84";
mass[5][2] = "4.37";

mass[6][0] = "Moscow";
mass[6][1] = "55.76";
mass[6][2] = "37.62";

mass[7][0] = "Sofia";
mass[7][1] = "42.71";
mass[7][2] = "23.32";

mass[8][0] = "Copenhagen";
mass[8][1] = "55.68";
mass[8][2] = "12.57";

mass[9][0] = "Athens";
mass[9][1] = "37.98";
mass[9][2] = "23.72";

mass[10][0] = "Budapest";
mass[10][1] = "47.50";
mass[10][2] = "19.04";

mass[11][0] = "Reykjavik";
mass[11][1] = "64.14";
mass[11][2] = "-21.90";

mass[12][0] = "Dublin";
mass[12][1] = "53.34";
mass[12][2] = "-6.27";

mass[13][0] = "Rome";
mass[13][1] = "41.90";
mass[13][2] = "12.48";

mass[14][0] = "Amsterdam";
mass[14][1] = "52.37";
mass[14][2] = "4.89";

mass[15][0] = "Oslo";
mass[15][1] = "59.91";
mass[15][2] = "10.74";

mass[16][0] = "Warsaw";
mass[16][1] = "52.23";
mass[16][2] = "21.01";

mass[17][0] = "Lisabon";
mass[17][1] = "38.71";
mass[17][2] = "-9.14";

mass[18][0] = "Bern";
mass[18][1] = "46.95";
mass[18][2] = "7.45";

mass[19][0] = "Kiev";
mass[19][1] = "50.44";
mass[19][2] = "30.54";

mass[20][0] = "Stockholm";
mass[20][1] = "59.33";
mass[20][2] = "18.07";

let a1 = "https://api.open-meteo.com/v1/forecast";
let a2 = "?latitude=";
let a3 = "&longitude=";
let a4 = "&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
async function weather() {
  let b = document.getElementById("select").value;
  let A5;
  if (b == -1) {
    document.getElementById("tempH").innerHTML = "N °C";
    document.getElementById("relaH").innerHTML = "N %";
    document.getElementById("windH").innerHTML = "N km/h";
  } else {
    A5 = a1 + a2 + mass[b][1] + a3 + mass[b][2] + a4;
    let respA = await fetch(A5);
    let dataA = await respA.json();
    let date = new Date();
    document.getElementById("tempH").innerHTML =
      dataA.hourly.temperature_2m[date.getHours()] + " °C";
    document.getElementById("relaH").innerHTML =
      dataA.hourly.relativehumidity_2m[date.getHours()] + " %";
    document.getElementById("windH").innerHTML =
      dataA.hourly.windspeed_10m[date.getHours()] + " km/h";
  }
}

async function weatherBut() {
  navigator.geolocation.getCurrentPosition(async function (position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let A5 = a1 + a2 + lat + a3 + lng + a4;
    let respA = await fetch(A5);
    let dataA = await respA.json();
    let date = new Date();
    document.getElementById("tempH").innerHTML =
      dataA.hourly.temperature_2m[date.getHours()] + " °C";
    document.getElementById("relaH").innerHTML =
      dataA.hourly.relativehumidity_2m[date.getHours()] + " %";
    document.getElementById("windH").innerHTML =
      dataA.hourly.windspeed_10m[date.getHours()] + " km/h";
  });
}
