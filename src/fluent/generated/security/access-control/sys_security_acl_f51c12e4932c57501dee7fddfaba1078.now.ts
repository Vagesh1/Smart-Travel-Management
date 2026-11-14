import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f51c12e4932c57501dee7fddfaba1078'],
    description:
        'Allow write for passport_details in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.admin.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_688229_smart_t_0.admin'],
    table: 'x_688229_smart_t_0_smart_travel_details',
    field: 'passport_details',
})
