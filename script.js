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
  