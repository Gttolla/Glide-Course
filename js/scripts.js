// Nav links with page alert
function NavbarClick (){
    document.querySelectorAll('.nav-link').forEach(selected => {
        if (selected.href === window.location.href){
            selected.setAttribute('aria-current', 'page');
        } 
    });
}

NavbarClick();

// Progress Bar
const navItems = document.querySelectorAll('.nav-link');
const progressBar = document.querySelector('.progress');

const itemPercentage = 100 / navItems.length;

function updateProgressBar() {
    const activeItem = document.querySelector('.nav-link.active');
    const activeIndex = Array.from(navItems).indexOf(activeItem);

    const progressPercentage = activeIndex * itemPercentage;
    progressBar.style.width = progressPercentage + '%';

    localStorage.setItem('progress', progressPercentage);
}

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          navItems.forEach(item => {
              item.classList.remove('active');
          });
          item.classList.add('active');

          updateProgressBar();
      });
  });

  const savedProgress = localStorage.getItem('progress');
  if (savedProgress !== null) {
      progressBar.style.width = savedProgress + '%';
  }
