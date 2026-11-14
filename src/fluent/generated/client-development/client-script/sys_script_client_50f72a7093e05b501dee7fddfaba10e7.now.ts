import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['50f72a7093e05b501dee7fddfaba10e7'],
    type: 'onChange',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_50f72a7093e05b501dee7fddfaba10e7.client.js'),
    name: 'Convert Description Text',
    field: 'description',
})
