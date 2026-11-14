function onSubmit() {


    var startdate = g_form.getValue('start_date');
var rtrdate = g_form.getValue('return_date');

if(rtrdate !=""){

if (rtrdate < startdate) {

    g_form.addErrorMessage("Return date cannot be earlier than start date");

    return false;
}

return true;
}
}