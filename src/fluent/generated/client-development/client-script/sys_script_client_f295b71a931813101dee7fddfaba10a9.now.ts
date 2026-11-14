import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['f295b71a931813101dee7fddfaba10a9'],
    type: 'onCellEdit',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_f295b71a931813101dee7fddfaba10a9.client.js'),
    name: 'onCellrdit on state',
    field: 'state',
})
