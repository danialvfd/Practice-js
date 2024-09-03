var submitButton = document.getElementById("submitButton");
var columnBackgroundRed = document.getElementById ("columnBackgroundRed").style.backgroundColor = "red";

submitButton.addEventListener("click",ShowMessage);
 
function ShowMessage(){
 alert("درخواست شما ثبت شد");
}

$(document).ready(function(){
    $("th, td").click(function(){
      $(this).hide();
    });
  });

  $("p").dblclick(function(){
    $(this).hide();
  });

  $("#p1").mouseenter(function(){
    alert("You entered the <p>");
  });