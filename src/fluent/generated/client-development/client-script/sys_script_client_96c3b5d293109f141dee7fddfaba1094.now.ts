import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['96c3b5d293109f141dee7fddfaba1094'],
    type: 'onLoad',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_96c3b5d293109f141dee7fddfaba1094.client.js'),
    name: 'Make Return field visible',
})
