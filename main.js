$( "#clickme" ).click(function() {
    $( "#book" ).fadein( "slow", function() {
      alert( "Animation complete." );
    });
  });
$( "#clickme2" ).click(function() {
    $( "#book" ).fadeout( "slow", function() {
      alert( "Animation complete." );
    });
  });


  for ( var i = 0; i < 5; i++ ) {
    $( "<div>" ).appendTo( document.body );
  }
  $( "div" ).click(function() {
    $( this ).hide( 2000, function() {
      $( this ).remove();
    });
  });

  $( "#target" ).toggle(function() {
    alert( "First handler for .toggle() called." );
  }, function() {
    alert( "Second handler for .toggle() called." );
  });

  $( "#target" ).dblclick(function() {
    alert( "Handler for .dblclick() called." );
  });