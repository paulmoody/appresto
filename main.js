var app = {

    dibujarRegistros: function() {
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<this.registros.length; i++) 
    	    	{
    	    		e = this.registros[i];
    	    		$('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.nombre + ' ' + e.apellido + '</a></li>');
    	    	}
	},
	
	dibujarRegistrosParam: function(arr) {
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<arr.length; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list').append('<li><img src="img/'+ e.id +'.png"><a href="#employees/' + e.id + '">' + e.email  +'<br>'+ e.title  + '<br>' + e.title + '</a></li>');
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
