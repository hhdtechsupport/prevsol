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
      if ($('.page-node-type-book .block-book-navigation').not(':has(nav)')) {
        $('.page-node-type-book .block-book-navigation ul li').each(function () {
          if ($(this).has('ul').length) {
            $(this).addClass('hasList');
          }
        });
      }

      var bookPageTitle = $('h1.page-header span').text();
      $('.page-node-type-book .block-book-navigation ul ul li ul li a').each(function() {
        if ($(this).text() === bookPageTitle) {
          $(this).addClass('hasPageTitle');
        }
      });
      $('div.views-field-field-when', context).each(function() {
        if ($(this).find('.field-content').length) {
          var date1 = $(this).find('.field-content').find('.date1').text();
          var date2 = $(this).find('.field-content').find('.date2').text();
          var contentType = $(this).find('.field-content').find('.type').text();
          var formattedDates = "";
          var contentOutput = "";
          var dateObj1 = new Date(date1);
          var dateObj2 = new Date(date2);
          dateObj1.setHours(dateObj1.getHours() - 4);
          dateObj2.setHours(dateObj2.getHours() - 4);
          var dateObjOnlyDate1 = new Date(date1).setHours(0,0,0,0);
          var dateObjOnlyDate2 = new Date(date2).setHours(0,0,0,0);
          //var timeZone = new Date(date1).toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
          var timeZone = "EDT";
          if (date2) {
            if (dateObjOnlyDate1 !== dateObjOnlyDate2) {
              if (moment(dateObj1).format("MMMM") == moment(dateObj2).format("MMMM")) {
                formattedDates = moment(dateObj1).format("MMMM D") + "-" + moment(dateObj2).format("D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
              } else {
                formattedDates = moment(dateObj1).format("MMMM D") + "-" + moment(dateObj2).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
              }
              contentOutput =
              "<span class='type'>" + contentType + "</span><span class='separator-pipe'>|</span><span class='dates'>" + formattedDates + "</span>";
            } else {
              formattedDates = moment(dateObj1).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
              contentOutput =
              "<span class='type'>" + contentType + "</span><span class='separator-pipe'>|</span><span class='dates'>" + formattedDates + "</span>";
            }
          } else {
            formattedDates = moment(dateObj1).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + " " + timeZone;
            contentOutput =
            "<span class='type'>" + contentType + "</span><span class='separator-pipe'>|</span><span class='dates'>" + formattedDates + "</span>";
          }
          $(this).find('.field-content').html(contentOutput);
        }
      });
      $('td.views-field-field-when', context).each(function() {
        console.log("test UE");
        var date1 = $(this).find('.date1').text();
        var date2 = $(this).find('.date2').text();
        var formattedDates = "";
        var contentOutput = "";
        var dateObj1 = new Date(date1);
        var dateObj2 = new Date(date2);
        console.log(dateObj1);       
        dateObj1.setUTCHours(dateObj1.getUTCHours() -4);
        console.log(dateObj1);
        dateObj2.setUTCHours(dateObj2.getUTCHours() -4);
        var dateObjOnlyDate1 = new Date(date1).setUTCHours(0,0,0,0);
        var dateObjOnlyDate2 = new Date(date2).setUTCHours(0,0,0,0);
        var timeZone = new Date(date1).toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
        //var timeZone = "EDT...1";
        if (date2) {
          if (dateObjOnlyDate1 !== dateObjOnlyDate2) {
            if (moment(dateObj1).format("MMMM") == moment(dateObj2).format("MMMM")) {
              formattedDates = moment(dateObj1).format("MMMM D") + "-" + moment(dateObj2).format("D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span><br />" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
            } else {
              formattedDates = moment(dateObj1).format("MMMM D") + "-" + moment(dateObj2).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span><br />" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
            }
            contentOutput =
            "<span class='dates'>" + formattedDates + "</span>";
          } else {
            formattedDates = moment(dateObj1).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span><br />" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
            contentOutput =
            "<span class='dates'>" + formattedDates + "</span>";
          }
        } else {
          formattedDates = moment(dateObj1).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span><br />" + moment(dateObj1).format("h:mma") + " " + timeZone;
          contentOutput =
          "<span class='dates'>" + formattedDates + "</span>";
        }
        $(this).html(contentOutput);
      });
      $('.field--name-field-when', context).each(function() {
        var date1 = $(this).find('.field--item').find('time:first').attr("datetime");
        var date2 = $(this).find('.field--item').find('time:last').attr("datetime");
        var formattedDates = "";
        var contentOutput = "";
        var dateObj1 = new Date(date1);
        var dateObj2 = new Date(date2);
        var dateObjOnlyDate1 = new Date(date1).setHours(0,0,0,0);
        var dateObjOnlyDate2 = new Date(date2).setHours(0,0,0,0);
        //var timeZone = new Date(date1).toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
        var timeZone = "EDT";
        if (date2) {
          if (dateObjOnlyDate1 !== dateObjOnlyDate2) {
            if (moment(dateObj1).format("MMMM") == moment(dateObj2).format("MMMM")) {
              formattedDates = moment(dateObj1).format("MMMM D") + "-" + moment(dateObj2).format("D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
            } else {
              formattedDates = moment(dateObj1).format("MMMM D") + "-" + moment(dateObj2).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
            }
            contentOutput =
            "<span class='dates'>" + formattedDates + "</span>";
          } else {
            formattedDates = moment(dateObj1).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + "-" + moment(dateObj2).format("h:mma") + " " + timeZone;
            contentOutput =
            "<span class='dates'>" + formattedDates + "</span>";
          }
        } else {
          formattedDates = moment(dateObj1).format("MMMM D") + ", " + moment(dateObj1).format("GGGG") + "<span class='separator-pipe'>|</span>" + moment(dateObj1).format("h:mma") + " " + timeZone;
          contentOutput =
          "<span class='dates'>" + formattedDates + "</span>";
        }
        $(this).find('.field--item').html(contentOutput);
      });
    }
  };
})(window.jQuery, window.Drupal);
