
function toggleMenu() {
  document.getElementById("sideNav").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("sideNav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
// إنشاء المودال مرة واحدة في الصفحة
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <button class="modal-close">×</button>
    <img src="" alt="صورة المنتج" />
  </div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.modal-close');

// فتح الصورة عند الضغط على زر "عرض"
document.querySelectorAll('.details').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const imgSrc = card.querySelector('img').src;
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
  });
});

// إغلاق عند الضغط على ×
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// إغلاق عند الضغط خارج الصورة
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
