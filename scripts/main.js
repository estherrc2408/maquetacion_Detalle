const toggleBtn = document.querySelector('.nav-horiz li i');
const dropdown = document.querySelector('.amborguesa');

toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});
