// Add your code here

$(document).ready(function(){
    $('.slide').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 3,
slidesToScroll: 3,
 autoplay: true,
autoplaySpeed: 3000,
prevArrow:'<div class="prevBtn"><img src="https://github.com/SoneaV/nws/blob/main/img/PrevW.png?raw=true"></div>',
nextArrow:'<div class="nextBtn"><img src="https://github.com/SoneaV/nws/blob/main/img/NextW.png?raw=true"></div>',
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
    });
  });

//Reveal Questions code

let plus = document.getElementsByClassName('revealBtn'),
  min = document.getElementsByClassName('hideBtn'),

  p0 = document.getElementById('answ_00'),
  p1 = document.getElementById('answ_01'),
  p2 = document.getElementById('answ_02'),
  p3 = document.getElementById('answ_03');
  p4 = document.getElementById('answ_04');
  

function openText(p, classKey) {
plus[classKey].addEventListener('click', function() {
  p.style.display = 'block';
  plus[classKey].style.display = 'none';
  min[classKey].style.display = 'block';
});
min[classKey].addEventListener('click', function(){
  p.style.display = 'none';
  plus[classKey].style.display = 'block';
  min[classKey].style.display = 'none';
})
}

openText(p0, 0);
openText(p1, 1);
openText(p2, 2);
openText(p3, 3);
openText(p4, 4);
      