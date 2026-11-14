function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var isChecked = g_form.getBooleanValue('return');

    if (isChecked) {

        g_form.setDisplay('return_date', true);
        g_form.setMandatory('return_date', true);

    } else {

        g_form.setMandatory('return_date', false);
		g_form.setDisplay('return_date', false);
        

    }

    //Type appropriate comment here, and begin script below

}