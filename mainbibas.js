var app = {

					 

    	    	
    	    	dibujarRegistrosParam: function(arr) {
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<10; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list1').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >'+e.precio+'</p><label for="name2" style="color: green;font-size: 15px; ">'+e.precio+' Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 10; i<13; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list2').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsfasd</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 13; i<16; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list3').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 16; i<20; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list4').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 20; i<29; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list5').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};
    	    	
    	    	for(i = 29; i<35; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list6').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ e.firstName +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>');
															  																	
    	    	};





    	    	
    	    	
    	    	

    	    
    	    	
	//},
				
				/*$.ajax({
					type: 'GET',
					url:  "http://www.flashclicks.com.ve/rest/api/wines/carnes",
					dataType: "json", // data type of response
					success: function(data){
					
							
						var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
						$.each(list, function(index, wine) {
						
							//$('.employee-list').append('<li><img src="img/bibas'+ wine.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + wine.name  +'</span><br><span class="categoria" style="width: 100%">'+wine.name+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + wine.name  +'</span></a></li>');
							$('.employee-list5').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ wine.name +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>').listview('refresh');
						
						
						});
	

					}
				});*/





	},
	
	
	renderHomeView: function() {
               
                $('body').html(this.homeTpl());
 
    },
	
	  
    initialize: function() {
    	this.homeTpl = Handlebars.compile($("#home-tpl").html());
    	this.renderHomeView();    	
    	this.dibujarRegistrosParam(registrosJson);


    	//findAll();
	}
};

app.initialize();

//app.dibujarRegistrosParam(registrosJson);
