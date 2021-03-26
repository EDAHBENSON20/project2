 $(document).ready(function(){
   //Our code will go here
    $("#goal-button").click(function(){
      $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    });

 });
 
