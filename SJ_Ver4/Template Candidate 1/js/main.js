/**
 * Created by Ryan Young on 3/29/15.
 *
 * This script file contains the javascript and jquery code specific to the general functioning of the index.html file
 */

$(document).ready( function() {

    // Fade-in of main page.
    $("html").css("display","none");
    $("html").fadeIn(1000);
    $("#menu, #menu li, #menu li a").css("display","none");
    $("#menu, #menu li, #menu li a").fadeIn(2000);

});