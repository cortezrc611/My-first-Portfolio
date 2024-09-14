function typeWriter(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Call the typewriter function for each element
typeWriter(document.getElementById('typewriter-h1'), "I'M ROLLY", 100);
typeWriter(document.getElementById('typewriter-h2'), "HELLO", 100);
typeWriter(document.getElementById('typewriter-h3'), "FULLSTACK DEVELOPER", 100);
typeWriter(document.getElementById('typewriter-p'), "I'm a versatile full-stack developer proficient in both front-end and back-end technologies,", 10);
typeWriter(document.getElementById('typewriter-p2'), "passionate about crafting seamless digital experiences from concept to deployment.", 10);
typeWriter(document.getElementById('typewriter-p3'), "I'm Engr. Rolly S. Cortez: I'm a passionate software developer with a deep love for technology and", 10);
typeWriter(document.getElementById('typewriter-p4'), "with a good understanding of data structures and algorithms. With several years of experience in the field,", 10);
typeWriter(document.getElementById('typewriter-p5'), "I always improving my skills in coding, debugging, and designing efficient and user-friendly", 10);
typeWriter(document.getElementById('typewriter-p6'), "software or web applications.", 10);
typeWriter(document.getElementById('typewriter-p7'), "I operate best in group settings when there is open communication and a strong emphasis", 10);
typeWriter(document.getElementById('typewriter-p8'), "on teamwork to accomplish objectives. Because I have experience with a variety of programming languages", 10);
typeWriter(document.getElementById('typewriter-p9'), "and frameworks, I can adjust to new problems. and continue to lead the rapidly changing tech industry.", 10);
typeWriter(document.getElementById('typewriter-p10'), "Also, I'm committed to lifelong learning and keeping up with the most recent", 10);
typeWriter(document.getElementById('typewriter-p11'), "industry trends to produce state-of-the-art software that surpasses expectations.", 10);
typeWriter(document.getElementById('typewriter-p12'), "I'm dedicated to creating web applications, mobile apps, and intricate backend systems.", 10);
typeWriter(document.getElementById('typewriter-p13'), "to providing creative, scalable, and high-quality solutions that have a beneficial effect.", 10);
typeWriter(document.getElementById('typewriter-p14'), "Lastly, on the outside of the coding. I always enjoy staying active, exploring the great outdoors, and nurturing my", 10);
typeWriter(document.getElementById('typewriter-p15'), "creative side through various hobbies. Let's connect and collaborate to turn your software dreams into reality!", 10);
function fadeInImage(element, delay) {
    setTimeout(() => {
        element.classList.add('show');
    }, delay);
}

// Call the fadeInImage function for each icon one by one
fadeInImage(document.getElementById('fb-icon'), 1000); // Delay the appearance of the first icon by 1000 milliseconds (1 second)
fadeInImage(document.getElementById('instagram-icon'), 1500); // Delay the appearance of the second icon by 2000 milliseconds (2 seconds)
fadeInImage(document.getElementById('linkedin-icon'), 2000); // Delay the appearance of the third icon by 3000 milliseconds (3 seconds)
fadeInImage(document.getElementById('upwork-icon'), 2500); // Delay the appearance of the fourth icon by 4000 milliseconds (4 seconds)

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.scroll');
    const navLinks = document.querySelectorAll('header a');

    sections.forEach((section, index) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.clientHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach((link) => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

// Add scroll event listener to update active navigation link
window.addEventListener('scroll', updateActiveNavLink);

// Initial call to set the active link on page load
updateActiveNavLink();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.scroll');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach((section, index) => {
      const top = section.offsetTop - 150;
      const bottom = top + section.clientHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
          navLinks.forEach((link) => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }
  });
}

// Add scroll event listener to update active navigation link
window.addEventListener('scroll', updateActiveNavLink);

// Initial call to set the active link on page load
updateActiveNavLink();

function toggleMenu() {
  document.querySelector('.header').classList.toggle('active');
}