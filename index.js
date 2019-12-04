// $(document).ready(function(){

// });
$("#movieBtn").on("click",function(){
	$("#contentBody").html("");
	var movies;
	$.get({
		type: "GET",
		url: "https://localhost:44344/api/movie",
		dataType: "json",
		success: function(movies){
			console.log(movies);
		},
		error: function(xhr, options, error){
			console.log(error);
		}
	});
})