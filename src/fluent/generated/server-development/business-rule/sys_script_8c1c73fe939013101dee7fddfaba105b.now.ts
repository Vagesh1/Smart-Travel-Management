import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['8c1c73fe939013101dee7fddfaba105b'],
    name: 'Two Days Validation',
    table: 'x_688229_smart_t_0_smart_travel_details',
    when: 'before',
    action: ['insert'],
    message: '<p>Book the Ticket two days before travel date</p>',
    addMessage: true,
    filterCondition: 'start_date<=javascript:gs.endOfTomorrow()^EQ',
    abortAction: true,
    script: Now.include('./sys_script_8c1c73fe939013101dee7fddfaba105b.server.js'),
})
