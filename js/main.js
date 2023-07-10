

/*================ home-bunner-slider =================*/

$('.home-bunner__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots:true,
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',

});

/*-------------скрыть блок header__ticker-----------*/


const button = document.querySelector('#off')

const content = document.querySelector('#content')


button.addEventListener('click',function(){

	content.classList.toggle('header__ticker-hidden')
})


/*================ home-bunner-slider =================*/

$('.popular-categori__slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrow:true,
  dots:false,
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',

});

/*================ home-bunner-slider =================*/

$('.brends__slider').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrow:true,
  dots:false,
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',

});


$('.recently__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrow:true,
  dots:false,
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',

});


/*====================  Calc  =====================*/

let $calc = $('.calc');

$('body').click(function (event) { 
  let $t = $(event.target);
  if (event.target.className == 'button-calc') { 
    let sign = event.target.value;
    let $wrapper = $(event.target).closest('.calc'), 
      $amount = $wrapper.find('.amount'), 
      amountInit = parseInt($wrapper.find('.amount-init').html()), 
      finalAmount = parseInt($amount.html()), 
      $qty = $wrapper.find('.qty'), 
      qty = parseInt($qty.html());
    if (sign == '-') { 
      finalAmount = parseInt($amount.html()) - amountInit;
      qty--;
    } else {
      finalAmount = parseInt($amount.html()) + amountInit;
      qty++;
    }
    $amount.html((finalAmount < amountInit) ? amountInit : finalAmount); 
    $qty.html((qty < 1) ? 1 : qty);
  }
  
});


/*=================== mega-menu =========================*/

function megaMenu(selector){
	let menu = $(selector);
	let button = $('.catalog__btn');
	let links = $('.menu__hidden-link');
	let overlay =$('.overlay');

	button.on('click',(e)=>{
		e.preventDefault();
		toggleMenu();
	});
	links.on('click',()=>toggleMenu());
	overlay.on('click',()=>toggleMenu());

	function toggleMenu(){
		overlay.toggleClass('overlay__active');
		menu.toggleClass('mega-menu__active');
	
	}
}
megaMenu('.mega-menu__wrap');


/*================ search =================*/

function searchMenu(selector){
	let menu = $(selector);
	let button = $('.search');
	let links = $('.search__list-link');
	let overlaySearch =$('.overlay__search');

	button.on('click',(e)=>{
		e.preventDefault();
		toggleMenu();
	});
	links.on('click',()=>toggleMenu());
	overlaySearch.on('click',()=>toggleMenu());

	function toggleMenu(){
		overlaySearch.toggleClass('overlay__search-active');
		menu.toggleClass('search__active');
		
	}
}
searchMenu('.search__list-wrap');


/*=====================================================
						home-nav
=======================================================*/


const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
  anchor.addEventListener('click',function(e){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID ).scrollIntoView({
      behavior:'smooth',
      block: 'start' 
    })
  })
}


/*=====================  collection-slider  =======================*/


$('.select-interer__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  fade: true,
  asNavFor: '.interier__slider-nav',
  
  
});

$('.interier__slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.select-interer__slider',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows:true,
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',
  
  
});

/*=====================  показать еще   =======================*/

$(document).ready(function(){
  $('.show-more__btn').click(function(){
    $('.cards__block-hidden').slideToggle(900, function(){
      if ($(this).is(':hidden')) {
        $('.show-more__btn').removeClass('show-more__btn-active');
      } else {
        $('.show-more__btn').addClass('show-more__btn-active');
      }             
    });
    return false;
  });
});
