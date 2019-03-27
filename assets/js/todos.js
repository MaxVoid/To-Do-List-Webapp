console.log("JS FILE CONNECTED");

// check/uncheck specific todos by clicking
$("#list").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// delete li items when X is deleted
$("#list").on("click", ".deleteBtn", function(event){
  // selects the parent li of the X that was clicked and runs fadeOut
  $(this).parent().fadeOut(500, function(){
    // function runs after fadeOut has completed, removing the selected li
    $(this).remove();
  });
  // function prevents click function from bubbling up to parent attributes
  event.stopPropagation();
});

// functionality of new todo input field
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grab new todo text from input field, then clears said field
    var newTodo = $(this).val();
    $(this).val("");
    // create new li and add to ul
    // $("#list").append(`<li><i class="fas fa-trash-alt"></i> ${newTodo}</li>`);
    $("#list").append(`<li><span class="deleteBtn"><i class="fas fa-trash-alt"></i></span> ${newTodo}</li>`);
  };
});