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
      var bookPageTitle = $('h1.page-header span').text();
      console.log("bookPageTitle: " + bookPageTitle);
      $('.page-node-type-book .block-book-navigation ul ul li ul li a').each(function() {
        if ($(this).text() === bookPageTitle) {
          $(this).addClass('hasPageTitle');
        }
      });
      $('.views-field-field-when').each(function() {
        var contents = $(this).find('.field-content').text();
        if (contents.indexOf('-') !== -1) {
          onlyDates = contents.split("|")
          matched = onlyDates[1].split("-");
          matched[0] = matched[0].trim();
          matched[1] = matched[1].trim();
          firstMatch = matched[0].match(/\d{2}\.\d{2}\.\d{4}/g)[0];
          secondMatch = matched[1].match(/\d{2}\.\d{2}\.\d{4}/g)[0];
          if (firstMatch == secondMatch) {
            foundIndex = contents.lastIndexOf(firstMatch);
            contents = contents.substring(0, foundIndex) + contents.substring(foundIndex + 12, contents.length);
          }
          contents = contents.toUpperCase().replace(" EDT", "").replace("|", "<span class='separator-pipe'>|</span>");
          $(this).find('.field-content').html(contents);
        }
      })
    }
  };
})(window.jQuery, window.Drupal);
