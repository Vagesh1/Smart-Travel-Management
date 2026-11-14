import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['109f49c693149b141dee7fddfaba1055'],
    type: 'onLoad',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_109f49c693149b141dee7fddfaba1055.client.js'),
    name: 'Hide Return Date',
    description: 'Hide the Return date field whenever user logs in',
    global: false,
    view: 'Semp',
})
