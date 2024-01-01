const arrow = document.getElementById('arrow')

arrow.addEventListener('click', ()=> {
  window.location.href = '../../home/index.html'
})



const rooms = document.querySelectorAll('.rooms')

rooms.forEach(i => {  
  i.addEventListener('click', () => {
    window.location.href = 'phone_popup.html'
    });
  });

