(function ($) {

  const setFooterStyle = () => $("#footer_menu li a").addClass("white-text"); // set footer menu white text
  const setFooterUl = () => $("#footer-social-h5 + ul").addClass("social-icons");
  const hideInaccessible = () => $("li:contains('Inaccessible')").hide();

  $(function () {

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    setFooterStyle();
    setFooterUl();
    hideInaccessible();



  }); // end of document ready
})(jQuery); // end of jQuery name space