function onLoad() {
   
   var checked = g_form.getBooleanValue('return');
if(checked == false){

	g_form.isMandatory('return_date', false);
	g_form.setDisplay('return_date', false);
	
	
}

   
   
}