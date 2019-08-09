export default [
    {
        path: '/home',
        icon: 'bank',
        title: 'Theoverallsituation'
    },
    {
        path: '/home/event/analysis',
        icon: 'snippets',
        title: 'Contentmonitoring'
    },
    {
        icon: 'bar-chart',
        title: 'Agroupmonitoring',
        children: [
            {
                path: '/home/account/behavior',
                title: 'Accountbehavior'
            },
            {
                path: '/home/group/characteristics',
                title: 'Groupcharacteristics'
            }
        ]
    },
    {
        path: '/home/entity/relationship',
        icon: 'apartment',
        title: 'associationanalysis'
    },
    {
        path: '/home/info/search',
        icon: 'dribbble',
        title: 'Monitoringconfiguration'
    },
    {
        icon: 'file-add',
        title: 'Collecttheconfiguration',
        children: [
            {
                path: '/home/account',
                title: 'accountmanagement'
            },
            {
                path: '/home/group',
                title: 'Agroupmonitoring'
            },
            {
                path: '/home/account/1',
                title: 'Collectionkeywords'
            },
            {
                path: '/home/operation',
                title: 'operationmonitoringandcontrolling'
            },
            {
                path: '/home/account/2',
                title: 'Buffsgroup'
            }
        ]
    },
    {
        icon: 'setting',
        title: 'systemmanagement',
        children: [
            {
                path: '/home/user',
                title: 'usercontrol'
            },
            {
                path: '/home/dept',
                title: 'divisionalmanagement'
            },
            {
                path: '/home/role',
                title: 'rolemanagement'
            },
            {
                path: '/home/function',
                title: 'functionmanagement'
            },
            {
                path: '/home/log',
                title: 'operationlog'
            }
        ]
    },
]
