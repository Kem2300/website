const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/* ========== SHOW MENU ========== */
const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close'),
	  overlay = document.querySelector("[data-overlay]");

/* ========== MENU SHOW ========== */
/* Validate if constant exists */
if(navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show_menu')
		overlay.classList.add("active")
	})
}

/* ========== MENU HIDDEN ========== */
/* Validate if constant exists */
if(navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show_menu')
		overlay.classList.remove("active")
	})
}

/* Gets rid of overlay when clicking on a link in the nav */
const closeOverlay = function () {
  overlay.classList.remove("active");
}

addEventOnElem(navMenu, "click", closeOverlay);

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav_link, we remove the show_menu
	navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== SHOW BG HEADER WHEN SCROLLING DOWN ========== */
const scrollHeader = () => {
	const header = document.getElementById('header')
	// When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
	this.scrollY >= 1? header.classList.add('bg_header')
					   : header.classList.remove('bg_header')
}
window.addEventListener('scroll', scrollHeader)

/* ========== SHOW ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollY = window.pageYOffset
	
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
			
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active_link')
		} else {
			sectionsClass.classList.remove('active_link')
		}
	})
}

window.addEventListener('scroll', scrollActive)


/**
 * header & back top btn show when scroll down to 100px
 */


const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

function openForm() {
  	document.getElementById("ContactForm").style.display = "block";
  	navMenu.classList.remove('show_menu');
  	overlay.classList.remove("active");
}

function closeForm() {
  document.getElementById("ContactForm").style.display = "none";
}

