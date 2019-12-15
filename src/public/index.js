$(document).ready(() => {
  $('.categories__container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick'
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  })
})

$(document).ready(() => {
  $('.featured__container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  })
})

window.onscroll = function() {
  scrollFunction()
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 200) {
    // I am using 'display' instead of 'top':
    document.querySelector(".nav__filters").style.visibility = "visible";
    document.querySelector(".nav__filters").style.opacity = "1";
    document.querySelector(".nav__filters").style.pointerEvents = "visible";


  } else {
    document.querySelector(".nav__filters").style.visibility = "hidden";
    document.querySelector(".nav__filters").style.opacity = "0";
    document.querySelector(".nav__filters").style.pointerEvents = "none";

  }

  if (currentScrollPos > 30) {
    document.querySelector('.nav__row').style.backgroundColor = '#fff';
    document.querySelector('.nav__row').style.borderBottom = '1px solid #e5e5e5';
  } else {
    document.querySelector('.nav__row').style.backgroundColor = 'transparent';
    document.querySelector('.nav__row').style.borderBottom = '0';
  }
}


const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);