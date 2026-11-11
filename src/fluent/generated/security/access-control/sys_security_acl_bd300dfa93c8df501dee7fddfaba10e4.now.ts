import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bd300dfa93c8df501dee7fddfaba10e4'],
    description:
        'Allow delete for records in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.Developer.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_688229_smart_t_0.Developer'],
    table: 'x_688229_smart_t_0_smart_travel_details',
})
