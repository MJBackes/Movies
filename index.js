$(document).ready(function(){
	$("#contentBody").html("");
	$(document).on("click", "#movieBtn", buildMovieTable);
	$(document).on("click", "#directorBtn", buildDirectorTable);
	});

	$(document).on("click","#createMovieBtn",function(){
		$("#contentBody").html("<form style='width: 100%'>" +
									"<div class='form-group'>" +
										"<label for='Title'>Title</label>" +
										"<input type='text' class='form-control' placeholder='Title' id='title'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Genre'>Genre</label>" +
										"<input type='text' class='form-control' placeholder='Genre' id='genre'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Runtime'>Runtime</label>" +
										"<input type='number' class='form-control' placeholder='Runtime' id='runtime'>" +
									"</div>" +
									"<h4>Director:</h4>" +
									"<div class='form-group'>" +
										"<label for='Prefix'>Prefix</label>" +
										"<input type='text' class='form-control' placeholder='Prefix' id='pre' style='width: 70px'>" +
									"</div>" + 
									"<div class='form-inline'>" +
										"<label for='FirstName'>First Name</label>" +
										"<input type='text' class='form-control' placeholder='First Name' id='first'>" +
										"<label for='Middle Name'>Middle Name</label>" +
										"<input type='text' class='form-control' placeholder='Middle Name' id='middle'>" +
										"<label for='Last Name'>Last Name</label>" +
										"<input type='text' class='form-control' placeholder='Last Name' id='last'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Suffix'>Suffix</label>" +
										"<input type='text' class='form-control' placeholder='Suffix' id='suffix' style='width: 70px'>" +
									"</div>" + 
									"<button id='submitNewMovie' class='btn btn-primary'>Submit</button>" +
								"</form>");
	});
	$(document).on("click",".editMovieBtn",function(event){
		let id = "";
		id += event.target.id;
		id = parseInt(id.split('n')[1]);
		$.ajax({
			type: "GET",
			url: "https://localhost:44344/api/movie/" + id,
			dataType: "json",
			success:function(movie){
						$("#contentBody").html("<form style='width: 100%'>" +
									"<div class='form-group'>" +
										"<label id='titleLabel' for='Title'>Title (ID#: " + id + ")</label>" +
										"<input type='text' class='form-control' value='" + movie.Title + "' id='title'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Genre'>Genre</label>" +
										"<input type='text' class='form-control' value='" + movie.Genre + "' id='genre'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Runtime'>Runtime</label>" +
										"<input type='number' class='form-control' value='" + movie.Runtime + "' id='runtime'>" +
									"</div>" +
									"<h4>Director:</h4>" +
									"<div class='form-group'>" +
										"<label for='Prefix'>Prefix</label>" +
										"<input type='text' class='form-control' value='" + movie.Director.Prefix + "' id='pre' style='width: 70px'>" +
									"</div>" + 
									"<div class='form-inline'>" +
										"<label for='FirstName'>First Name</label>" +
										"<input type='text' class='form-control' value='" + movie.Director.FirstName + "' id='first'>" +
										"<label for='Middle Name'>Middle Name</label>" +
										"<input type='text' class='form-control' value='" + movie.Director.MiddleName + "' id='middle'>" +
										"<label for='Last Name'>Last Name</label>" +
										"<input type='text' class='form-control' value='" + movie.Director.LastName + "' id='last'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Suffix'>Suffix</label>" +
										"<input type='text' class='form-control' value='" + movie.Director.Suffix + "' id='suffix' style='width: 70px'>" +
									"</div>" + 
									"<button id='submitEditedMovie' class='btn btn-primary'>Submit</button>" +
								"</form>");
			}
		})
	});
	$(document).on("click", "#createDirBtn", function(){
				$("#contentBody").html("<form style='width: 100%'>" +
									"<h4>Director:</h4>" +
									"<div class='form-group'>" +
										"<label for='Prefix'>Prefix</label>" +
										"<input type='text' class='form-control' placeholder='Prefix' id='pre' style='width: 70px'>" +
									"</div>" + 
									"<div class='form-inline'>" +
										"<label for='FirstName'>First Name</label>" +
										"<input type='text' class='form-control' placeholder='First Name' id='first'>" +
										"<label for='Middle Name'>Middle Name</label>" +
										"<input type='text' class='form-control' placeholder='Middle Name' id='middle'>" +
										"<label for='Last Name'>Last Name</label>" +
										"<input type='text' class='form-control' placeholder='Last Name' id='last'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Suffix'>Suffix</label>" +
										"<input type='text' class='form-control' placeholder='Suffix' id='suffix' style='width: 70px'>" +
									"</div>" + 
									"<button id='submitNewDirector' class='btn btn-primary'>Submit</button>" +
								"</form>");
	});
	$(document).on("click", ".editDirBtn", function(event){
		let id = "";
		id += event.target.id;
		id = parseInt(id.split('n')[1]);
		$.ajax({
			type:"GET",
			url: "https://localhost:44344/api/director/" + id,
			dataType: "json",
			success: function(director){
										$("#contentBody").html("<form style='width: 100%'>" +
									"<h4 id='heading'>Director #" + id + ":</h4>" +
									"<div class='form-group'>" +
										"<label for='Prefix'>Prefix</label>" +
										"<input type='text' class='form-control' value='" + director.Prefix + "' id='pre' style='width: 70px'>" +
									"</div>" + 
									"<div class='form-inline'>" +
										"<label for='FirstName'>First Name</label>" +
										"<input type='text' class='form-control' value='" + director.FirstName + "' id='first'>" +
										"<label for='Middle Name'>Middle Name</label>" +
										"<input type='text' class='form-control' value='" + director.MiddleName + "' id='middle'>" +
										"<label for='Last Name'>Last Name</label>" +
										"<input type='text' class='form-control' value='" + director.LastName + "' id='last'>" +
									"</div>" +
									"<div class='form-group'>" +
										"<label for='Suffix'>Suffix</label>" +
										"<input type='text' class='form-control' value='" + director.Suffix + "' id='suffix' style='width: 70px'>" +
									"</div>" + 
									"<button id='submitEditedDirector' class='btn btn-primary'>Submit</button>" +
								"</form>");
			}
		});
	});
	$(document).on("click", "#submitNewDirector", function(){
		var director = {Prefix: $("#pre").val(),
						FirstName: $("#first").val(),
						MiddleName: $("#middle").val(),
						LastName: $("#last").val(),
						Suffix: $("#suffix").val()
					};
		$.ajax({
			type: "POST",
			url: "https://localhost:44344/api/director",
			data: director,
			dataType: "json",
			success:function(){
				console.log("successful post");
				buildDirectorTable();
			}
		});
	});
	$(document).on("click", "#submitEditedDirector", function(){
		var director = {Prefix: $("#pre").val(),
						FirstName: $("#first").val(),
						MiddleName: $("#middle").val(),
						LastName: $("#last").val(),
						Suffix: $("#suffix").val()
					};
		$.ajax({
			type:"PUT",
			url: "https://localhost:44344/api/director/" + $("#heading").html().split('#')[1].split(':')[0],
			data: director,
			success: function(){
				console.log("successful put");
				buildDirectorTable();
			}
		});
	});
	$(document).on("click", "#submitNewMovie", function(){
		var movie = {Title: $("#title").val(),
					Genre: $("#genre").val(),
					Runtime: $("#runtime").val(),
					Director:{Prefix: $("#pre").val(),
							  FirstName: $("#first").val(),
							  MiddleName: $("#middle").val(),
							  LastName: $("#last").val(),
							  Suffix: $("#suffix").val()}
	};
		$.ajax({
			type: "POST",
			url: "https://localhost:44344/api/movie",
			data: movie,
			dataType: "json",
			success:function(){
				console.log("successful post");
				buildMovieTable();
			}
		});
	});
		$(document).on("click", "#submitEditedMovie", function(){
		var movie = {Title: $("#title").val(),
					Genre: $("#genre").val(),
					Runtime: $("#runtime").val(),
					Director:{Prefix: $("#pre").val(),
							  FirstName: $("#first").val(),
							  MiddleName: $("#middle").val(),
							  LastName: $("#last").val(),
							  Suffix: $("#suffix").val()}
	};
		$.ajax({
			type: "PUT",
			url: "https://localhost:44344/api/movie/" + parseInt($("#titleLabel").html().split(' ')[2].split(')')[0]),
			data: movie,
			dataType: "json",
			success:function(){
				console.log("successful put");
				buildMovieTable();
			}
		});
	});
function buildMovieTable(){
		$("#contentBody").html("<table id='contentTable' class='table-striped'><tbody id=tableBody><tr id='tableHead'></tr></tbody></table>");
		$.get({
			type: "GET",
			url: "https://localhost:44344/api/movie",
			dataType: "json",
			success: function(movies){
				$("#tableHead").append("<th>Title</th><th>Genre</th><th>Runtime</th><th>Director</th><th>Edit</th>");
				for(let i = 0; i < movies.length; i++){
					let directorName = "";
					if(movies[i].Director.Prefix != null || movies[i].Director.Prefix != undefined)
						directorName += (movies[i].Director.Prefix + " ");
					if(movies[i].Director.FirstName != null || movies[i].Director.FirstName != undefined)
						directorName += (movies[i].Director.FirstName+ " ");
					if(movies[i].Director.MiddleName != null || movies[i].Director.MiddleName != undefined)
						directorName += (movies[i].Director.MiddleName+ " ");
					if(movies[i].Director.LastName != null || movies[i].Director.LastName != undefined)
						directorName += (movies[i].Director.LastName+ " ");
					if(movies[i].Director.Suffix != null || movies[i].Director.Suffix != undefined)
						directorName += (movies[i].Director.Suffix+ " ");
					$("#tableBody").append("<tr><td>" + movies[i].Title 
						+ "</td><td>" + movies[i].Genre 
						+ "</td><td>" + movies[i].Runtime
						+ "</td><td>" + directorName
						+ "</td><td><a class='editMovieBtn' id='editMovieBtn" + movies[i].Id + "' href = '#'>Edit</a></td></tr>");
				}
				$("#tableBody").append("<tr><td></td><td></td><td></td><td></td><td><a id='createMovieBtn' href='#' style='font-size: 24px'>+</a></td></tr>");
			},
			error: function(xhr, options, error){
				console.log(error);
			}
		});
}
function buildDirectorTable(){
		$("#contentBody").html("<table id='contentTable' class='table-striped'><tbody id=tableBody><tr id='tableHead'></tr></tbody></table>");
		$.get({
			type: "GET",
			url: "https://localhost:44344/api/director",
			dataType: "json",
			success: function(directors){
				$("#tableHead").append("<th>Name</th><th>Edit</th>");
				for(let i = 0; i < directors.length; i++){
					let directorName = "";
					if(directors[i].Prefix != null || directors[i].Prefix != undefined)
						directorName += (directors[i].Prefix + " ");
					if(directors[i].FirstName != null || directors[i].FirstName != undefined)
						directorName += (directors[i].FirstName+ " ");
					if(directors[i].MiddleName != null || directors[i].MiddleName != undefined)
						directorName += (directors[i].MiddleName+ " ");
					if(directors[i].LastName != null || directors[i].LastName != undefined)
						directorName += (directors[i].LastName+ " ");
					if(directors[i].Suffix != null || directors[i].Suffix != undefined)
						directorName += (directors[i].Suffix+ " ");
					$("#tableBody").append("<tr><td>" + directorName + " </td><td><a class='editDirBtn' id='editDirBtn" + directors[i].Id + "' href='#'>Edit</a></td></tr>");
				}
				$("#tableBody").append("<tr><td></td><td><a id='createDirBtn' href='#' style='font-size: 24px'>+</a></td></tr>");
			},
			error: function(xhr, options, error){
				console.log(error);
			}
		});
	}
