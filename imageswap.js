$(document).ready(function(){
 $("#btnswap").click(function(){	

 var x = $("#dd1").val(); //read value from first dropdown list
 var y = $("#dd2").val(); //read value from second dropdown list
 
 var m = $("#"+x).attr("src"); //read src for selected value of first dropdown list
 var z = $("#"+y).attr("src"); //read src for selected value of second dropdown list
 
  $("#"+x).attr("src",z); //swap src of y to x ;
  $("#"+y).attr("src",m); //swap src of x to y;
 });
});
 