var testlet = '这是引入外部js标题';

export function testfunc (text) {
  return text;
}
export let user = {
  full_name: function () {
    return this.fname + ' ' + this.lname;
  },
  title: testlet,
  backStr (text) {
    return '调用方法:' + text;
  }
};
user.fname = '王';
user.lname = '涛';

export let datas = {
  Items: [
    {
      title: 'title1',
      icon: 'ios-navigate',
      name: '1',
      path: 'title1',
      children: [
        {
          name: '1-1',
          item: 'pageOne',
          path: '/option1'
        },
        {
          name: '1-2',
          item: 'userView',
          path: '/userView'
        }
      ]
    },
    {
      title: '流程管理',
      icon: 'ios-analytics',
      name: '2',
      path: 'title2',
      children: [
        {
          item: '创建流程',
          name: '2-1',
          path: '/create'
        },
        {
          item: '流程部署',
          name: '2-2',
          path: '/deploy'
        },
        {
          item: '我的任务',
          name: '2-3',
          path: '/myTask'
        },
        {
          item: '历史任务',
          name: '2-4',
          path: '/theree'
        }
      ]
    },
    {
      title: 'title4',
      icon: 'ios-analytics',
      name: '4',
      path: 'title4',
      children: [
      ]
    }
  ],
  columns: [
    {
      type: 'selection',
      align: 'center',
      fixed: 'left',
      width: 60
    },
    {
      title: '姓名',
      key: 'name',
      fixed: 'left',
      render: (h, params) => {
        return h('div', [
          h('Icon', {
            props: {
              type: 'person'
            }
          }),
          h('strong', params.row.name)
        ]);
      }
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '国籍',
      key: 'province'
    },
    {
      title: '城市',
      key: 'city'
    },
    {
      title: '地址',
      key: 'address'
    },
    {
      title: '大小',
      key: 'zip'
    }
  ],
  data: [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      province: 'America',
      city: 'New York',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    },
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      province: 'America',
      city: 'New York',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    },
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      province: 'America',
      city: 'New York',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    }
  ],
  show (index) {
    return index
  }
}
