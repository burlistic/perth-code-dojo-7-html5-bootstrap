"use strict";

(function(){

$.getJSON( "http://perthcodedojo7service-pmezdnzk4k.elasticbeanstalk.com/api/users/", function( data ) {
  $( ".result" ).html( data );

  var items = [];
  $.each( data.users, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val.firstName + " " + val.lastName + "</li>" );
  });

$( ".members" ).html(items);


});

}());