//alert(registrosJson[0].firstName);

//List1
var out = "";
var i;
for(i = 0; i<1; i++) 
{
	e = registrosJson[i];
	$('.piu1').append('<li class="precio"><a href="#"><img src="img/puittosto.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >'+e.precio+'</p><label for="name2" style="color: green;font-size: 15px; ">'+e.precio+' Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none" ></a></li>');
											  																	
};

//Lis2

for(i = 1; i<5; i++) 
{
	e = registrosJson[i];
	$('.piu2').append('<li class="precio"><a href="#"><img src="img/puittosto.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >'+e.precio+'</p><label for="name2" style="color: green;font-size: 15px; ">'+e.precio+' Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
											  																	
};


//List3
for(i = 5; i<8; i++) 
{
	e = registrosJson[i];
	$('.piu3').append('<li class="precio"><a href="#"><img src="img/puittosto.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >'+e.precio+'</p><label for="name2" style="color: green;font-size: 15px; ">'+e.precio+' Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
											  																	
};


//List4
for(i = 8; i<registrosJson.length; i++) 
{
	e = registrosJson[i];
	$('.piu4').append('<li class="precio"><a href="#"><img src="img/puittosto.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >'+e.precio+'</p><label for="name2" style="color: green;font-size: 15px; ">'+e.precio+' Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
											  																	
};
