import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e1300dfa93c8df501dee7fddfaba106a'],
    description:
        'Allow write for records in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.user, and if the ACL script returns true.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_688229_smart_t_0.user'],
    table: 'x_688229_smart_t_0_smart_travel_details',
    script: "answer = current.getValue('caller') == gs.getUserID();",
})
