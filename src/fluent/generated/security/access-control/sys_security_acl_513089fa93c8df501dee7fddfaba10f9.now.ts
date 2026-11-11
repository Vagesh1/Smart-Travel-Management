import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['513089fa93c8df501dee7fddfaba10f9'],
    description:
        'Allow create for records in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_688229_smart_t_0.user'],
    table: 'x_688229_smart_t_0_smart_travel_details',
})
