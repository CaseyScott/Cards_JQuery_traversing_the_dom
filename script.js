/*$(".stream-nav").on("click", function() { 
    /*A selector to match all cards in all streams /
    
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
}); */

$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});

	// Toggle the visibility of the paragraph when a button is clicked 
	$("button").click(function(){
		$(this).prev().slideToggle('slow');
	});
	
	$("images").click(function(){
	    $(this).next().children("p").slideDown("slow");
	});
	
	$(".card").click(function(){
	    $(this).toggleClass("cardClickHighlight");
	    
	});
	
	$("#select_btn").click(function(){
		$(".card:not(.cardClickHighlight)").hide();
	});
	
	$("#all_btn").click(function(){
		$(".card").show();
	});
});