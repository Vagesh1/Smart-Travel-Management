var getweatherinfo = Class.create();
getweatherinfo.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    getInfo: function() {


    },

    getTemp: function(cityName) {

        // Integration logic will come here

	var city = cityName ? cityName : this.getParameter("sysparm_city");

        return "Weather seems normal at " + city;

    },

    userdetails: function() {

        var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', this.getParameter('sysparm_caller'));
        gr.query();

        var obj = {};

        if (gr.next()) {

            obj.tt = gr.getValue('title');
            obj.mg = gr.getDisplayValue('manager');

        }

        return JSON.stringify(obj);
    },

    type: 'getweatherinfo'
});