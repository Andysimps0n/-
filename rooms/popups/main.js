const roomNumber = localStorage.getItem('roomNumber');
const roomNumberShown = document.getElementById("room-number");

roomNumberShown.textContent = roomNumber

const close = document.querySelector('#close')
close.addEventListener('click', ()=> {
  window.close()
});


const days = document.querySelectorAll(".side-menu-bar");
let previousDay = null;

days.forEach((element) => {
    element.addEventListener('click', function() {
        if (previousDay !== null) {
            previousDay.style.backgroundColor = 'rgb(222, 222, 222)';
            previousDay.style.transform = 'translateX(0px)';
        }
        element.style.backgroundColor = '#FFD362';
        element.style.transform = "translateX(-10px)";
        previousDay = element;
    });
});
