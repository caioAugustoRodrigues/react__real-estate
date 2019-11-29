/** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA**/
$(document).on('click', function (e){
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var menu_opened = $('#main-navigation').hasClass('in');
  
    if(!$(e.target).closest('#main-navigation').length &&
        !$(e.target).is('#main-navigation') &&
        menu_opened === true){
            $('#main-navigation').collapse('toggle');
    }

});