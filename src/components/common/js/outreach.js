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
  show (index) {
    return index
  }
}
