(function ($) {

  const setFooterStyle = () => $("#footer_menu li a").addClass("white-text"); // set footer menu white text
  const setFooterUl = () => $("#footer-social-h5 + ul").addClass("social-icons");
  const hideInaccessible = () => $("li:contains('Inaccessible')").hide();
  const addClassesToButtons = () => $('input.form-submit').addClass("btn-large waves-effect waves-light red lighten-2");

  $(function () {

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    setFooterStyle();
    setFooterUl();
    hideInaccessible();
    addClassesToButtons();



  }); // end of document ready
})(jQuery); // end of jQuery name space