$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="31.000000px" height="50.000000px" viewBox="0 0 31.000000 50.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#C70101" stroke="none"><path d="M120 375 l-125 -125 125 -125 c69 -69 130 -125 136 -125 13 0 54 42 54 55 0 5 -42 51 -92 102 l-93 93 93 93 c50 51 92 97 92 103 0 13 -43 54 -56 54 -5 0 -65 -56 -134 -125z"/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000px" height="50.000000px" viewBox="0 0 30.000000 50.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#C70101" stroke="none"><path d="M22 477 c-12 -13 -22 -27 -22 -32 0 -5 42 -51 92 -102 l93 -93 -93 -93 c-50 -51 -92 -97 -92 -103 0 -13 43 -54 56 -54 15 0 244 235 244 250 0 16 -229 250 -245 250 -6 0 -21 -10 -33 -23z"/></g></svg></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              }
            },
          ]
    });
});