import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a1b43af893645b501dee7fddfaba1087'],
    localOrExisting: 'Existing',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['admin'],
    name: 'getweatherinfo',
})
