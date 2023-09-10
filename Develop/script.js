// Wrap code in a call that waits until HTML is loaded
$(document).ready(function () {
  // Add an event listener for click events on the save button allowing you to save user input
  $(document).ready(function () {
    $(".saveBtn").on("click", function () {});
  });

  $(".saveBtn").on("click", function () {
    // Get the user input from the text area within the time block
    var userInput = $(this).siblings(".description").val();

    // Get the ID of the time block
    var timeBlockId = $(this).parent().attr("id");

    // Save the user input to local storage using the time block ID
    localStorage.setItem(timeBlockId, userInput);
  });

  $(document).ready(function () {
    // Apply the "past", "present", or "future" class to each time block based on real time
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1]);

      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });

  // Get the user input from localStorage and display it in the respective time block
  $(document).ready(function () {
    $(".time-block").each(function () {
      var id = $(this).attr("id");
      var userInput = localStorage.getItem(id);

      if (userInput) {
        $(this).find(".description").val(userInput);
      }
    });
  });

  // Display the current date in the header of the page using Day.js
  $(document).ready(function () {
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  });
});
