 var parent = $('#toggle-view'),
            delay = 400;
    var isMobile = window.matchMedia("only screen and (max-width: 666px)");
    var isTablet = window.matchMedia("only screen and (min-width: 667px)");
    var effect = 'slide';
    var options = { direction: 'left' };
    var duration = 700;

    $('li span', parent).click(function() {
        $('li', parent).each(function(index, element) {
            //reset each li to default state
            toggleListElement(element, false);
        });
        var clickedListElement = $(this).closest('li');
        // check to see if this li is not already being displayed
        var showListElement = !($('div', clickedListElement).is(':visible'));
//        console.log(showListElement);
        toggleListElement(clickedListElement, showListElement);

    });
    function toggleListElement(element, show) {

        if (isMobile.matches) {
            if (show) {
                $('div', element).slideDown(delay);
                $('img.open', element).show();
                $('img.close', element).hide();
                $('h2', element).css("background-color", '#E00034');
            } else {
                $('div', element).slideUp(delay);
                $('img.open', element).hide();
                $('img.close', element).show();
                $('h2', element).css("background-color", '#d3a600');
            }

        } else {
            if (show) {
                $('div', element).animate({width:'show'},900);
                $('img.open', element).show();
                $('img.close', element).hide();
                $('h2', element).css("background-color", '#E00034');
//                $(this).css("width", '75%');
            } else {
                $('div', element).animate({width:'hide'},900);
                $('img.open', element).hide();
                $('img.close', element).show();
                $('h2', element).css("background-color", '#d3a600');
//                $(this).siblings().css("width", '10%');
            }


        }

    }