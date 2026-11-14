function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below

   var sdes = g_form.getValue("short_description");

   var csdes = toTitleCase(sdes);

   control.setValue(csdes);
   
}