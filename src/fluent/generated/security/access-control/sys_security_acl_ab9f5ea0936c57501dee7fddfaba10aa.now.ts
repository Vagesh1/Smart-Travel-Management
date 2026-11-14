import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ab9f5ea0936c57501dee7fddfaba10aa'],
    description:
        'Allow write for visa_details in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.admin.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_688229_smart_t_0.admin'],
    table: 'x_688229_smart_t_0_smart_travel_details',
    field: 'visa_details',
})
