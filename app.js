/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function screollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY>=80)header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll',screollHeader);
/*==================== SHOW SCROLL UP ====================*/
function screollUp(){
    const scrollup=document.getElementById('scroll-up');
    if(this.scrollY>=350)scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll',screollUp);
/*==================== ABOUT TABS ====================*/
const tabs=document.querySelectorAll('[data-target]');
const tabsContent=document.querySelectorAll('[data-content]');
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
        tabsContent.forEach(tabContent=>{
            tabContent.classList.remove('tab__active');
        });
        target.classList.add('tab__active');

        tabs.forEach(tab=>{
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
    });
});
/*=============== CONTACT FORM =============== */
const contactForm=document.getElementById('contact-form'),
    contactName=document.getElementById('contact-name'),
    contactEmail=document.getElementById('contact-email'),
    contactMessage=document.getElementById('contact-message'),
    contactSubject=document.getElementById('contact-subject'),
    errorMessage=document.getElementById('error-message');
   const sendEmail=(e)=>{
       e.preventDefault();
         if(contactName.value==='' ||
             contactEmail.value==='' ||
              contactMessage.value==='' ||
               contactSubject.value===''){
              errorMessage.style.display='block';
              errorMessage.innerHTML='Please fill in all fields';
              setTimeout(()=>{
                errorMessage.style.display='none';
              },3000);
   }
   else{

         emailjs.sendForm('service_rc1sus3',
             'template_f9m554c',
              '#contact-form',
            'QUgC9gQG9XUmIn_sW')
            .then(()=>{
                errorMessage.classList.add('color-first');
                print('Message sent successfully ✔️');
                errorMessage.textContent='Message sent successfully ✔️';
                errorMessage.style.display='block';
                // errorMessage.style.color='green';
                setTimeout(()=>{
                    errorMessage.textContent='';
                },5000);
            },(error)=>{
                alert('Oops! Something went wrong. Please try again later.');
            });
           contactName.value='';
           contactEmail.value='';
           contactMessage.value='';
           contactSubject.value='';
   }
};
//home part....................................................................
   contactForm.addEventListener('submit',sendEmail);

    document.addEventListener('DOMContentLoaded', function() {
            // Parallax effect for particles
            const particles = document.querySelectorAll('.particle');
            
            document.addEventListener('mousemove', function(e) {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                particles.forEach((particle, index) => {
                    const speed = (index + 1) * 0.5;
                    const x = mouseX * speed * 10;
                    const y = mouseY * speed * 10;
                    
                    particle.style.transform = `translate(${x}px, ${y}px)`;
                });
            });

            // Typewriter effect (optional enhancement)
            const title = document.querySelector('.home__title span');
            const text = title.textContent;
            title.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Start typewriter effect after initial animation
            setTimeout(typeWriter, 1500);
        });
//nav_menu.............
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove 'active-link' from all
      navLinks.forEach(item => item.classList.remove('active-link'));
      
      // Add 'active-link' to the clicked one
      this.classList.add('active-link');
    });
  });

  //about section 
  document.addEventListener('DOMContentLoaded', function() {
            // Tab switching functionality
            const tabBtns = document.querySelectorAll('.tabs_btn');
            const tabItems = document.querySelectorAll('.tab__item[data-content]');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.getAttribute('data-target');
                    
                    // Remove active classes
                    tabBtns.forEach(b => b.classList.remove('tab__active'));
                    tabItems.forEach(item => item.classList.remove('tab__active'));
                    
                    // Add active class to clicked button and corresponding content
                    btn.classList.add('tab__active');
                    document.querySelector(target).classList.add('tab__active');
                });
            });

            // Animate stats on scroll
            const statNumbers = document.querySelectorAll('.stat__number');
            const animateStats = () => {
                statNumbers.forEach(stat => {
                    const rect = stat.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const finalNumber = parseInt(stat.textContent);
                        let currentNumber = 0;
                        const increment = finalNumber / 50;
                        
                        const counter = setInterval(() => {
                            currentNumber += increment;
                            if (currentNumber >= finalNumber) {
                                stat.textContent = finalNumber + '+';
                                clearInterval(counter);
                            } else {
                                stat.textContent = Math.floor(currentNumber) + '+';
                            }
                        }, 30);
                    }
                });
            };

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            document.querySelectorAll('.skill__category, .experience__item, .education__card, .award__item').forEach(el => {
                observer.observe(el);
            });
        });