function onSubmit() {
   //Type appropriate comment here, and begin script below

 var st = g_form.getValue("state");

 if(st == 7){

g_form.addErrorMessage("Please chose Other Options");

return false;

 }

 return true;
 
}