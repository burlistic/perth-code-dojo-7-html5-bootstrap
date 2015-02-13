"use strict";

(function(){

$.getJSON( "http://localhost:3000/api/users", function( data ) {
  $( ".result" ).html( data );
  //alert(data);
  //alert( "Load was performed." );

  var items = [];
  $.each( data.users, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val.firstName + " " + val.lastName + "</li>" );
  });

$( ".members" ).html(items);


});

}());