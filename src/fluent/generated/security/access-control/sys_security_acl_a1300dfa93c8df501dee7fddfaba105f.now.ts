import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a1300dfa93c8df501dee7fddfaba105f'],
    description:
        'Allow write for records in x_688229_smart_t_0_smart_travel_details, for users with role x_688229_smart_t_0.Developer.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_688229_smart_t_0.Developer'],
    table: 'x_688229_smart_t_0_smart_travel_details',
})
