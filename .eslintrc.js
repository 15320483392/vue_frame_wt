// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    //严重性应该是下列之一：0＝OFF，1＝警告，2＝错误。
    // 生成器函数*的前后空格
    //'generator-star-spacing': 0,
    "space-before-function-paren":["error", {
      "anonymous": "ignore",
      "named": "ignore",
      "asyncArrow": "always"
    }],
    // 在开发过程中允许调试器
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 在同一个作用域中禁止多次重复定义
    "no-redeclare":1,
    // 可以使用分号也可不用
    'semi': 0,
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "default-case": 2,//switch语句最后必须有default
    //函数调用时 函数名与()之间不能有空格
    "no-spaced-func": 2,
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }]
  }
}
