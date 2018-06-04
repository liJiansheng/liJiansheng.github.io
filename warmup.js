$(document).ready(function() {
// JavaScript Document
var total= 0;
	var index = 0;
	var exerciseArray = [];
	
$.getJSON("hip.json", function(data){
	console.log(data);
});
console.log("Starting warmup");

$("#add").click(function(){
	seeTask();
	
});



function seeTask(){
	var taskObj = {};
	/*taskObj.warmup = exerciseArray[0].warmup;
	console.log(exerciseArray[0].warmup);*/
}

});
