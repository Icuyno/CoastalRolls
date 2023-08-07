// Initialization
  
$('.slider_container').slick({
    centerMode: true,
    infinite: true,
    responsive: [{
  
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
  
      }, {
  
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });