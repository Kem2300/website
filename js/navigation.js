/* ========== SHOW MENU ========== */
const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')

/* ========== MENU SHOW ========== */
/* Validate if constant exists */
if(navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show_menu')
	})
}

/* ========== MENU HIDDEN ========== */
/* Validate if constant exists */
if(navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show_menu')
	})
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav_link, we remove the show_menu
	navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))