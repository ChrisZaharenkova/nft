let slide = $('.saller__card'),
    slider = $('.saller__cards'),
    countSlide=slide.length,
    position=0,
    shag = 200,
    widthWindow = $('.slider').width(),
    max = (countSlide * 200) - widthWindow;
$('.next').click(function(){
  console.log('WindowWidth:'+widthWindow)
  console.log('Maximum:'+max)
  if(position == -max){
    position = 0;
    slider.css('left',position+'px');
  }else{
    position=position-shag;
    slider.css('left',position + 'px');
  }
});
$('.prev').click(function(){
  if(position == 0){
    position = -max;
    slider.css('left',position+'px');
  }else{
    position = position + shag;
    slider.css('left',position+'px');
  }
});


//плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
