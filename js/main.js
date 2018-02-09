$("#btn_contacto").click(function(){
	let objeto = {};
	$(".form-control").each(function(){
		$(this).parent().removeClass('has-error');
		if($(this).val() == ""){
			$(this).parent().addClass('has-error');
		}else{
			objeto[$(this).attr('name')] = $(this).val();
		}
	});
	console.log(objeto);
});
$("form-control").keypress(function(){
	$(this).parent().removeClass('has-error');
});
