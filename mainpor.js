var app = {

	
	dibujarRegistrosParam: function(arr) {
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<arr.length; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list').append('<li><a href="' + e.title + '"><img src="'+e.image+'"><br><span class="categoria" style="width: 100%">'+e.lastName+'</span></a></ul>');
    	    																	  																	
    	    	}
	},
	
	 renderHomeView: function() {
               
                $('body').html(this.homeTpl());
 
    },
	
	  
    initialize: function() {
    	this.homeTpl = Handlebars.compile($("#home-tpl").html());
    	this.renderHomeView();
    	this.dibujarRegistrosParam(registrosJson);
	}
};

app.initialize();

//app.dibujarRegistrosParam(registrosJson);
