$(document).ready(function () {


  // Click handler for all button
  $('.all-button').click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button
    
    $('.science-container').show();
    $('.marketing-container').show();
    $('.lifestyle-container').show();
    $('.finance-container').show();
    $('.cooking-container').show();
    $('.business-container').show();
  });

  // Click handler for business button
  $('.business-button').click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button
    $('.science-container').hide();
    $('.marketing-container').hide();
    $('.lifestyle-container').hide();
    $('.finance-container').hide();
    $('.cooking-container').hide();
    $('.business-container').show();
  });

  // Click handler for finance button
  $('.finance-button').click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button
    $('.science-container').hide();
    $('.marketing-container').hide();
    $('.lifestyle-container').hide();
    $('.business-container').hide();
    $('.cooking-container').hide();
    $('.finance-container').show();
  });

  // Click handler for lifestyle button
  $('.lifestyle-button').click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button
    $('.science-container').hide();
    $('.marketing-container').hide();
    $('.lifestyle-container').hide();
    $('.business-container').hide();
    $('.finance-container').hide();
    $('.cooking-container').show();
  });
  $('.technology-button').click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button
    $('.science-container').hide();
    $('.marketing-container').show();
    $('.lifestyle-container').hide();
    $('.business-container').hide();
    $('.finance-container').hide();
    $('.cooking-container').hide();
  });
});