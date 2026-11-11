import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d530c9fa93c8df501dee7fddfaba1069'],
    description:
        'Allow read for records in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.Developer.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_688229_smart_t_0.Developer'],
    table: 'x_688229_smart_t_0_smart_travel_details',
})
