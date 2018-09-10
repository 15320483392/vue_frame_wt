<template>
  <div>
    <div id="login">
      <div class="logo-info">
        <img class="logo" src="../assets/logo.png" alt="logo">
        <p class="name">企业级中后台模板系统<br>
          <span class="sub">用户登录</span>
        </p>
      </div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <div>
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="账号">
            <Icon type="ios-person-outline" slot="prepend"/>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"/>
            </Input>
          </FormItem>
        </div>
        <div>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">{{btnmsg}}</Button>
            <Spin fix style="opacity:0.5;" v-if="flag">
              <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            </Spin>
          </FormItem>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        btnmsg: '登录',
        flag: false,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {
              required: true,
              message: '账号不能为空!',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入您的密码!',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 3,
              message: '密码错误',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        // this.flag = true;
        // this.$ajax({
        //   method: 'get',
        //   url: 'https://www.baidu.com',
        //   data: {
        //     'tn': 'sitehao123_15'
        //   }
        // }).then(res => {
        //   console.log(res);
        // }).catch(err => {
        //   console.log(err);
        // });
        // 此处应：后台验证此人登录信息 成功后返回该人员基础身份信息、菜单权限信息和token 并保存至session
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!');
            // 加载菜单
            this.$store.commit('LOADING', true);
            this.$store.dispatch('handleMenu');
          } else {
            this.$Message.error('登陆失败!');
          }
        })
      }
    },
    component: {
      // someComponent
    },
    watch: {
      formInline: {
        handler (newVal, oldVal) {
          // 深度监听数据
          // console.log(newVal.user);
          // console.log(newVal.password);
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  #login {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 360px;
    height: 350px;
    margin: -175px 0 0 -180px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  }

  .logo-info {
    height: 64px;
    margin-bottom: 22px;
    text-align: center;
  }
  .logo {
    width: 64px;
    height: 64px;
    margin-right: 10px;
  }

  .name {
    position: relative;
    bottom: 14px;
    display: inline-block;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
  }
  .sub {
    font-size: 12px;
  }

  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
