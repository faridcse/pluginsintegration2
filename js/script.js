$(document).ready(function() {

	    /**
     * Demo 1
     */
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });

    //load more

    // items to show
      var increment = 3;

      var startFilter = 0;
      var endFilter = increment;

      // item selector
      var $this = $('.items');

      var elementLength = $this.find('div').length;
      $('.listLength').text(elementLength);

      // show/hide the Load More button
      if (elementLength > 2) {
        $('.buttonToogle').show();
      }

      $('.items .item').slice(startFilter, endFilter).addClass('shown');
      $('.shownLength').text(endFilter);
      $('.items .item').not('.shown').hide();
      $('.buttonToogle .showMore').on('click', function() {
        if (elementLength > endFilter) {
          startFilter += increment;
          endFilter += increment;
          $('.items .item').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
          $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
          if (elementLength <= endFilter) {
              $(this).remove();
          }
        }
      });

      //mixit-up
      var mixer = mixitup('.portfolio');




});