import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['e3e89d8693549b141dee7fddfaba100b'],
    type: 'onChange',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_e3e89d8693549b141dee7fddfaba100b.client.js'),
    name: 'Togger Return Date',
    description:
        'If the Retun field is checked then the Return date field should be displyed and it should be mandatory',
    view: 'Semp',
    field: 'return',
})
