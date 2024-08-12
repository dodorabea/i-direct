
(function ($) {
  "use strict";

  /********************************/
  /*  loading   Js      */
  /********************************/
  $(window).on('load', function () {
    $(".se-pre-con").fadeOut("slow");
  });
  /* ========================================== 
      toggle-password
  ========================================== */
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  /********************************/
  /*  AOS   Js      */
  /********************************/
  AOS.init({
    duration: 1400,
    easing: "ease-in-cubic",
    disable: "mobile",
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
})(jQuery);
