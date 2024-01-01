USER_ID = "996033663905-el28l4namd95bv3ske0478e7b806h6bv.apps.googleusercontent.com"

  // 1.arrow 를 저ㅓㅓㅓ기 HTML에서 요소 갖고 와서 변수로 쓰고
  // 2. 그거 누르면 :
  // 3. 방 예약 (room.html)로 가게 하셈
  // (근데 그 링크를 URL이 아니라 파일 주소로 하세요. 
  //URL : https://..... 파일 주소: 뭐시기/뭐시기/워시기/.html 이런 거) 냅

//JS 변수에 html id 저장
const arrow_click = document.getElementById('arrow')

//클릭에 반응하는 기능

arrow_click.addEventListener('click', function() {
  if (window.innerWidth < 768) {
    window.location.href = '../rooms/phone/phone.html'
  } else {
    window.location.href = '../rooms/room.html'; //상대주소; relative path
  }
})
