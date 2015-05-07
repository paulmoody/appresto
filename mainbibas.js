var app = {

	
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
    	
	    $.ajax({
	            url: "http://www.flashclicks.com.ve/rest/api/wines",
	            type: "GET",
	
	            contentType: 'application/json; charset=utf-8',
	            success: function(resultData) {
	                //here is your json.
	                  // process it
	                  //alert(resultData);
	                  this.dibujarRegistrosParam(registrosJson);

	
	            },
	            error : function(jqXHR, textStatus, errorThrown) {
	            },
	
	            timeout: 120000,
        });
    	
    	//this.dibujarRegistrosParam(registrosJson);
	}
};

app.initialize();

//app.dibujarRegistrosParam(registrosJson);
