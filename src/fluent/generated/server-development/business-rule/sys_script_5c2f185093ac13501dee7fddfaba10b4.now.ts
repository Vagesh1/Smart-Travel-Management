import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['5c2f185093ac13501dee7fddfaba10b4'],
    name: 'Bookings by same caller',
    table: 'x_688229_smart_t_0_smart_travel_details',
    when: 'before',
    action: ['insert'],
    script: Now.include('./sys_script_5c2f185093ac13501dee7fddfaba10b4.server.js'),
})
