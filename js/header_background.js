const scrollHeader = () => {
	const header = document.getElementById('header')
	// When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
	this.scrollY >= 50 ? header.classList.add('bg_header')
					   : header.classList.remove('bg_header')
}
window.addEventListener('scroll', scrollHeader)