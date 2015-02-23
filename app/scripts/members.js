"use strict";

(function(){

$.getJSON( "https://api.meetup.com/2/members?group_id=15388882&key={KEY}&callback=?", function( data ) {	
	var users = [];
    $.each( data.results, function( key, val ) {
		var bio = "";
		var twitterString = "";
		var photoLink = "";
		
		if (val.bio) {
			bio = "Bio: " + val.bio + "<br>";
		}
		
		if (val.photo) {
			photoLink = val.photo.thumb_link;
			photoLink = "<img src=" + photoLink + "><br>"		
		}
		
		if (val.other_services.twitter) {
			var twitterHandle = val.other_services.twitter.identifier;
			twitterString = "Twitter: " + twitterHandle + "<br>";
		}
		
		users.push( "<div id='" + key + "'>" + "Name: " + val.name + "<br>" + bio + photoLink + twitterString + "</div><hr>" );
    });
	
	$( ".members" ).html(users);
});

}());