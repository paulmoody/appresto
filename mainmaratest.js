//alert(registrosJson[0].firstName);

//List1
var out = "";
    	    	var i;
    	    	for(i = 0; i<3; i++) 
    	    	{
    	    		e = maraJson[i];
    	    		$('.mara1').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >'+e.precio+'</p><label for="name2" style="color: green;font-size: 15px; ">'+e.precio+' Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 3; i<5; i++) 
    	    	{
    	    		e = maraJson[i];
    	    		$('.mara2').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsfasd</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 5; i<7; i++) 
    	    	{
    	    		e = maraJson[i];
    	    		$('.mara3').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 7; i<arr.length; i++) 
    	    	{
    	    		e = maraJson[i];
    	    		$('.mara4').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 9; i<arr.length; i++) 
    	    	{
    	    		e = maraJson[i];
    	    		$('.mara5').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
