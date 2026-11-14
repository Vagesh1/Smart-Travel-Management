function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below

   var des = g_form.getValue("description");

   var cdes = toTitleCase(des);

   //g_form.setValue("description");

   control.setValue(cdes);

   


   
}