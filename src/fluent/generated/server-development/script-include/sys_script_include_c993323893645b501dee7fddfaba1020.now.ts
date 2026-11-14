import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['c993323893645b501dee7fddfaba1020'],
    name: 'getweatherinfo',
    script: Now.include('./sys_script_include_c993323893645b501dee7fddfaba1020.server.js'),
    description: 'To get the weather details and populate on destination field',
    apiName: 'x_688229_smart_t_0.getweatherinfo',
    clientCallable: true,
    mobileCallable: false,
    active: true,
    protectionPolicy: 'read',
})
