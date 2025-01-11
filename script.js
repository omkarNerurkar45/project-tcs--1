let sections =document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.fonEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top<offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
           });
           document.querySelector(`header nav a[href='#${id}']`).classList.add('Acive');
        };

    });
};
document.querySelector('.read-more-btn').addEventListener('click', function () {
    const moreText = document.querySelector('.more-text');
    const container = document.querySelector('.container');
    
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'inline'; // Show the hidden text
      this.textContent = 'READ LESS'; // Change button text
      container.style.height = 'auto'; // Adjust container height
    } else {
      moreText.style.display = 'none'; // Hide the extra text
      this.textContent = 'READ MORE'; // Reset button text
      container.style.height = ''; // Reset container height
    }
  });
 
