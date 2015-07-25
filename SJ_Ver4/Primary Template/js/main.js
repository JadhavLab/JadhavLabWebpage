/**
 * Created by Ryan Young on 3/29/15.
 *
 * This script file contains the javascript and jquery code specific to the general functioning of the index.html file
 */

$(document).ready( function() {

    // Fade-in of main page.
    $("html").css("display","none");
    $("html").fadeIn(300);
    $("#menu, #menu li, #menu li a").css("display","none");
    $("#menu, #menu li, #menu li a").fadeIn(650);

    // Pull news elements directly from news.html ... ie update news page and it updates the main
    $("#news1").load("news.html .news-section li:nth-child(1)");
    $("#news2").load("news.html .news-section li:nth-child(2)");
    $("#news3").load("news.html .news-section li:nth-child(3)");

});