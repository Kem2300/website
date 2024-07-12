// script.js

// Select elements from the DOM
const menuToggle = document.getElementById('mobile-menu'); // Mobile menu toggle button
const navList = document.querySelector('.nav-list'); // Navigation list container
const navLinks = document.querySelectorAll('.nav-list li a'); // Navigation links
const navbar = document.getElementById('navbar'); // Navbar element
const sections = document.querySelectorAll('section'); // All sections in the document
const scrollToTopButton = document.querySelector('.scroll-to-top'); // Scroll-to-top button
const overlay = document.createElement('div'); // Create overlay for mobile menu

overlay.className = 'overlay'; // Assign class name for styling
document.body.appendChild(overlay); // Append overlay to body

// Function to toggle navbar visibility based on scroll position
function toggleNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('visible'); // Show navbar when scrolling down
        scrollToTopButton.style.display = 'block'; // Show scroll-to-top button
    } else {
        navbar.classList.remove('visible'); // Hide navbar when at the top
        scrollToTopButton.style.display = 'none'; // Hide scroll-to-top button
    }
}

toggleNavbar(); // Toggle navbar initially
window.addEventListener('scroll', toggleNavbar); // Toggle navbar on scroll

// Handle click on mobile menu toggle button
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle active class for navigation list
    menuToggle.classList.toggle('open'); // Toggle open class for menu toggle button
    document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
    overlay.classList.toggle('active'); // Toggle overlay for mobile menu
});

// Handle click on navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get section id without '#'
        const targetSection = document.getElementById(targetId);
        const offset = navbar.offsetHeight; // Adjust for fixed navbar height
        const targetPosition = targetId === 'hero' ? 0 : targetSection.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' }); // Smooth scroll to section

        // Close menu and remove overlay
        navList.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.classList.remove('no-scroll');
        overlay.classList.remove('active');
    });
});

// Function to scroll to top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top

    // Close menu and remove overlay
    navList.classList.remove('active');
    menuToggle.classList.remove('open');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('active');
}

// Function to highlight current section in navigation
function highlightCurrentSection() {
    let fromTop = window.scrollY + navbar.offsetHeight + 1; // Adjust for fixed navbar height and offset
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (fromTop >= sectionTop && fromTop <= sectionTop + sectionHeight) {
            // Highlight corresponding navigation link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Remove overlay when user scrolls to top of the page
    if (window.scrollY === 0) {
        overlay.classList.remove('active');
    }
}

window.addEventListener('scroll', highlightCurrentSection); // Highlight current section on scroll

// Event listener for Home link in navbar
const homeLink = document.querySelector('.nav-list li:first-child a'); // Assuming Home link is the first link
homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToTop(); // Scroll to top function
});

// Add event listener to close menu when scrolling to the top of the page
window.addEventListener('scroll', () => {
    if (window.scrollY === 0 && navList.classList.contains('active')) {
        // If at the top and menu is active, close menu and remove overlay
        navList.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.classList.remove('no-scroll');
        overlay.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get "Get More Leads" button
    const heroButton = document.querySelector('.hero-btn');
    
    // Add click event listener
    heroButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        // Get target section
        const contactSection = document.querySelector('#contact');
        
        // Calculate offset
        const offsetTop = contactSection.offsetTop - 90; // Adjust as necessary
        
        // Scroll to section
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Show the success popup
    document.getElementById('success-popup').style.display = 'block';

    // Clear the form
    document.getElementById('contact-form').reset();
}

function closePopup() {
    // Hide the success popup
    document.getElementById('success-popup').style.display = 'none';
}


