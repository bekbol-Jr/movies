$(".movie").slick({
    arrows:true,
    slidesToShow: 4,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }
        }
    ]
})





$(".video").slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '60px',
                arrows: false,
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }
        }
    ]
})




$(".persons").slick({
    slidesToShow: 4,
    dots: true,
    responsive: [
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '60px',
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                arrows: false,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }
        }
    ]
})

const btn = document.querySelector(".header-burger-menu")

const close = document.querySelector(".close")

btn.addEventListener('cli')






















