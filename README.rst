Truncate.js
===========

My very first jQuery plugin! It started out as an exercise, but turned into a
fun little something that I can see myself using someday.

The function is called by grabbing a div using jQuery and applying the truncate
function to it::

  $('poem').truncate();

You can pass in an object with the following options (these are the defaults)::

  { new_box        : true,
    lines_visible  : 3,
    line_height_px : 20,
    more_text      : 'more',
    less_text      : 'less' }

To style the contents of the truncated box, use class ``truncate`` for the box
and ``toggle-link`` for the toggle link.

Open index.html for a quick demo.
