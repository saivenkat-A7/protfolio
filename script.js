
// sticky nav bar
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

// scrol revelscroll
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-image, .services-container, .protfolio-box, .contact form', {origin:'bottom'});


// typed js

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


 function showMessage() {
    alert("Message sent successfully!");
  }


 const btn = document.getElementById("btn");
    const moreText = document.getElementById("more");

    btn.addEventListener("click", () => {
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
      }
    });

     const btn1 = document.getElementById("btn1");
    const moreText1 = document.getElementById("more1");

    btn1.addEventListener("click", () => {
      if (moreText1.style.display === "none" || moreText1.style.display === "") {
        moreText1.style.display = "inline";
        btn1.textContent = "Read Less";
      } else {
        moreText1.style.display = "none";
        btn1.textContent = "Read More";
      }
    });



     const btn2 = document.getElementById("btn2");
    const moreText2 = document.getElementById("more2");

    btn2.addEventListener("click", () => {
      if (moreText2.style.display === "none" || moreText2.style.display === "") {
        moreText2.style.display = "inline";
        btn2.textContent = "Read Less";
      } else {
        moreText2.style.display = "none";
        btn2.textContent = "Read More";
      }
    });


     const btn3 = document.getElementById("btn3");
    const moreText3 = document.getElementById("more3");

    btn3.addEventListener("click", () => {
      if (moreText3.style.display === "none" || moreText3.style.display === "") {
        moreText3.style.display = "inline";
        btn3.textContent = "Read Less";
      } else {
        moreText3.style.display = "none";
        btn3.textContent = "Read More";
      }
    });

     const btn4 = document.getElementById("btn4");
    const moreText4 = document.getElementById("more4");

    btn4.addEventListener("click", () => {
      if (moreText4.style.display === "none" || moreText4.style.display === "") {
        moreText4.style.display = "inline";
        btn4.textContent = "Read Less";
      } else {
        moreText4.style.display = "none";
        btn4.textContent = "Read More";
      }
    });

     const btn5 = document.getElementById("btn5");
    const moreText5 = document.getElementById("more5");

    btn5.addEventListener("click", () => {
      if (moreText5.style.display === "none" || moreText5.style.display === "") {
        moreText5.style.display = "inline";
        btn5.textContent = "Read Less";
      } else {
        moreText5.style.display = "none";
        btn5.textContent = "Read More";
      }
    });