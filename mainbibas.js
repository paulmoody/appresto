var app = {

	//--------------------------------------------------------------
	
	var rootURL = "http://localhost/rest/api/wines";
	
	//findAll();
	
	function findAll() {
		console.log('findAll');
		$.ajax({
			type: 'GET',
			url: rootURL,
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

	
	//------------------------------------------------------------------
	
	
	dibujarRegistrosParam: function(arr) {
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<arr.length; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list').append('<li><img src="img/bibas'+ e.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + e.firstName  +'</span><br><span class="categoria" style="width: 100%">'+e.title+'</span><br>350 Bfs<br><span class="categoria" style="width: 100%">' + e.lastName  +'</span></a></li>');
    	    																	  																	
    	    	}
	},
	
	 renderHomeView: function() {
               
                $('body').html(this.homeTpl());
 
    },
	
	  
    initialize: function() {
    	this.homeTpl = Handlebars.compile($("#home-tpl").html());
    	this.renderHomeView();    	
    	//this.dibujarRegistrosParam(registrosJson);
    	findAll();
	}
};

app.initialize();

//app.dibujarRegistrosParam(registrosJson);
