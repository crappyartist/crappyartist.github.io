// Configuration object mapping each SVG’s ID to its start offset and animation duration (in ms)
const svgConfigs = {
    m1: { startY: '100px', duration: 1000 },
    m2: { startY: '150px', duration: 1200 },
    m3: { startY: '200px', duration: 800 },
    m4: { startY: '50px',  duration: 900 },
    m5: { startY: '120px', duration: 1100 }
  };
  
  function animateHeroSvgs(configs) {
    window.addEventListener('load', () => {
      requestAnimationFrame(() => {
        Object.entries(configs).forEach(([id, { startY, duration }]) => {
          const svg = document.querySelector(`#hero svg#${id}`);
          if (!svg) return;
  
          svg.style.transform = `translateY(${startY})`;
          svg.style.color = 'black';
  
          const anim = svg.animate(
            [
              { transform: `translateY(${startY})`, color: 'black' },
              { transform: 'translateY(0px)', color: 'red' }
            ],
            {
              duration,
              easing: 'ease-out',
              fill: 'none'
            }
          );
  
          anim.onfinish = () => {
            svg.style.transform = 'translateY(0px)';
            svg.style.color = 'red';
          };
        });
      });
    });
  }
  
  animateHeroSvgs(svgConfigs);
  console.log("Found this comment? Contact https://github.com/eleiux (or eleiux on discord) for a free site");

window.addEventListener('DOMContentLoaded', () => {
    const inner = document.querySelector('#switching .inner');
    inner.innerHTML += inner.innerHTML;  // clone all words
});




document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      if (link.target === '_blank') return; // skip animation for new tab
  
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  });
  

  

  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menuBtn');
    const nav = document.querySelector('nav');
  
    function toggleMenu() {
      menuBtn.classList.toggle('open');
      nav.classList.toggle('opened');
    }
  
    menuBtn.addEventListener('click', e => {
      e.stopPropagation(); // prevent click from bubbling to document
      toggleMenu();
    });
  
    document.addEventListener('click', e => {
      const clickedOutside = !nav.contains(e.target) && !menuBtn.contains(e.target);
      if (nav.classList.contains('opened') && clickedOutside) {
        toggleMenu();
      }
    });
  });
  
  function copyText(btn) {
    // copy the text
    navigator.clipboard.writeText(btn.textContent.trim());
    // swap the icon
    btn.classList.add('copied');
    // after 2s, revert back
    setTimeout(() => btn.classList.remove('copied'), 1000);
  }


  document.querySelectorAll('.imgholder img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
  });

/*-------------------------------------------------------------------------------------------------------------gallery functionality--*/
const galleryContainers = document.querySelectorAll('.gallery-container');
        
// Add event listeners to each gallery
galleryContainers.forEach(container => {
    const galleryRow = container.querySelector('.gallery-row');
    const prevButton = container.querySelector('.gallery-button.prev');
    const nextButton = container.querySelector('.gallery-button.next');
    
    // Scroll amount for each click (can be adjusted)
    const scrollAmount = 700;

    document.querySelectorAll('.gallery-button.prev').forEach(button => {
    button.style.setProperty('display', 'none');
    });

    // Previous button click handler
    prevButton.addEventListener('click', () => {
        galleryRow.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Next button click handler
    nextButton.addEventListener('click', () => {
        galleryRow.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        document.querySelectorAll('.gallery-button.prev').forEach(button => {
          button.style.setProperty('display', 'block');
          });
    });
});