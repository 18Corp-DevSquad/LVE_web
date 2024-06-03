function toggleMenu()
{
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

window.onscroll = function() {scroll()};

function scroll(){
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.style.transform = "translateX(-200px)";
      } else {
        topBtn.style.transform = "translateX(0px)";
      }
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (footerRect.top < windowHeight) {
      let distanceToBottom = windowHeight - footerRect.top;
      topBtn.style.bottom = `${distanceToBottom}px`;
    } else {
        topBtn.style.bottom = '0px';
    }
}


function ScrollTopFunction() {
    document.body.scrollTop = 0; // pour Safari
    document.documentElement.scrollTop = 0; // pour Chrome, Firefox, Opera, etc.
  }

