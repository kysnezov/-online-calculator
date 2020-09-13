$( function() {
    $( "#slider1" ).slider({
      range: "min",
      value: 1000,
      min: 1000,
      max: 3000000,
      animate: "show",
      slide: function( event, ui ) {
        $( "#num1" ).val( ui.value );
      }
    });
    $( "#num1" ).val($( "#slider1" ).slider( "value" ) );
});
$(function() {
    $( "#slider2" ).slider({
      range: "min",
      value: 1000,
      min: 1000,
      max: 3000000,
      animate: "show",
      slide: function( event, ui ) {
        $( "#num2" ).val( ui.value );
      }
    });
    $( "#num2" ).val($( "#slider2" ).slider( "value" ) );
  } );
$( function() {
    $( "#pitcer" ).datepicker();
  } );
