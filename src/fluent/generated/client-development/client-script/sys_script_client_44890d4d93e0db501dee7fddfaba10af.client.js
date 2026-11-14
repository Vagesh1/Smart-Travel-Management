function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   var ga = new GlideAjax('getweatherinfo'); // Script inclde name from your script
   ga.addParam('sysparm_name', 'userdetails'); // Add Parameter for server-side function
   ga.addParam('sysparm_caller', newValue);
   ga.getXMLAnswer(function(answer){

   var obj = JSON.parse(answer);

   g_form.setValue('title', obj.tt);
   g_form.setValue('manager', obj.mg);

   });
   
}