const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('#modal-close-btn')

setTimeout(() => {
  modal.style.display = 'inline';
  closeModalBtn.disabled = false;
}, 1500)

/* ===== Event Listeners ===== */

/* Close Modal Button */
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})