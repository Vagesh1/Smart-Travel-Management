import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['6878335293d813101dee7fddfaba1049'],
    type: 'onSubmit',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_6878335293d813101dee7fddfaba1049.client.js'),
    name: 'Abort on State Change',
})
