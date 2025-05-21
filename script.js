const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const brandName = document.getElementById('brandName');

function updateBrandText() {
  if (window.innerWidth <= 768) {
    brandName.textContent = 'Shane';
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.querySelectorAll('a').forEach(link => link.tabIndex = -1);
  } else {
    brandName.textContent = 'Shane Kian Flores';
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.querySelectorAll('a').forEach(link => link.tabIndex = -1);
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

updateBrandText();
window.addEventListener('resize', updateBrandText);

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  mobileMenu.querySelectorAll('a').forEach(link => link.tabIndex = isOpen ? 0 : -1);
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.about-pictures img').forEach(img => {
  img.addEventListener('click', (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    modalImg.alt = e.target.alt;
  });
});

document.querySelectorAll('.portfolio-gallery img').forEach(img => {
  img.addEventListener('click', (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    modalImg.alt = e.target.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
