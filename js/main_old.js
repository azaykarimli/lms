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

  let removedElements = []; // declare an empty array to collect removed elements
  let removedParentdivs = []; // declare an empty array to collect removed elements


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
        /*         console.log(businessElement);
                alert("not"); */
        //$(coursesElement).prepend(businessElement);
        businessElement.style.display = "inline-block";
      });

      const nonBusinessElements = coursesElement.querySelectorAll(
        ".all:not(.business)"
      );

      //console.log(nonBusinessElements);
      const nonBusinessParent = document.createElement("div");

      nonBusinessElements.forEach(function (nonBusinessElement) {
        //alert("yes");
        //nonBusinessElement.style.display = "none";
        const parentDiv = nonBusinessElement.parentElement;

        parentDiv.remove();
        nonBusinessElement.remove();
        removedElements.push(nonBusinessElement); // push removed element to the array
        nonBusinessParent.appendChild(nonBusinessElement);
        //nonFinanceElement.style.display = "none";

      });
    });
  });


  $(".finance-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const nonFinanceElementsIn = coursesElement.querySelectorAll(".all:not(.finance)");

      const financeElementsFromRemoved = removedElements.filter(removedElement => removedElement.classList.contains("finance"));

      const financeElementsIn = coursesElement.querySelectorAll(".finance");

      const financeElements = Array.from(financeElementsFromRemoved).concat(Array.from(financeElementsIn));

      const financeParent = document.createElement("div");

      financeElements.forEach(function (financeElement) {
        financeParent.appendChild(financeElement);
        financeElement.style.display = "inline-block";
      });

      const nonFinanceParent = document.createElement("div");

      nonFinanceElementsIn.forEach(function (nonFinanceElement) {
        nonFinanceParent.appendChild(nonFinanceElement);
        //nonFinanceElement.style.display = "none";
        const parentDiv = nonFinanceElement.parentElement;
        parentDiv.remove();
        nonFinanceElement.remove();
        removedElements.push(nonFinanceElement); // push removed element to the array
      });

      coursesElement.appendChild(financeParent);
      coursesElement.appendChild(nonFinanceParent);
    });
  });
  $(".lifestyle-button").click(function () {
    $("*").removeClass("active"); // remove active class from everywhere
    $(this).addClass("active"); // add active class to clicked button

    const coursesElements = document.querySelectorAll(".courses"); // all elements in courses class

    coursesElements.forEach(function (coursesElement) {
      //loop of the courses
      const nonFinanceElementsIn = coursesElement.querySelectorAll(".all:not(.cooking)");

      const financeElementsFromRemoved = removedElements.filter(removedElement => removedElement.classList.contains("cooking"));

      const financeElementsIn = coursesElement.querySelectorAll(".cooking");

      const financeElements = Array.from(financeElementsFromRemoved).concat(Array.from(financeElementsIn));

      const financeParent = document.createElement("div");

      financeElements.forEach(function (financeElement) {
        financeParent.appendChild(financeElement);
        financeElement.style.display = "inline-block";
      });

      const nonFinanceParent = document.createElement("div");

      nonFinanceElementsIn.forEach(function (nonFinanceElement) {
        nonFinanceParent.appendChild(nonFinanceElement);
        nonFinanceElement.style.display = "none";
      });

      coursesElement.appendChild(financeParent);
      coursesElement.appendChild(nonFinanceParent);
    });
  });
  $(".technology-button").click(function () {
    //$('#myDiv').addClass('active');
    alert("technology");
  });
});