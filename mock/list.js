import mock from 'mockjs'

export const list = mock.mock('/list/analysis',{
    list:[
        {   
            'key': 0,
            'tab':'监测管理',
            'title': '列表展示',
            'children|5-10':[
                {
                    "title|3-8":'@title'
                }
            ]
        },
        {
            'key': 1,
            'tab':"监测分析",
            'children|5-10':[
                {
                    "title|3-4":'@title'
                }
            ]
        }
    ]
})

export const lists = mock.mock('/list/info/search',{
    list:[
        {   
            'key': 0,
            'tab':'信息',
            'title':'列表展示',
            'children|5-10':[
                {
                    "title|3-8":'@title'
                }
            ]
        },
        {
            'key': 1,
            'tab':"账号",
            'title':'账户名称',
            'children|5-10':[
                {
                    "title|3-4":'@title'
                }
            ]
        },
        {
            'key': 2,
            'tab':"群组",
            'title':'群组名称',
            'children|5-10':[
                {
                    "title|3-4":'@title'
                }
            ]
        }
    ]
})