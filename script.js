$(function(){
  $("#foodSubmit").click(function(e) {
    e.preventDefault();

    var food = $("#foodInput").val();

    var myUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients=" + food + "&limitLicense=false&number=3&ranking=1";
    $.ajax({
      url: myUrl,
      headers: {
        'X-Mashape-Key': 'V4pZxYFBj6mshOk96fvs5m0NiIxVp1eBKPVjsnX6slS0dIjFVb',
        'Accept': 'application/json'
      },
      type: "GET",
      dataType: "json",
      success: getRecipeUrl,
      error: function(e) {
        console.log(e);
        $("#recipeHeader").html("Invalid request");
      }
    });
  });
});

function getRecipeUrl(data) {
  $("#recipeHeader").html("Your recipes:");
  $("#foodOutput").html("");
	$.each(data, function(index, obj){
		var id = obj.id;
    console.log(id);
		$.ajax({
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information?includeNutrition=false',
			headers: {
				'X-Mashape-Key':'V4pZxYFBj6mshOk96fvs5m0NiIxVp1eBKPVjsnX6slS0dIjFVb',
				'Accept':'application/json'
			},
			type: 'GET',
			dataType: "json",
      success: output,
      error: function(e) {
        console.log(e);
        $("#recipeHeader").html("Invalid request");
      }
		});
	});
}

function output(data) {
  console.log(data);
  var recipe = data.sourceUrl;
  $("#foodOutput").append("<li><a target='_blank' href='" + recipe + "'>" + recipe + "</a></li>");
}
