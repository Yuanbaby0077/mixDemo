## webpack 安装
-安装本地的webpack
-webpack webpack-cli -D

## webpack 0配置
-打包工具 -> 输出后的结果（js模块）

## webpack 的配置文件
所有构建工具都是基于nodejs平台运行的～模块化默认采用commonJS

## 默认查找文件

```
  const DEFAULT_CONFIG_LOC = [
    'webpack.config',
    'webpack.config.dev',
    'webpack.config.development',
    'webpack.config.prod',
    'webpack.config.production',
    '.webpack/webpack.config',
    '.webpack/webpack.config.none',
    '.webpack/webpack.config.dev',
    '.webpack/webpack.config.development',
    '.webpack/webpack.config.prod',
    '.webpack/webpack.config.production',
    '.webpack/webpackfile',
];
```
webpack-dev-server 与 webpack-cli的兼容性

source-map: 外部，源代码的错误位置
inline-source-map：内联，源代码的错误位置
hidden-source-map: 隐藏源代码，追踪到构建后的代码的错误位置
cheap-source-map： 源代码的错误位置
cheap-module-source-map： 源代码的错误位置

开发环境：速度快，调试友好
速度快：
eval-cheap-source-map
eval-source-map
调试友好：
source-map
cheap-module-source-map
cheap-source-map

--> eval-source-map /eval-cheap-module-source-map

生产环境： 源代码隐藏？调试友好？
不用内联，避免代码体积过大

--》source-map / cheap-module-source-map