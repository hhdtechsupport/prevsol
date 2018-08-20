(function ($, Drupal) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      if ($('.read-bio-toggle').length > 0) {
        $('.read-bio-toggle').click(function (event) {
          event.preventDefault();
          event.stopPropagation();
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().parent().parent().find('.bio-body').hide();
          }
          else {
            $(this).addClass("active");
            $(this).parent().parent().parent().find('.bio-body').show();
          }
        });
      }

      console.log('this works... 5');
    }
  };
})(window.jQuery, window.Drupal);