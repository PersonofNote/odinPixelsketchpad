$(document).ready(function() {

	var mouse_paint = false;
	var color = 'black';
	var grid_width = 16;
	var grid_height = 16;
	var squares = grid_width*grid_height;

	function create_grid() {
	   for(var x = 0; x < squares; x++) {
            var square = $("<div class='colorable'></div>");
            //Set square attributes
             $(square).css("width", (820/grid_width));
			 $(square).css("height", (820/grid_height));
			  $(square).click(function() {
  				$(this).css('background-color', color);	
  					});
			  $(square).mouseenter(function() {
  					if (mouse_paint == true)	{
  					$(this).css('background-color', color);
  						}		
  							});
            square.appendTo('.container');
            console.log('Square created');
        }
         console.log('Grid width = ' + grid_width);
            console.log('Grid height = ' + grid_height);
    }


         $(".color" ).click(function() {
		color = this.id;
  		console.log('Paint color is ' + color);	
  	});


    create_grid();


$(".reset" ).click(function() { 
				var user_num = prompt("Enter a number between 1 and 100. (Large numbers might take a second or two to load)", "16");
						if (user_num > 0 && user_num < 100)
								{
									$( '.colorable' ).remove();
									grid_width = user_num;
									grid_height = user_num;
									squares = grid_width*grid_height;
									color = 'black';
									create_grid();
							}
						else alert ("That's not between 1 and 100. Nice try, though!", "16");
					});
   
  
    $( "body" ).mousedown(function() {
   mouse_paint = true;
   console.log('Paint = ' + mouse_paint);
  });

  $( "body" ).mouseup(function() {
 	mouse_paint = false;
   console.log('Paint = ' + mouse_paint);
  });
  });


/*
  	 $(square).click(function() {
  				$(this).css('background-color', color);	
  					});
*/
//Makes sure div is colored on click and also on drag.
/*
   $( '.colorable' ).click(function() {
  		$(this).css('background-color', color);	
  		});


 $( ".colorable" ).mouseenter(function() {
  
  		if (mouse_paint == true)	{
  		$(this).css('background-color', color);
  			}		
  		});

});
*/