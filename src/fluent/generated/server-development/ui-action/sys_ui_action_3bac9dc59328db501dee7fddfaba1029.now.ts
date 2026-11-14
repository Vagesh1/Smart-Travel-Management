import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['3bac9dc59328db501dee7fddfaba1029'],
    table: 'x_688229_smart_t_0_smart_travel_details',
    name: 'In Progress',
    form: {
        showButton: true,
        showLink: true,
        showContextMenu: true,
        style: 'primary',
    },
    client: {
        isUi11Compatible: true,
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {

}`,
    },
    messages: [],
    condition: 'Javascript:(current.state == "1" || current.state =="-5" )',
    script: `
var si = new getweatherinfo();

var msg = si.getTemp(current.destination.getDisplayValue());

gs.addInfoMessage(msg);

current.state = 2;
current.update();

action.setRedirectURL(current);
`,
    showUpdate: true,
    showInsert: false,
})
