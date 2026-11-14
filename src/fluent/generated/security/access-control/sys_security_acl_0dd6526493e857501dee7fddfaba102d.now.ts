import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0dd6526493e857501dee7fddfaba102d'],
    description:
        'Allow read for passport_details in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.user, and if the ACL script returns true.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    script: "answer = current.getValue('caller') == gs.getUserID();",
    roles: ['x_688229_smart_t_0.user'],
    table: 'x_688229_smart_t_0_smart_travel_details',
    field: 'passport_details',
})
