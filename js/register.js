const elInput1 = document.querySelector(".input");
const elInput2 = document.querySelector(".input-2");
const elInput3 = document.querySelector(".input-3");
const elInput4 = document.querySelector(".input-4");
const elInput5 = document.querySelector(".input-5");
const elbtn = document.querySelector(".btn");
const elform = document.querySelector("#form");
const ellist = document.querySelector(".list");
const nameError1 = document.querySelector(".error");
const nameError2 = document.querySelector(".error2");
const nameError3 = document.querySelector(".error3");
const nameError4 = document.querySelector(".error4");
const nameError5 = document.querySelector(".error5");
const knopka = document.querySelector(".knopka");
let array = [];
let obj = {};

elform.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let inputvale = elInput1.value.trim();
  let ivalue = elInput2.value.trim();
  let iage = elInput3.value.trim();
  let login = elInput5.value.trim();
  let valueparol = elInput4.value.trim();

  if (inputvale !== "") {
    obj["ishchniismi"] = `${inputvale}`;
    obj["ishchi"] = `${ivalue}`;
    obj["ishchiyosh"] = `${iage}`;
    obj["login"] = `${login}`;
    obj["parol"] = `${valueparol}`;

    array.push(obj);
    localStorage.setItem("malumot", JSON.stringify(array));
  }
  inputvale.value = "";
  ivalue.value = "";
  iage.value = "";
  login.value = "";
  valueparol.value = "";

  render();
});

function render(name) {
  ellist.innerHTML = "";

  array.forEach((n) => {
    let neweelment = document.createElement("h2");
    neweelment.textContent = ` ism: ${n.ishchniismi}`;
    let neweelment2 = document.createElement("h2");
    neweelment2.textContent = ` lavozim: ${n.ishchi}`;
    let neweelment3 = document.createElement("h2");
    neweelment3.textContent = ` yosh: ${n.ishchiyosh}`;
    let neweelment5 = document.createElement("h2");
    neweelment5.textContent = ` logn: ${n.login} `;
    let neweelment4 = document.createElement("h2");
    neweelment4.textContent = `parol: ${n.parol}`;

    let delet = document.createElement("button");
    delet.textContent = "delete";
    delet.classList.add("delet");
    ellist.appendChild(neweelment);
    ellist.appendChild(neweelment2);
    ellist.appendChild(neweelment3);
   
    ellist.appendChild(delet);
    delet.addEventListener("click", () => {
      localStorage.removeItem("localkey");

      ellist.remove();
    });
  });

}


elInput1.addEventListener("input", (evt) => {
  const inputvalidator1 = evt.target.value;
  if (inputvalidator1.length <= 2) {
    nameError1.textContent = `ism 3 harftan kam`;
  } else {
    nameError1.textContent = "";
  }
});

elInput5.addEventListener("input", (evt) => {
  const inputvalidator2 = evt.target.value;
  if (inputvalidator2.length <= 5) {
    nameError2.textContent = ` login 6 ta harftan kam `;
  } else {
    nameError2.textContent = "";
  }
});

elInput3.addEventListener("input", (evt) => {
  const inputvalidator3 = evt.target.value;
  if (inputvalidator3.length <= 1) {
    nameError3.textContent = `yosh 10 dan past`;
  } else {
    nameError3.textContent = "";
  }
});

elInput2.addEventListener("input", (evt) => {
  const inputvalidator4 = evt.target.value;
  if (inputvalidator4.length <= 6) {
    nameError4.textContent = `last name 7 ta harftan kam`;
  } else {
    nameError4.textContent = "";
  }
});

elInput4.addEventListener("input", (evt) => {
  const inputvalidator = evt.target.value;
  if (inputvalidator.length <= 7) {
    nameError5.textContent = `parol 8 ta sondan kam`;
  } else {
    nameError5.textContent = "";
  }
});

knopka.addEventListener('change', () => {
    if (knopka.checked) {
        elInput4.type = 'password';
    } else {
        elInput4.type = 'text';
    }
  });

  elform.addEventListener('submit', (evt) => {
    if(elInput4.value === elInput5.value){
        ellist = ""
    }else{

    }
  })