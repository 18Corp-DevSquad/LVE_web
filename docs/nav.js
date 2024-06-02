function toggleMenu()
{
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

window.onscroll = function() {scroll()};

function scroll(){
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
}


function ScrollTopFunction() {
    document.body.scrollTop = 0; // pour Safari
    document.documentElement.scrollTop = 0; // pour Chrome, Firefox, Opera, etc.
  }