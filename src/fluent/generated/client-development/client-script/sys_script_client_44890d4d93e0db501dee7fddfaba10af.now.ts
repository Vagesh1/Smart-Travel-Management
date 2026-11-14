import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['44890d4d93e0db501dee7fddfaba10af'],
    type: 'onChange',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_44890d4d93e0db501dee7fddfaba10af.client.js'),
    name: 'populateuserdetails',
    field: 'caller',
})
