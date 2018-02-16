$(function(){
  $("#foodSubmit").click(function(e) {
    e.preventDefault();

    var food = $("#foodInput").val();

    var myUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients=" + food + "&limitLicense=false&number=3&ranking=1";
    $.ajax(function() {
      url: myUrl,
      headers: {"X-Mashape-Key": "V4pZxYFBj6mshOk96fvs5m0NiIxVp1eBKPVjsnX6slS0dIjFVb",
                "Accept": "application/json"
      },
      type: "GET",
      dataType: "json",
      success: getRecipeUrl
    });
  });
});

function getRecipeUrl(data) {
	var length = data.length;
	for(var i = 0; i < length; i++){
		var id = d[i]["id"];
		$.ajax({
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information?includeNutrition=false',
			headers: {
				'X-Mashape-Key':'V4pZxYFBj6mshOk96fvs5m0NiIxVp1eBKPVjsnX6slS0dIjFVb',
				'Accept':'application/json'
			},
			type: 'GET',
			dataType: "json"
		}).done(function(data){
			if (myload) {
				addToCarousel(data);
			}
			else {
				searchResult(data);
			}
		});
	}
}
