$(document).ready(function(){

  // Code
  // Click on button
  // $(document).on('click', 'button', function(){
  //
  // }) // Click Button
  //
  // // Keypress on input
  // $('input').keypress(function(event){
  //   var userNewTodo = $('input').val();
  //   if (event.which == 13) {
  //
  //   }
  // });

  //  http://157.230.17.132:3017/todos

  getTodosList();



  //////////////////////////////////////////////////
  // F U N C T I O N S
  //////////////////////////////////////////////////

  // FX GET TODOLIST FROM API
  function getTodosList() {
    $.ajax ({
      url: 'http://157.230.17.132:3017/todos',
      method: 'GET',
      success : function(data) {
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
            text: todo.text
          }
          var html = template(context);
          $('.list-todos').append(html);
        } // Loop
      }, // success
      error : function(request, state, errors) {
        alert('errors');
      } // error
    }); // ajax
  }


//////////
});
