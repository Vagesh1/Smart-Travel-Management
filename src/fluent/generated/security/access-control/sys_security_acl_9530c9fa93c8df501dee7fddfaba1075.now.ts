import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9530c9fa93c8df501dee7fddfaba1075'],
    description:
        'Allow read for records in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.admin.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_688229_smart_t_0.admin'],
    table: 'x_688229_smart_t_0_smart_travel_details',
})
