$(document).ready(function(){
	$("#contentBody").html("");
	$(document).on("click", "#movieBtn", buildMovieTable);
	$(document).on("click", "#directorBtn", buildDirectorTable);
	$(document).on("click", "#searchBtn", buildSearchFields);
	});

	$(document).on("click","#createMovieBtn",function(){
		$("#contentBody").html("<form style='width: 100%'>" +
									"<div class='form-group'>" +
										"<canvas hidden id='canvas' width='300' height='450'></canvas>" + 
										"<img id='imgView' width='300' height='450'>" + 
										"<input type='file' onchange='imgChosen(event)' name='img' id='image'>" + 
									"<div>" +
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
		$(document).on("click",".createMovieForDirBtn",function(event){
			id = event.target.id.split('n')[1];
		$("#contentBody").html("<form style='width: 100%'>" + 
									"<div class='form-group'>" +
										"<canvas hidden id='canvas' width='300' height='450'></canvas>" +
										"<img id='imgView' width='300' height='450'>" + 
										"<input type='file' onchange='imgChosen(event)' name='img' id='image'>" + 
									"<div>" +
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
									"<button id='submitNewMovieForDirBtn" + id + "' class=' submitNewMovieForDirBtn btn btn-primary'>Submit</button>" +
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
										"<canvas hidden id='canvas' width='300' height='450'></canvas>" +
										"<img id='imgView' width='300' height='450' src='data:image/png;base64" + movie.Image + "'>" +
										"<input type='file' onchange='imgChosen(event)' name='img' id='image'>" + 
									"<div>" +
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
										"<canvas hidden id='canvas' width='300' height='450'></canvas>" +
										"<img id='imgView' width='300' height='450'>" + 
										"<input type='file' onchange='imgChosen(event)' name='img' id='image'>" + 
									"<div>" +
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
										"<canvas hidden id='canvas' width='300' height='450'></canvas>" +
										"<img id='imgView' width='300' height='450' src='data:image/png;base64" + director.Image + "'>" + 
										"<input type='file' onchange='imgChosen(event)' name='img' id='image'>" + 
									"<div>" +
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
		if(($("#image")[0]).files.length > 0){
			director.Image = convertToBase64String(document.getElementById("imgView"));
		}
		director = handleNullDirectorEntries(movie.Director);
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
						Suffix: $("#suffix").val(),
					};
		if(($("#image")[0]).files.length > 0){
			director.Image = convertToBase64String(document.getElementById("imgView"));
		}
		director = handleNullDirectorEntries(movie.Director);
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
			if(($("#image")[0]).files.length > 0){
			movie.Image = convertToBase64String(document.getElementById("imgView"));
		}
	movie.Director = handleNullDirectorEntries(movie.Director);
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
	$(document).on("click", ".submitNewMovieForDirBtn", function(event){
			let id = parseInt(event.target.id.split('n')[1]);
			var movie = {Title: $("#title").val(),
						Genre: $("#genre").val(),
						Runtime: $("#runtime").val(),
						DirectorId: id
					};
		if(($("#image")[0]).files.length > 0){
			movie.Imagge = convertToBase64String(document.getElementById("imgView"));
		}
					$.ajax({
						type: "POST",
						url: "https://localhost:44344/api/movie",
						dataType:"json",
						data: movie,
						success:function(){
							console.log("successful post");
							buildMovieTable(event,id);
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
		if(($("#image")[0]).files.length > 0){
			movie.Image = convertToBase64String(document.getElementById("imgView"));

		}
		movie.Director = handleNullDirectorEntries(movie.Director);
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
		$(document).on("click", ".dirFilmBtn", function(event){
			id = parseInt(event.target.id.split('n')[1])
			buildMovieTable(event, id);
		})
function buildMovieTable(event, dirId = 0){
		$("#contentBody").html("<table id='contentTable' class='table-striped'><tbody id=tableBody><tr id='tableHead'></tr></tbody></table>");
		$.get({
			type: "GET",
			url: "https://localhost:44344/api/movie",
			dataType: "json",
			success: function(movies){
				$("#tableHead").append("<th></th><th>Title</th><th>Genre</th><th>Runtime(Min)</th><th>Director</th><th></th>");
				for(let i = 0; i < movies.length; i++){
					if(dirId == 0 || dirId == movies[i].DirectorId){
						let directorName = "";
						if(movies[i].Director.Prefix != null && movies[i].Director.Prefix != undefined)
							directorName += (movies[i].Director.Prefix + " ");
						if(movies[i].Director.FirstName != null && movies[i].Director.FirstName != undefined)
							directorName += (movies[i].Director.FirstName+ " ");
						if(movies[i].Director.MiddleName != null && movies[i].Director.MiddleName != undefined)
							directorName += (movies[i].Director.MiddleName+ " ");
						if(movies[i].Director.LastName != null && movies[i].Director.LastName != undefined)
							directorName += (movies[i].Director.LastName+ " ");
						if(movies[i].Director.Suffix != null && movies[i].Director.Suffix != undefined)
							directorName += (movies[i].Director.Suffix+ " ");
						$("#tableBody").append("<tr><td>" + "<img id='imgView' width='300' height='450' src='data:image/png;base64" + movies[i].Image + "'>"
							+ "</td><td>" + movies[i].Title 
							+ "</td><td>" + movies[i].Genre 
							+ "</td><td>" + movies[i].Runtime
							+ "</td><td>" + directorName
							+ "</td><td><a class='editMovieBtn' id='editMovieBtn" + movies[i].Id + "' href = '#'>Edit</a></td></tr>");
					}
				}
				if(dirId == 0){
					$("#tableBody").append("<tr><td></td><td></td><td></td><td></td><td></td><td><a id='createMovieBtn' href='#' style='font-size: 24px'>+</a></td></tr>");
				}else{
					$("#tableBody").append("<tr><td></td><td></td><td></td><td></td><td></td><td><a class='createMovieForDirBtn' id='createMovieForDirBtn" + dirId + "' href='#' style='font-size: 24px'>+</a></td></tr>");
				}
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
				$("#tableHead").append("<th>Name</th><th></th><th></th>");
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
					$("#tableBody").append("<tr>" + 
												"<td><img id='imgView' width='300' height='450' src='data:image/png;base64" + directors[i].Image + "'>" +
												"<td>" + directorName + " </td>" + 
												"<td><a class='dirFilmBtn' id='dirFilmBtn" + directors[i].Id + "' href='#'>Films</a></td>" +
												"<td><a class='editDirBtn' id='editDirBtn" + directors[i].Id + "' href='#'>Edit</a></td>" +
												"</tr>");
				}
				$("#tableBody").append("<tr><td></td><td></td><td></td><td><a id='createDirBtn' href='#' style='font-size: 24px'>+</a></td></tr>");
			},
			error: function(xhr, options, error){
				console.log(error);
			}
		});
	}
	function buildSearchFields(){

	}
	function convertToBase64String(img){
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext("2d");
		context.drawImage(img,0,0);
		var dURL = canvas.toDataURL("image/png");
		return dURL;
	}
	function imgChosen(event){
		var file = event.target.files[0];
		var fReader = new FileReader();
		var imageEle = document.getElementById("imgView");
		fReader.onload = function(event){
			imageEle.src = event.target.result;
		};
		fReader.readAsDataURL(file);
	}
	function replaceNullStringWithUndefined(string){
		if(string == "null")
			return undefined;
		return string;
	}
	function handleNullDirectorEntries(director){
		director.Prefix = replaceNullStringWithUndefined(director.Prefix);
		director.FirstName = replaceNullStringWithUndefined(director.FirstName);
		director.MiddleName = replaceNullStringWithUndefined(director.MiddleName);
		director.LastName = replaceNullStringWithUndefined(director.LastName);
		director.Suffix = replaceNullStringWithUndefined(director.Suffix);
		return director;
	}
