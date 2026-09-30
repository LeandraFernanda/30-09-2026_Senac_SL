let isOpen = null;

const overlay = document.getElementById("modalOverlay");
const dialog = document.getElementById("modalDialog");
const openBtn = document.getElementById("openModalBtn");
const signupBtn = document.getElementById("signupBtn");
const modal = document.querySelector(".modal");

function toggleModal() {
 
  overlay.classList.remove("open", "closed");
  modal.classList.remove("open", "closed");

  
  void overlay.offsetWidth;
  void modal.offsetWidth;

  if (!isOpen) {
    overlay.classList.add("open");
    modal.classList.add("open");
  } else {
    overlay.classList.add("closed");
    modal.classList.add("closed");
  }

  isOpen = !isOpen;
}


openBtn.addEventListener("click", toggleModal);


signupBtn.addEventListener("click", toggleModal);


overlay.addEventListener("click", toggleModal);


dialog.addEventListener("click", (e) => {
  e.stopPropagation();
});