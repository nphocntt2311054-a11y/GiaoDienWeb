
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sans': ['Inter', 'sans-serif'],
                    },
                    colors: {
                   
                        'light-green': '#e5f9edff', 
                        'primary': '#32795aff',
                        'primary-dark': '#13d2a2ff',
                    },
                }
            }
        }
// banner 
  const bannerSlider = document.getElementById('banner-slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const totalSlides = document.querySelectorAll('.banner-item').length;
  let currentIndex = 0;

  function updateSlide() {
    bannerSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });


//văn học 
