(function ($, Drupal) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      console.log("script works...");
      if ($('.read-bio-toggle', context).once('myBehavior').length > 0) {
        console.log("button found");
        $('.read-bio-toggle').click(function (event) {
          console.log('button clicked');
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().parent().parent().find('.bio-body').hide();
            console.log('toggle up');
          }
          else {
            $(this).addClass("active");
            $(this).parent().parent().parent().find('.bio-body').show();
            console.log('toggle down');
          }
        });
      }
    }
  };
})(window.jQuery, window.Drupal);