const arrow = document.getElementById('arrow')
arrow.addEventListener('click', ()=> {
  window.location.href = '../home/index.html';
})

const rooms = document.querySelectorAll('.grid-element')
rooms.forEach(room => {
  
  room.addEventListener('click', () => {

        let windowFeatures = 'width=490,height=500,left=50%,right=50%';
        let url = 'popups/index.html';

        if (window.innerWidth >= 600 && window.innerWidth < 1181) {
          window.open("tabletPopup/tablet.html")
        } else {
          window.open(url, '방 예약', windowFeatures);
          console.log(`the room name is ${room.textContent}`)
        }
          let roomNumber = room.textContent;
          localStorage.setItem(`roomNumber`, `${roomNumber}`);
    });
  });



const fourthFloor = document.getElementById("fourth-floor");
const fifthFloor = document.getElementById("fifth-floor");
const floorNumber = document.querySelectorAll(".floor-number");
let currentFloor = 4;

fourthFloor.addEventListener('click', ()=> {
  currentFloor = 4;
  
  floorNumber.forEach(floorNumber => {
    floorNumber.textContent = "4"
  });
})

fifthFloor.addEventListener('click', ()=> {
  currentFloor = 5;
  floorNumber.forEach(floorNumber => {
    floorNumber.textContent = "5"
  });
})

const sideMenuBar = document.querySelectorAll(".side-menu-bar")


sideMenuBar.forEach(element => {
  element.addEventListener("click", ()=>{
    if (currentFloor == 4) {
      fourthFloor.style.transform = "translateX(-15px)"
      fourthFloor.style.backgroundColor = "#FFD362"

      fifthFloor.style.transform = "translateX(0)"
      fifthFloor.style.backgroundColor = "rgb(222, 222, 222)"
    } else if (currentFloor == 5) {
      fifthFloor.style.transform = "translateX(-15px)"
      fifthFloor.style.backgroundColor = "#FFD362"

      fourthFloor.style.transform = "translateX(0)"
      fourthFloor.style.backgroundColor = "rgb(222, 222, 222)"
    }
  })
})


fourthFloor.addEventListener('mouseover', ()=>{
  if (currentFloor !== 4) {
    fourthFloor.style.backgroundColor = "rgb(195, 193, 193)"
  }
})

fourthFloor.addEventListener('mouseout', ()=>{
  if (currentFloor !== 4) {
    fourthFloor.style.backgroundColor = "rgb(222, 222, 222)"
  }
})

fifthFloor.addEventListener('mouseover', ()=>{
  if (currentFloor !== 5) {
    fifthFloor.style.backgroundColor = "rgb(195, 193, 193)"
  }
})

fifthFloor.addEventListener('mouseout', ()=>{
  if (currentFloor !== 5) {
    fifthFloor.style.backgroundColor = "rgb(222, 222, 222)"
  }
})



const upArrow = document.querySelector("#up-arrow")
const downArrow = document.querySelector("#down-arrow")


downArrow.addEventListener('click', ()=> {
  currentFloor = 4;
  
  floorNumber.forEach(floorNumber => {
    floorNumber.textContent = "4"
  });
})

upArrow.addEventListener('click', ()=> {
  currentFloor = 5;
  floorNumber.forEach(floorNumber => {
    floorNumber.textContent = "5"
  });
})

const triangles = document.querySelectorAll(".triangle")


triangles.forEach(element => {
  element.addEventListener("click", ()=>{
    if (currentFloor == 4) {
      fourthFloor.style.transform = "translateX(-15px)"
      fourthFloor.style.backgroundColor = "#FFD362"

      fifthFloor.style.transform = "translateX(0)"
      fifthFloor.style.backgroundColor = "rgb(222, 222, 222)"
    } else if (currentFloor == 5) {
      fifthFloor.style.transform = "translateX(-15px)"
      fifthFloor.style.backgroundColor = "#FFD362"

      fourthFloor.style.transform = "translateX(0)"
      fourthFloor.style.backgroundColor = "rgb(222, 222, 222)"
    }
  })
})
