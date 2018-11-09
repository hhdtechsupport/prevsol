(function ($, Drupal) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      if ($('.read-bio-toggle', context).once('myBehavior').length > 0) {
        $('.read-bio-toggle').click(function (event) {
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
      $('.navbar-toggle', context).once('myBehavior').click(function (event) {
        if (!$('#superfish-main-toggle').hasClass('sf-expanded')) {
          $('#superfish-main-toggle').trigger('click');
        }
      });
      $('.page-node-type-book .block-book-navigation ul ul li').each(function() {
        if ($(this).has('ul').length) {
          $(this).addClass('hasList');
        }
      });
    }
  };
})(window.jQuery, window.Drupal);