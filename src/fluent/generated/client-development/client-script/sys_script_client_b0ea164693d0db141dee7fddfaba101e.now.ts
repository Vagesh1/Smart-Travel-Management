import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['b0ea164693d0db141dee7fddfaba101e'],
    type: 'onSubmit',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_b0ea164693d0db141dee7fddfaba101e.client.js'),
    name: 'Abort Submission',
})
