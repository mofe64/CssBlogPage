let slideIndex = 0;

const slideShow = () => {
    let i;
    let slides = document.getElementsByClassName("carousel");
    let indicators = document.getElementsByClassName("indicator")
    console.log(slides)
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < indicators.length; i++){
      indicators[i].className =   indicators[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "flex";
    indicators[slideIndex - 1].className += " active";
    setTimeout(slideShow, 4500);
}
slideShow();