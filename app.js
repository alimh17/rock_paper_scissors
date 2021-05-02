//variables

let Systemcount = 1;
let Usercount = 1;

const result = document.querySelector("#result");

//Listeners

Listeners();

function Listeners() {
  document.querySelector(".paper").addEventListener("click", PaperSelected);
  document.querySelector(".rock").addEventListener("click", RockSelected);
  document
    .querySelector(".scissors")
    .addEventListener("click", scissorsSelected);
}

function SystemWin() {
  let div = document.createElement("div");
  div.id = "sysWin";
  div.classList.add("alert", "alert-danger", "text-center");
  div.textContent = "کامپیوتر قیچی و شما کاغذ انتخاب کردید ، شما باختید";

  document.querySelector("#result").appendChild(div);
}
function UserWin() {
  let div = document.createElement("div");
  div.id = "userWin";
  div.classList.add("alert", "alert-success", "text-center");
  div.textContent = "کامپیوتر سنگ و شما کاغذ انتخاب کردید ، شما بردید";

  result.appendChild(div);
}
function EqulRes() {
  let div = document.createElement("div");
  div.id = "equlres";
  div.classList.add("alert", "alert-warning", "text-center");
  div.textContent = "کامپیوتر هم کاغذ انتخاب کرد ، بدون برنده";

  document.querySelector("#result").appendChild(div);
}

function RemoveRes() {
  setTimeout(() => {
    result.children[0].remove();
  }, 3000);
}

function SystemRandomSelect() {
  let Random = Math.floor(Math.random() * 3) + 1;

  return Random;
}

function PaperSelected() {
  let Random = SystemRandomSelect();

  if (Random > 2) {
    document.querySelector("#systemPoint").textContent = Systemcount;
    Systemcount++;
    SystemWin();
    RemoveRes();
  } else if (Random === 2) {
    EqulRes();
    RemoveRes();
  } else if (Random < 2) {
    document.querySelector("#userPoint").textContent = Usercount;
    Usercount++;
    UserWin();
    RemoveRes();
  }
}

function RockSelected() {
  let Random = SystemRandomSelect();
  if (Random > 2) {
    document.querySelector("#systemPoint").textContent = Systemcount;
    Systemcount++;
    SystemWin();
    document.querySelector("#sysWin").textContent =
      "کامپیوتر کاغذ و شما سنگ انتخاب کردید ، شما باختید";
    RemoveRes();
  } else if (Random === 2) {
    EqulRes();
    document.querySelector("#equlres").textContent =
      "کامپیوتر هم سنگ انتخاب کرد ، بدون برنده";
    RemoveRes();
  } else if (Random < 2) {
    document.querySelector("#userPoint").textContent = Usercount;
    Usercount++;
    UserWin();
    document.querySelector("#userWin").textContent =
      "کامپیوتر قیچی و شما سنگ انتخاب کردید ، شما بردید";
    RemoveRes();
  }
}

function scissorsSelected() {
  let Random = SystemRandomSelect();
  if (Random > 2) {
    document.querySelector("#systemPoint").textContent = Systemcount;
    Systemcount++;
    SystemWin();
    document.querySelector("#sysWin").textContent =
      "کامپیوتر سنگ و شما قیچی انتخاب کردید ، شما باختید";
    RemoveRes();
  } else if (Random === 2) {
    EqulRes();
    document.querySelector("#equlres").textContent =
      "کامپیوتر هم قیچی انتخاب کرد ، بدون برنده";
    RemoveRes();
  } else if (Random < 2) {
    document.querySelector("#userPoint").textContent = Usercount;
    Usercount++;
    UserWin();
    document.querySelector("#userWin").textContent =
      "کامپیوتر کاغذ و شما قیچی انتخاب کردید ، شما بردید";
    RemoveRes();
  }
}
