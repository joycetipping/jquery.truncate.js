(function ($) {
  $.fn.extend ({

    truncate : function (options) {
      var settings = $.extend ({
        length    : 300,
        more_text : 'more',
        less_text : 'less'
      }, options);

      return this.each (function () {
        var text = $(this).text ();
        if (text.length > settings.length) {
          var split_pt = text.indexOf (' ', settings.length);
          if (split_pt !== -1) {
            var teaser = create ('span', text.substring (0, split_pt));
            var rest   = create ('span', text.substring (split_pt), css ({display:'none'}));
          }
        }

        var $more_less_link = $(create ('a', settings.more_text,
                                             {href: 'javascript:void(0);'},
                                             css ({padding:'0 5px'}))
                              ).toggle (function () {
                                $(this).text (settings.less_text);
                                $(rest).show ('fast');
                              },        function () {
                                $(this).text (settings.more_text);
                                $(rest).hide ('fast');
                              });

        var teaser_box = create ('div', css ({
          backgroundColor:'#def',
          font: '15px "Trebuchet MS", sans-serif',
          margin: '20px 0',
          padding: '10px',
          border: '2px dashed black'
        }));

        $('body').prepend ($(teaser_box).append (teaser, rest, $more_less_link));
      });
    }

  });
}) (jQuery);
