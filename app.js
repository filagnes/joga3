document.addEventListener("DOMContentLoaded", function() {

    // go-up button //

    const goUpBtn = document.querySelector(".go-up i");

    goUpBtn.addEventListener("click", function() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"  
        });
    });
});