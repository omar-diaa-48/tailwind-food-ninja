const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');

const navIcons = document.querySelectorAll('.nav-icon')

burger.addEventListener('click', () => {
	if(menu.classList.contains('hidden')){
		menu.classList.remove('hidden')
	}else{
		menu.classList.add('hidden')
	}
})

navIcons.forEach((navIcon) => {
	navIcon.addEventListener('click', () => {
		navIcons.forEach((navIcon) => {
			navIcon.classList.remove('selected')
		})

		if(navIcon.classList.contains('selected')){
			navIcon.classList.remove('selected')
		}else{
			navIcon.classList.add('selected')
		}
	})
})