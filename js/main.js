/* 'use strict';

let allButton = document.querySelector('.all-button')
let businessButton = document.querySelector('.business-button')
let all = document.querySelector('#explore .courses')
let business = document.querySelector('.business')

allButton.addEventListener('click', function(){
    all.classList.add('active')
    
})

businessButton.onclick = () => {
    // all.classList.add('active');
    business.style.opacity = '1';
    business.style.visibility = 'visible';

} */

$(document).ready(function () {
  $(".all-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const allElements = coursesElement.querySelectorAll(".all");
      allElements.forEach(function (allElement) {
        // console.log(financeElement);
        //alert("not");
        allElement.style.display = "inline-block";
      });
    });
  });

  $(".business-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const businessElements = coursesElement.querySelectorAll(".business");
      businessElements.forEach(function (businessElement) {
        // console.log(financeElement);
        //alert("not");
        //$(coursesElement).prepend(businessElement);
        businessElement.style.display = "inline-block";
      });

      const nonBusinessElements = coursesElement.querySelectorAll(
        ".all:not(.business)"
      );

      //console.log(nonBusinessElements);

      nonBusinessElements.forEach(function (nonBusinessElement) {
        //alert("yes");
        nonBusinessElement.style.display = "none";
        /*  const parentDiv = nonFinanceElement.parentElement;
        parentDiv.remove();
        nonFinanceElement.remove(); */
      });
    });
  });

  /*   $(".business-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const businessElements = coursesElement.querySelectorAll(".business");
      businessElements.forEach(function (businessElement) {
        // move business elements to the beginning
        $(coursesElement).prepend(businessElement);
        businessElement.style.display = "inline-block";
      });

      const nonBusinessElements = coursesElement.querySelectorAll(
        ".all:not(.business)"
      );

      nonBusinessElements.forEach(function (nonBusinessElement) {
        nonBusinessElement.style.display = "none";
      });
    });
  }); */

  $(".finance-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const financeElements = coursesElement.querySelectorAll(".finance");
      financeElements.forEach(function (financeElement) {
        // console.log(financeElement);
        //alert("not");
        financeElement.style.display = "inline-block";
      });

      const nonFinanceElements =
        coursesElement.querySelectorAll(".all:not(.finance)");

      //console.log(nonBusinessElements);

      nonFinanceElements.forEach(function (nonFinanceElement) {
        //alert("yes");
        nonFinanceElement.style.display = "none";
        /*  const parentDiv = nonFinanceElement.parentElement;
        parentDiv.remove();
        nonFinanceElement.remove(); */
      });
    });
  });
  $(".lifestyle-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const lifeStyleElements = coursesElement.querySelectorAll(".cooking");
      lifeStyleElements.forEach(function (lifeStyleElement) {
        // console.log(financeElement);
        //alert("not");
        lifeStyleElement.style.display = "inline-block";
      });

      const nonlifeStyleElements =
        coursesElement.querySelectorAll(".all:not(.cooking)");

      //console.log(nonBusinessElements);

      nonlifeStyleElements.forEach(function (nonlifeStyleElement) {
        //alert("yes");
        nonlifeStyleElement.style.display = "none";
        /*  const parentDiv = nonFinanceElement.parentElement;
        parentDiv.remove();
        nonFinanceElement.remove(); */
      });
    });
  });
  $(".technology-button").click(function () {
    //$('#myDiv').addClass('active');
    alert("technology");
  });
});
