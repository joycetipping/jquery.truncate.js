(function ($) {
  $.fn.extend ({

    truncate : function (options) {
      var settings = $.extend ({}, $.fn.truncate.defaults, options);

      return this.each (function () {
        var text = $(this).text ();
        var height = settings.lines_visible * settings.line_height_px + 2;

        var more_less_link = create ('a', settings.more_text,
                                          {href: 'javascript:void(0);'},
                                          css ({padding:'5px 0'}));
        $(more_less_link).toggle (function () {$(this).text (settings.less_text);
                                               // This is a hack to get the height of the div on line-height:'auto'.
                                               box.inner.style.height = 'auto';
                                               var box_height = $(box.inner).height ();
                                               box.inner.style.height = height + 'px';
                                               // We just had to do that because animate only works on numerical properties.
                                               $(box.inner).animate ({height:box_height + 10 + 'px'}, 'slow');},
                                  function () {$(this).text (settings.more_text);
                                               $(box.inner).animate ({height:height + 'px'});});

        var box = create ('div', css ({backgroundColor: '#def', 
                                       border: '2px dashed black',
                                       margin: '50px 0 20px 0',
                                       padding: '10px',
                                       width: '60%',
                                       font: '12px "Trebuchet MS", sans-serif'}),
                                 function () {this.inner = this.create ('div', text, css ({backgroundColor: '#def',
                                                                                           font: '15px/' + settings.line_height_px + 'px "Trebuchet MS", sans-serif',
                                                                                           height: height + 'px',
                                                                                           overflow: 'hidden'}));},
                                 more_less_link);

        $('body').prepend (box);
      });
    }

  });

  $.fn.truncate.defaults = {
    lines_visible  : 3,
    line_height_px : 16,
    more_text      : 'more',
    less_text      : 'less'
  };

}) (jQuery);
