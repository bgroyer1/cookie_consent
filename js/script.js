const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#modal-close-btn");
const modalSubmitBtn = document.querySelector("#modal-submit-btn");
const modalForm = document.querySelector("#modal-form");

setTimeout(() => {
  modal.style.display = "inline";
  closeModalBtn.disabled = false;
}, 1500);

/* ===== Event Listeners ===== */

/* Close Modal Button */
closeModalBtn.addEventListener("click", async () => {
  modal.style.display = "none";
});

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

})

// ai function , showing how this could possibly be sent to a server from the frontend
/* modalSubmitBtn.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(modalForm);
  const data = Object.fromEntries(formData);

  const res = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  console.log(result);
});
 */