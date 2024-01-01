const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

const now = new Date();
const dayOfWeek = now.getDay();
const currentDay = daysOfWeek[dayOfWeek];

const 월요일 = document.querySelector("#monday")
const 화요일 = document.querySelector("#tuesday")
const 수요일 = document.querySelector("#wensday")
const 목요일 = document.querySelector("#thursday")

days = [월요일, 화요일, 수요일, 목요일];

if ((dayOfWeek > 0) && (dayOfWeek < 5)) {
  days[dayOfWeek-1].style.backgroundColor = "#fedb83"
  let today = days[dayOfWeek-1].textContent
}

const week = document.querySelectorAll(".week");
let previousDay = null;

week.forEach(element => {
  element.addEventListener("click", ()=>{
  })
});

document.querySelector("#arrow").addEventListener('click',()=>{
  window.location.href = "../room.html"
})



const roomNumber = localStorage.getItem('roomNumber'); //import clicked room number