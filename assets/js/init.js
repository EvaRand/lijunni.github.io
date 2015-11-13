$(document).ready(function() {
    "use strict";

    /***************************************************************************/
            /* NAVIGATION  */
    /***************************************************************************/
   
      $('.button-collapse').sideNav();
 
    /**************************************************************************
                 SKILL BAR 
    **************************************************************************/

      $(".determinate").each(function(){
          var width = $(this).text();
          $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');                
      });



    /*************************************************************************
                TOOLTIP
    **************************************************************************/
    $('.tooltipped').tooltip({delay: 50});

    /**************************************************************************
        WOW INIT
    **************************************************************************/

    var wow = new WOW({ mobile: false });
    wow.init();

    /***************************************************************************
          CONTACT FORM
    ***************************************************************************/

      $("#contactForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
          // handle the invalid form...
          formError();
          submitMSG(false, "Did you fill in the form properly?");
      } else {
          // everything looks good!
          event.preventDefault();
          submitForm();
      }
  });



});