document.addEventListener('DOMContentLoaded', function () {
	var nut = document.querySelectorAll('.chuyentrang ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	// bắt sự kiện của từng nút
	var thoigian = setInterval(function () {
		autoSlide();
	}, 4000);

	for (var i = 0; i < nut.length; i++) {

		nut[i].addEventListener('click', function () {

			clearInterval(thoigian);
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');

			// xử lí phần tính vị trí

			var nutkichhoat = this;
			// console.log(nutkichhoat);
			// console.log(nutkichhoat.previousElementSibling);
			var vitrinut = 0;
			for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) { }
			// console.log(vitrinut);
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
			}
			// slides[vitrinut].classList.add('active');

			// console.log('vi tri cua phan tu co class kich hoat la ' + vitrinut);
		});
	}
	// hết sự kiện cho nút



	function autoSlide() {
		// viết hàm tự chuyển slides

		var slideHienTai = document.querySelector('.cacslide ul li.active');
		// console.log(slideHienTai);
		// console.log(slideHienTai.previousElementSibling);
		var vitrislide = 0;
		for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling; vitrislide++) {

		}
		if (vitrislide < (slides.length - 1)) {
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slides[vitrislide].nextElementSibling.classList.add('active');
			nut[vitrislide].nextElementSibling.classList.add('kichhoat');
		}
		else {
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slides[0].classList.add('active');
			nut[0].classList.add('kichhoat');
		}
	}



}, false);