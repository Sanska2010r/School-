// Navigation toggle
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  toggle && toggle.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Footer years
  const years = ["year","year2","year3","year4","year5","year6","year7"];
  years.forEach(id=>{ const el = document.getElementById(id); if(el) el.textContent = new Date().getFullYear(); });

  // Lightbox for gallery
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  galleryItems.forEach(img=>{
    img.addEventListener('click', ()=>{
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  lightbox && lightbox.addEventListener('click', ()=>{ lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden','true'); });

  // Simple contact form handler
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Thanks! Your message was received (demo).');
      contactForm.reset();
    });
  }
});
<script src="js/script.js"></script>
