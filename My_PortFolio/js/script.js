
document.addEventListener('DOMContentLoaded', () => {
    const textArray = ['Web Dev', 'Machine Learning','Cyber Sec'];
    const typingText = document.querySelector('.typing-text');
    let index = 0;
    let charIndex = 0;

    function typeLetter() {
        if (charIndex < textArray[index].length) {
            typingText.textContent += textArray[index][charIndex];
            charIndex++;
            setTimeout(typeLetter, 100); // type speed
        } else {
            setTimeout(() => {
                deleteText();
            }, 1000); // Time to wait before starting to delete
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteText, 100); // Speed of deletion
        } else {
            index = (index + 1) % textArray.length;
            typingText.style.width = '0'; // Reset width for new text
            setTimeout(() => {
                typingText.style.width = typingText.scrollWidth + 'px'; // Set width to fit new text
                typeLetter();
            }, 10); // Time to wait before starting to type new text
        }
    }

    typingText.style.width = typingText.scrollWidth + 'px'; 
    typeLetter();
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);
});

// Scroll sections active link and animation
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    
}
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const percentage = bar.querySelector('h3 span').textContent;
        const progressBar = bar.querySelector('.bar span');
        progressBar.style.setProperty('--progress-width', percentage);
    });
});




let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;



const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);

