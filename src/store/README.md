### creat-react-app 支持装饰器
找到node_modules/babel-preset-react-app/index.js，然后加入装饰器支持。
```$xslt
const plugins = [
  // 增加装饰器的支持
  require.resolve('babel-plugin-transform-decorators-legacy'), <=== 注意这里！
  // class { handleClick = () => { } }
  require.resolve('babel-plugin-transform-class-properties')
  ....
```