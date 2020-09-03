$( "#clickme" ).click(function() {
    $( "#book" ).hide( "slow", function() {
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