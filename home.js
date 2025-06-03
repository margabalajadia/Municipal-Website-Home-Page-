const carouselSlide = document.querySelector('.carousel-slide');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const dots = document.querySelectorAll('.dot');
        const overlayButtons = document.querySelectorAll('.slide-overlay button');

        let counter = 0;
        let slideWidth = slides[0].offsetWidth;

        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

        function goToSlide(index) {
            if (index < 0) {
                counter = slides.length - 1;
            } else if (index >= slides.length) {
                counter = 0;
            } else {
                counter = index;
            }
            slideWidth = slides[0].offsetWidth;
            carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
            updateDots();
        }

        nextButton.addEventListener('click', () => {
            goToSlide(counter + 1);
        });

        prevButton.addEventListener('click', () => {
            goToSlide(counter - 1);
        });

        function updateDots() {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[counter].classList.add('active');
        }

        updateDots();

        window.addEventListener('resize', () => {
            slideWidth = slides[0].offsetWidth;
            carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
        });