$(document).ready(function(){

  // Code
  //  http://157.230.17.132:3017/todos

  // Get todo list
  getTodosList();

  // Click button
  $('.add-todo-container button').click(function(){
    // Get input value
    var todoValue = $('.add-todo-container input').val();
    addNewTodo(todoValue);
  }); // Click button

  // Keypress input
  $('.add-todo-container input').keypress(function(event){
    var todoValue = $('.add-todo-container input').val();
    if (event.which == 13) {
      addNewTodo(todoValue);
    }
  }); // Keypress input

  // Delete click
  $(document).on('click', 'i.delete-todo', function() {
    var iconDelete = $(this);
    var idToDelete = iconDelete.parent().attr('data-id');
    deleteTodo(idToDelete);
  }); // Delete click



  //////////////////////////////////////////////////
  // F U N C T I O N S
  //////////////////////////////////////////////////

  // FX GET TODOLIST FROM API
  function getTodosList() {
    $.ajax ({
      url: 'http://157.230.17.132:3017/todos',
      method: 'GET',
      success: function(data) {
        // Get API content
        var listTodos = data;

        // Handlebars source
        var source = $('#todoolean-template').html();
        var template = Handlebars.compile(source);

        // Loop
        // Print all the API items
        for (var i = 0; i < listTodos.length; i++) {
          var todo = listTodos[i];
          // Handlebars injection
          var context = {
            text: todo.text,
            id: todo.id
          }
          var html = template(context);
          var todoValue = $('.add-todo-container input').val('');
          $('.list-todos').append(html);
        } // Loop
      }, // success
      error: function(request, state, errors) {
        alert('errors');
      } // error
    }); // ajax
  } // FX getTodosList



  // FX ADD NEW TODO
  function addNewTodo(todoValue) {
    $.ajax ({
      url: 'http://157.230.17.132:3017/todos',
      method: 'POST',
      data: {
        text: todoValue
      },
      success: function(data) {
        $('.list-todos').html('');
        getTodosList();
      }, // success
      error: function(request, state, errors) {
        alert('errors');
      } // error
    }); // ajax
  } // FX addNewTodo



  // FX DELETE TODO
  function deleteTodo(id) {
    $.ajax ({
      url: 'http://157.230.17.132:3017/todos/' + id,
      method: 'DELETE',
      success: function(data) {
        $('.list-todos').html('');
        getTodosList();
      }, // success
      error: function(request, state, errors) {
        alert('errors');
      } // error
    }); // ajax
  } // FX addNewTodo


//////////
});
