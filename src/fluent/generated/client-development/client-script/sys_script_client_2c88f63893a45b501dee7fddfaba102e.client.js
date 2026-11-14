function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   g_form.getReference("destination", callscriptinclude);

   function callscriptinclude(dest)
   {

var ga = new GlideAjax('getweatherinfo'); // Script inclde name from your script
ga.addParam('sysparm_name', 'getTemp'); // Add Parameter for server-side function
ga.addParam('sysparm_city', dest.city);
ga.getXMLAnswer(function(answer){; // Asychronous call. Can also use getXMLWait for synchronous.
 g_form.showErrorBox("destination",answer)

});

   }
   //Type appropriate comment here, and begin script below
   
}