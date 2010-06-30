(function ($) {
  $.fn.extend ({
    truncate: function (options) {
      var settings = $.extend ({}, $.fn.truncate.defaults, options);

      return this.each (function () {
        var text = $(this).text ();
        var box_height = settings.lines_visible * settings.line_height_px + 2;


        var toggle_link = create ('a').txt (settings.more_text).
                                       attr ({href: 'javascript:void(0);'}).
                                       set_class ('toggle-link');

        $(toggle_link).toggle (function () {$(this).text (settings.less_text);

                                            // This is a hack to find out how tall the div is on line-height:'auto'.
                                            box.inner.style.height = 'auto';
                                            var auto_height = $(box.inner).height ();
                                            box.inner.style.height = box_height + 'px';

                                            // We just had to do that because animate only works on numerical properties.
                                            $(box.inner).animate ({height:auto_height + 10 + 'px'}, 'slow');
                               },
                               function () {$(this).text (settings.more_text);
                                            $(box.inner).animate ({height:box_height + 'px'});
                               });


        var box = create ('div');
        box.css       ({padding: '10px'}).
            set_class ('truncate').
            append    (box.inner = create ('div').txt (text).
                                                  css ({lineHeight: settings.line_height_px + 'px',
                                                        height: box_height + 'px',
                                                        overflow: 'hidden'})).
            append    (toggle_link);


        if (settings.new_box === false) this.parentNode.removeChild (this);
        $('body').prepend (box);
      });
    }
  });

  $.fn.truncate.defaults = {
    new_box        : true,
    lines_visible  : 3,
    line_height_px : 20,
    more_text      : 'more',
    less_text      : 'less',
  };

}) (jQuery);
