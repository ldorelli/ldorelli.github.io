$( document ).ready(function() {

	$("#navlink li").click(function(event){
	    var cls = $(this).attr("class");
	    var cid = $(this).attr("id");
	    cid = cid.slice(0, -2) + 'pg'

	    $(this).parent().children().each(function() {
	   		var id = $(this).attr('id') 
	   		var cls = $(this).attr('class')
	   		if (cls == "active") {
	   			$('#' + id.slice(0, -2) + 'pg').removeClass('active')
	   			$('#' + id.slice(0, -2) + 'pg').hide()
	   		}
	    });
	   	$(this).addClass('active')
		$('#' + cid).show()
	});
});
