const langs = document.querySelectorAll('.lang-link'),
wishBtn = document.querySelectorAll('.wishlist-btn'),
cartTableItem = document.querySelectorAll('.cart-table__item'),
removeItem = document.querySelectorAll('.cart-table__item-remove > a');

if (langs) {

	for (let i = 0; i < langs.length; i++) {
		langs[i].addEventListener('click', function(e){
			e.preventDefault();
			for (let index = 0; index < langs.length; index++) {
				langs[index].classList.remove('active');
			}
			langs[i].classList.add('active');
		});
	}
}


if (wishBtn) {
	for (let i = 0; i < wishBtn.length; i++) {
		wishBtn[i].addEventListener('click', function(e) {
			e.preventDefault();
			wishBtn[i].classList.toggle('wishlist__btn--active');
		});
	}
}

if (removeItem) {
	for (let i = 0; i < removeItem.length; i++) {
		removeItem[i].addEventListener('click', function(e) {

			e.preventDefault();
			for (let k = 0; k < cartTableItem.length; k++) {
				console.log(cartTableItem[k]);
				// cartTableItem[k].style = 'display: none !important';
			}
		});
	}
}



$(document).ready(function () {

	$('.header-menu__category').click(function (event) {
		// event.preventDefault()
		$('.header__nav').toggleClass('active-menu')
		$('.header').toggleClass('invert')
		$('body').toggleClass('lock')
	});


	$(document).mouseup(function (e) {
		// event.preventDefault()
		var $target = $(e.target);
		if ($target.closest('.header__nav').length == 0 && $target.closest('.header-menu__category').length == 0) {
			$('.header__nav').removeClass('active-menu');
			$('.header').removeClass('invert')
			$('body').removeClass('lock')
		}
	});


	$(function () {

		(function quantityProducts() {
			var $quantityArrowMinus = $(".quantity-arrow-minus");
			var $quantityArrowPlus = $(".quantity-arrow-plus");
			var $quantityNum = $(".quantity-num");

			$quantityArrowMinus.click(quantityMinus);
			$quantityArrowPlus.click(quantityPlus);

			function quantityMinus() {
				if ($quantityNum.val() > 1) {
					$quantityNum.val(+$quantityNum.val() - 1);
				}
			}

			function quantityPlus() {
				$quantityNum.val(+$quantityNum.val() + 1);
			}
		})();

	});

	if ($('.slider-for').length) {
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
			autoplay: false,
			infinite: false
		});
	};

	if ($('.slider-nav').length) {
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			centerMode: true,
			vertical: true,
			focusOnSelect: true,
			responsive: [
	
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						asNavFor: '.slider-for',
						vertical: false
					}
				},
	
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						asNavFor: '.slider-for',
						vertical: false
					}
				}
			]
	
	
		});	
	};

	if ($('.other-product__slider').length) {
		$('.other-product__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
	
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
	
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});	
	};

	

	if($("#tabs").length) {
		$(function () {
			$("#tabs").tabs();
		});
	};

	if ($("#datepicker").length) {
		$(function () {
			$("#datepicker").datepicker({
				showOn: "button",
				buttonImage: "./img/icons/calendar-icon.png",
				buttonImageOnly: true,
				buttonText: "Select date"
			});
		});
	};
});










