"use strict";

// XÁC THỰC EMAIL ĐỂ XEM THÔNG TIN

const infoDisplayEl = document.querySelector(".info-display");
const emailDisplayEl = document.querySelector(".email-display");
const submitInputEl = document.querySelector(".submit");
const emailInputEl = document.getElementById("email");
const labelEl = document.querySelector(".label");

let emailError = true;

const init = function () {
  emailError = true;
  infoDisplayEl.classList.add("hidden");
};

init();

submitInputEl.addEventListener("click", function () {
  if (emailError) {
    let emailValue = emailInputEl.value;
    let regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValue == "") {
      alert("Email không được để trống");
    } else if (!regex.test(emailValue)) {
      alert("Email không đúng định dạng");
    } else if (regex.test(emailValue)) {
      emailError = false;
      emailDisplayEl.classList.add("hidden");
      infoDisplayEl.classList.remove("hidden");
    }
  }
});

// CHỨC NĂNG ẨN THÔNG TIN NGHỀ NGHIỆP
// KINH NGHIEM

const btnMoreExp = document.querySelector("#btnmore-exp");
const btnLessExp = document.querySelector("#btnless-exp");
const ulExp = document.querySelector(".ul-exp");
const expEl = document.querySelector(".exp");

// HOC VAN

const btnMoreEdu = document.querySelector("#btnmore-edu");
const btnLessEdu = document.querySelector("#btnless-edu");
const ulEdu = document.querySelector(".ul-edu");
const eduEl = document.querySelector(".edu");

// HOAT DONG

const btnMoreAct = document.querySelector("#btnmore-act");
const btnLessAct = document.querySelector("#btnless-act");
const ulAct = document.querySelector(".ul-act");
const actEl = document.querySelector(".act");

// SO THICH
const btnMoreHob = document.querySelector("#btnmore-hob");
const btnLessHob = document.querySelector("#btnless-hob");
const divHob = document.querySelector(".div-hob");
const hobEl = document.querySelector(".hob");

// NGON NGU

const btnMoreLang = document.querySelector("#btnmore-lang");
const btnLessLang = document.querySelector("#btnless-lang");
const divLang = document.querySelector(".div-lang");
const langEl = document.querySelector(".lang");

// KY NANG

const btnMoreSkill = document.querySelector("#btnmore-skill");
const btnLessSkill = document.querySelector("#btnless-skill");
const divSkill = document.querySelector(".div-skill");
const skillEl = document.querySelector(".skill");

// HAM DISPLAY

const actionEl = function (moreEl, lessEl, textEl, containerEl) {
  let online = true;
  moreEl.classList.add("hidden");
  containerEl.classList.add("hidden");
  lessEl.classList.add("hidden");

  textEl.addEventListener("mouseover", function () {
    if (online) {
      moreEl.classList.remove("hidden");
    }
  });

  moreEl.addEventListener("click", function () {
    moreEl.classList.add("hidden");
    containerEl.classList.remove("hidden");
    lessEl.classList.remove("hidden");
    online = false;
  });

  lessEl.addEventListener("click", function () {
    moreEl.classList.remove("hidden");
    containerEl.classList.add("hidden");
    lessEl.classList.add("hidden");
    online = true;
  });
};

actionEl(btnMoreExp, btnLessExp, expEl, ulExp); //KINH NGHIEM
actionEl(btnMoreEdu, btnLessEdu, eduEl, ulEdu); //HOC VAN
actionEl(btnMoreAct, btnLessAct, actEl, ulAct); //HOAT DONG
actionEl(btnMoreHob, btnLessHob, hobEl, divHob); //SO THICH
actionEl(btnMoreLang, btnLessLang, langEl, divLang); //NGON NGU
actionEl(btnMoreSkill, btnLessSkill, skillEl, divSkill); //KY NANG
