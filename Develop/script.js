// Wrap all code that interacts with the DOM in a call that waits until HTML is loaded
$(document).ready(function () {
  // Add an event listener for click events on the save button allowing you to save user inputwhen the button is clicked
  $(document).ready(function () {
    $(".saveBtn").on("click", function () {});
  });

  $(".saveBtn").on("click", function () {
    // Get the user input from the textarea within the same time block
    var userInput = $(this).siblings(".description").val();

    // Get the ID of the time block (e.g., "hour-9")
    var timeBlockId = $(this).parent().attr("id");

    // Save the user input to local storage with the time block ID as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  $(document).ready(function () {
    // Apply the "past", "present", or "future" class to each time block based on the current hour.
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
