
$(document).ready(function(){
  $(".owl-carousel--first").owlCarousel({
    items: 4,    
    center: false,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            
        },
        575:{
            items:3,
            
        },
        900:{
            items:3,
            
        },
        1199:{
            items:4,
              }
    }
  });


$('.landing-slider .home-banner-slider').owlCarousel({
    nav:true,
    tems: 1,   
    center: false,
    loop:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:1,
            
        },
        1000:{
            items:1,
              }
    }
  });

$('.home-banner-slider').owlCarousel({
    items: 1,   
    center: false,
    loop:true,
    nav:true,  

    responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:1,
            
        },
        1000:{
            items:1,
              }
    }
  });

$('.page-link-slider').owlCarousel({
    items: 9,   
    center: false,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:3,
            
        },
        767:{
            items:5,
            
        },
        1000:{
            items:6,
              },
               1250:{
            items:9,
              }

    }
  });

  
  $('.owl-carousel--second').owlCarousel({
    items: 3,   
    center: false,
    loop:true,
     nav:true,
       responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:2,
            
        },
        1000:{
            items:3,
              }
    }
  });
});

$(".owl-carousel.find-job").owlCarousel({    
    loop:true,
    center: true,
    items:1,
    margin:0,
    stagePadding: 0,
    autoplay:false
    
  });
  
  dotcount = 1;
  
  jQuery('.owl-dot').each(function() {
    jQuery( this ).addClass( 'dotnumber' + dotcount);
    jQuery( this ).attr('data-info', dotcount);
    dotcount=dotcount+1;
  });
  
  slidecount = 1;
  
  jQuery('.owl-item').not('.cloned').each(function() {
    jQuery( this ).addClass( 'slidenumber' + slidecount);
    slidecount=slidecount+1;
  });
  
  jQuery('.owl-dot').each(function() {  
    grab = jQuery(this).data('info');   
    slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
    jQuery(this).css("background-image", "url("+slidegrab+")");   
  });
  
  amount = $('.owl-dot').length;
  gotowidth = 100/amount;     
  jQuery('.owl-dot').css("height", gotowidth+"%");


$(document).ready(function(){
$(".profile-btn").click(function(){
    $(".extra-menu").addClass("active");
    
});

$(document).click(function(event) {  
  if (!$(event.target).closest(".profile-btn").length) {
    $("body").find(".extra-menu").removeClass("active");
  }
});
  

   $('.dropdown-btn').on('click', function(e) {
         e.stopPropagation();
         if ($(this).next('.dropdown-menu').css('display') == 'none') {
             $('.dropdown-menu').hide();
             $(this).next('.dropdown-menu').show();
         } else {
             $(this).next('.dropdown-menu').hide();
         }
     });

     $('button.filter').on('click', function(e) {
         e.stopPropagation();
         if ($(this).next('.dropdown-menu').css('display') == 'none') {
             $('.dropdown-menu').hide();
             $(this).next('.dropdown-menu').show();
         } else {
             $(this).next('.dropdown-menu').hide();
         }
     });

     $('.dropdown-menu a').on('click', function(e) {
         e.preventDefault();
         var listVal = $(this).text();
         var selVal = $('.dropdown-btn em').html();
         selVal = listVal;
         if ($(this).parents('.log-box').length == 0) { $(this).parent().parent().siblings('.dropdown-btn').html(selVal + '<span class="caret"></span>'); }
         $('.dropdown-menu').hide();
     });



});
/*Initializing END*/



if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
} else {
    document.documentElement.className += " touch";
}
(function($) {
    /*Initializing START*/
    $(document).ready(function() {
      $('a[href="#"]').click(function(e) {
            e.preventDefault();
      });
      //Owl
       
    });
    $(window).on('load', function() {
        console.log('window loaded successfully');
        // new WOW().init();
    });
    $(window).on('resize', function() {
        //console.log('window resized to ' + $(window).innerWidth() + '');
    });

})(jQuery);

function myFunction() {
    var x = document.getElementById("inputPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function myFunction2() {
    var x = document.getElementById("inputPassword2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

(function() {
  // Display the images to be uploaded.
  var multiPhotoDisplay;

  $('#photos').on('change', function(e) {
    return multiPhotoDisplay(this);
  });

  this.readURL = function(input) {
    var reader;
    
    // Read the contents of the image file to be uploaded and display it.

    if (input.files && input.files[0]) {
      reader = new FileReader();
      reader.onload = function(e) {
        var $preview;
        $('.image_to_upload').attr('src', e.target.result);
        $preview = $('.preview');
        if ($preview.hasClass('hide')) {
          return $preview.toggleClass('hide');
        }
      };
      return reader.readAsDataURL(input.files[0]);
    }
  };

  multiPhotoDisplay = function(input) {
    var file, i, len, reader, ref;
    
    // Read the contents of the image file to be uploaded and display it.

    if (input.files && input.files[0]) {
      ref = input.files;
      for (i = 0, len = ref.length; i < len; i++) {
        file = ref[i];
        reader = new FileReader();
        reader.onload = function(e) {
          var image_html;
          image_html = '<li><a class="th" href="${e.target.result}"><img width="75" src="${e.target.result}"></a></li>';
          $('#photos_clearing').append(image_html);
          if ($('.pics-label.hide').length !== 0) {
            $('.pics-label').toggle('hide').removeClass('hide');
          }
          return $(document).foundation('reflow');
        };
        reader.readAsDataURL(file);
      }
      window.post_files = input.files;
      if (window.post_files !== void 0) {
        return input.files = $.merge(window.post_files, input.files);
      }
    }
  };

}).call(this);
/*Initializing END*/

function countryDropdown(seletor) {
  var Selected = $(seletor);
  var Drop = $(seletor + '-drop');
  var DropItem = Drop.find('li');

  Selected.click(function () {
    Selected.toggleClass('open');
    Drop.toggle();
  });

  Drop.find('li').click(function () {
    Selected.removeClass('open');
    Drop.hide();

    var item = $(this);
    Selected.html(item.html());
  });

  DropItem.each(function () {
    var code = $(this).attr('data-code');

    if (code != undefined) {
      var countryCode = code.toLowerCase();
      $(this).find('i').addClass('flagstrap-' + countryCode);
    }
  });
}

countryDropdown('#country');


/**
    animation Js
  -----------------------------------------------------------------------
    animate sections

 **/

 new WOW().init();

if(document.getElementById("mydiv")){
  dragElement(document.getElementById("mydiv"));
}



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

      