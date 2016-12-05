/* 
    Document   : Synero
    Created on : Aug 23, 2014, 07:07:07 PM
    Author     : Harry
    Description: Synero - one page portfolio & Agency template
    Version    : V1.0
    file: custome js(editable)
*/

/*-------------------------------------------------
 =  Table of Js

 1.Page Preloader
 2.NiceScroll
 3.Navbar-Scroll
 4.Smooth Scroll To Anchor
 5.Parallax
 6.Owl carousel for testimonials
 7.WOW plugin triggers animate.css on scroll
 8.Portfolio-Mix
 9.PrettyPhoto
 10.Scroll to top
 11.Validate Contact Us Data
 12.Contact us submit button event
 
-------------------------------------------------*/

/* ==============================================
1.Page Preloader
=============================================== */
$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$(".animationload").delay(600).fadeOut("slow");
});