// When the page loads, have a button on the DOM that reads Generate.
//Put it on HTML
// Upon clicking that button, append a new container onto the DOM.

// That new container should have two buttons, one that reads Delete, the other that reads Change Color.

// Additionally, there should be text that provides a number in the container.
// The number should be the number of times the Generate button has been clicked so far.

// The Delete button should delete JUST the container that button is in.

// The Change Color button should change the background-color of the container to red.

// The default (or normal) state of the background-color should be yellow.

// Clicking the Change Color button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.

$(document).ready(function() {

  GenerateButton();

  $('.button').on('click',function(){
    console.log("AYYYY BABY");
    TimesClicked();
    $('#master').append('Number of times clicked: ' + counter );
    $('#holder').append('<button class="button" id="delete">Delete</button>');
    // $(this).text();
  });







});

var counter = 0;

function TimesClicked() {
    counter ++ ;}
function GenerateButton() {
  $('div').append('<button class="button">Generate</button>');
  console.log("why is this happening on its own");
}

function RemoveGenerate() {
  $('#delete').on('click',function(){
    $('.button').remove();
  });
}
