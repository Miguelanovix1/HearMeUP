//animacion navbar
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');
  
  
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav__active');
  
  
      navLinks.forEach((link, index) => {
  
        if (link.style.animation) {
          link.style.animation = '';
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.4}s`;
        }
      });
      //animacion barras
      burger.classList.toggle('toggle');
    });
  
  }
  
  navSlide();
  
  var comp = 1;
  //animacion redes navbar
  const redesnavSlide = () => {
  
    const glove = document.querySelector('.glove');
    const redesnavlarge = document.querySelector('.redesnav__large');
    const redesnavLinks = document.querySelectorAll('.redesnav__large li');
    const main = document.querySelector('main');
  
  
  
  
    glove.addEventListener('click', () => {
      redesnavlarge.classList.toggle('redesnav__active');
      main.classList.toggle('main__active');
  
  
  
      redesnavLinks.forEach((link, index) => {
  
        if (link.style.animation) {
          link.style.animation = '';
        }else{
          link.style.animation = `redesnavLinkFade 0.5s ease forwards  ${index / 7 + 0.4}s`;
        }
      });
    });
  
  
  
  
  
  }
  
  redesnavSlide();
  
  
  
  
  function cambioclases() {
    const main = document.querySelector('main');
    const redesnavlarge = document.querySelector('.redesnav__large');
  
  
    if (window.innerWidth < 900 && main.classList.contains( 'main__active') && redesnavlarge.classList.contains( 'redesnav__active')) {
  
      main.classList.remove('main__active');
      redesnavlarge.classList.remove('redesnav__active');
      comp = 0;
    }else if(window.innerWidth > 900 ){
  
      if( main.classList.contains('main__active') && redesnavlarge.classList.contains('redesnav__active')){
        comp = 1;
      }else if(comp != 1){
        main.classList.add('main__active');
        redesnavlarge.classList.add('redesnav__active');
      }
    }
  }
  
  window.onresize = cambioclases;
  