import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['74dc2a7c93e05b501dee7fddfaba1044'],
    type: 'onChange',
    table: 'x_688229_smart_t_0_smart_travel_details',
    isolateScript: true,
    script: Now.include('./sys_script_client_74dc2a7c93e05b501dee7fddfaba1044.client.js'),
    name: 'Convert Short description text',
    field: 'short_description',
})
