// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
// Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});
// Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});

//Function to toggle

var calendarView = true;

$(function() {
  $("#toggle").click(toggle);
});

function toggle() {
  if (calendarView) {
      $("#schedule").addClass("calendar-view").removeClass("list-view");
      calendarView = false;
  } else {
      $("#schedule").addClass("list-view").removeClass("calendar-view");
      calendarView = true;
  }
}

onload= function(){
  document.getElementById('toggle').onClick = toggle();

  var d = new Date();
         var today = d.getDate();
         var day = document.getElementsByClassName("day");
         var thisMonth = d.getMonth();
         var month = document.getElementsByClassName(thisMonth);
         for (let i = 0; i < day.length; i++) {
           if (month[i].className == thisMonth && day[i].innerHTML == today)  {
             month[i].setAttribute('id', 'today');
             month[i].nextElementSibling.setAttribute('id', 'today');
             month[i].previousElementSibling.setAttribute('id', 'today');

           }
         }
};

// TO TOP FUNCTION
$(document).ready(function () {
  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    },2000);
  });
});


  