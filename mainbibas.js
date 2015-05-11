var app = {

	//--------------------------------------------------------------
	
	//var rootURL = "http://localhost/rest/api/wines";
	
	/*findAll();
	
	function findAll() {
		console.log('findAll');
		$.ajax({
			type: 'GET',
			url: "http://localhost/rest/api/wines",
			dataType: "json", // data type of response
			success: renderList
		});
	}

	
	function renderList(data) {
		// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
		var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
	
		$('#wineList li').remove();
		$.each(list, function(index, wine) {
			$('#wineList').append('<li><a href="#" data-identity="' + wine.product_id + '">'+wine.name+'</a></li>');
		});
	}

	*/
	//------------------------------------------------------------------
	
	dibujarRegistrosParam: function() {
    	    	/*var out = "";
    	    	var i;
    	    	for(i = 0; i<arr.length; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list').append('<li><img src="img/bibas'+ e.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + e.firstName  +'</span><br><span class="categoria" style="width: 100%">'+e.title+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + e.lastName  +'</span></a></li>');
    	    																	  																	
    	    	}
    	    	*/
    	    	console.log('findAll');
				$.ajax({
					type: 'GET',
					url:  "http://192.168.1.112/rest/api/wines/carnes",
					dataType: "json", // data type of response
					success: function(data){
					
							
						var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
						$.each(list, function(index, wine) {
						
							//$('.employee-list').append('<li><img src="img/bibas'+ wine.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + wine.name  +'</span><br><span class="categoria" style="width: 100%">'+wine.name+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + wine.name  +'</span></a></li>');
							$('.employee-list2').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ wine.name +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>').listview('refresh');
						
						
						});
	

					}
				});
				
				$.ajax({
					type: 'GET',
					url:  "http://localhost/rest/api/wines/carnes",
					dataType: "json", // data type of response
					success: function(data){
					
							
						var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
						$.each(list, function(index, wine) {
						
							//$('.employee-list').append('<li><img src="img/bibas'+ wine.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + wine.name  +'</span><br><span class="categoria" style="width: 100%">'+wine.name+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + wine.name  +'</span></a></li>');
							//$('.employee-list1').append('<li><a href="#"><img src="img/bibas.jpg"><h2>Google Chrome</h2><p>Google Chrome is a free, open-source web browser. Released in 2008.</p></a></li>');
							$('.employee-list1').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ wine.name +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>').listview('refresh');
						
						});
	

					}
				});
				
				$.ajax({
					type: 'GET',
					url:  "http://192.168.1.112/rest/api/wines/carnes",
					dataType: "json", // data type of response
					success: function(data){
					
							
						var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
						$.each(list, function(index, wine) {
						
							//$('.employee-list').append('<li><img src="img/bibas'+ wine.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + wine.name  +'</span><br><span class="categoria" style="width: 100%">'+wine.name+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + wine.name  +'</span></a></li>');
							$('.employee-list3').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ wine.name +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>').listview('refresh');
						
						
						});
	

					}
				});
				
				$.ajax({
					type: 'GET',
					url:  "http://192.168.1.112/rest/api/wines/carnes",
					dataType: "json", // data type of response
					success: function(data){
					
							
						var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
						$.each(list, function(index, wine) {
						
							//$('.employee-list').append('<li><img src="img/bibas'+ wine.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + wine.name  +'</span><br><span class="categoria" style="width: 100%">'+wine.name+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + wine.name  +'</span></a></li>');
							$('.employee-list4').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ wine.name +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>').listview('refresh');
						
						
						});
	

					}
				});
				
				$.ajax({
					type: 'GET',
					url:  "http://192.168.1.112/rest/api/wines/carnes",
					dataType: "json", // data type of response
					success: function(data){
					
							
						var list = data == null ? [] : (data.wine instanceof Array ? data.wine : [data.wine]);
						$.each(list, function(index, wine) {
						
							//$('.employee-list').append('<li><img src="img/bibas'+ wine.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + wine.name  +'</span><br><span class="categoria" style="width: 100%">'+wine.name+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + wine.name  +'</span></a></li>');
							$('.employee-list5').append('<li class="precio"><a href="#"><img src="img/bibas.jpg"><h2>'+ wine.name +'</h2><p style="display:none" >150</p><label for="name2" style="color: green;font-size: 15px; ">150 Bsf</label><input type="text" name="name2" id="name2" value="" data-clear-btn="true" hidden="hidden" data-role="none"></a></li>').listview('refresh');
						
						
						});
	

					}
				});





	},
	
	
	renderHomeView: function() {
               
                $('body').html(this.homeTpl());
 
    },
	
	  
    initialize: function() {
    	this.homeTpl = Handlebars.compile($("#home-tpl").html());
    	this.renderHomeView();    	
    	this.dibujarRegistrosParam();
    	//findAll();
	}
};

app.initialize();

//app.dibujarRegistrosParam(registrosJson);
