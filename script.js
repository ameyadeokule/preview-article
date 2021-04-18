const btnShare = document.querySelector('.button-area')
const share = document.querySelector('.share')
const arrow = document.querySelector('.arrow')

const originalBtnColor = btnShare.style.backgroundColor
const originalArrowColor = arrow.style.fill

btnShare.addEventListener('click', () => {
	share.classList.toggle('active')

	if (window.innerWidth <= 800 && share.classList.contains('active')) {
		btnShare.style.background = 'hsl(212, 23%, 69%)'
		arrow.style.fill = 'hsl(210, 46%, 95%)'
	} else {
		btnShare.style.background = originalBtnColor
		arrow.style.fill = originalArrowColor
	}
})
