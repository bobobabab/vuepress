---
title: 项目组织规范
sidebar: auto
---

# 项目组织规范

如何组织一个前端项目, 例如项目的命名、项目的文件结构、版本号规范等等。

## 通用项目组织规范

基本的项目组织规范如下：
* README.md: 项目说明，供关于项目的关键信息或者相关信息的入口. 一般包含下列信息
  * 简要的描述、项目主要特性之类
  * 运行环境/依赖、安装和构建、测试指南
  * 简单代码示例
  * 文档或者入口、其他版本或者相关资源入口
  * 补充信息
  * 相关开发人员
* CHANGELOG.md: 放置每个版本的变动内容，描述每个版本的内容，一般可以通过配置自动生成
* package.json 工程化项目必备，描述可用的命令、包名、依赖、环境约束、项目配置等信息
* .gitignore: 忽略不需要的文件，避免提交
* .gitattributes: git配置，跨平台差异的行为可能需要配置，比如换行
* docs/: 项目细化文档，可选
* examples/: 项目示例代码，可选
* build/: 项目工具类脚本，非必须
* dist/: 项目构建输出目录
* src/: 源代码目录
* tests/: 单元测试，按照<b>Jest</b>规范，<b>__tests__</b>目录通常和被测试的模块在同一个父目录下, 例如:

## README.md案例
```md
# 标题（项目名称）

这里是一个简单的项目描述（组件），包含做了什么，解决了什么问题

## 用法
如何安装使用，依赖于什么环境（版本），供一目了然的示例

## 运行测试
解释测试测试什么以及为什么

## API文档
提供规范详细的API文档，包括示例或者链接（比如codepen）

## 依赖于
依赖于哪些库或者哪些机制

## 补充信息，比如兼容
如果是浏览器端组件，补充兼容性，如果是Node端，可以表述Node支持的版本范围

## ChangeLog(可选)
各版本的重要变更以及commit信息

## 作者
作者是谁
```

## 单元测试案例
```
/src
  __tests__/
    index.js
    test.js
  index.js
  test.js
```

* tests: 全局测试目录，通常应用在继承测试或者e2e测试用例
* .env*: 环境变量，可以通过`doEnv`来读取，一般来说有三个
  * .env  通用环境变量
  * .env.development  开发环境
  * .env.production   生产环境

## 目录结构规范
上面有讲到是一个通用的组织规范，理论上项目的组织风格应该保持统一，可以借鉴一下两种模式

### 类型

按照文件的类型划分不同的目录，比如 `components`，`constants`，`views`这样，按照MVC架构来划分不同的目录类型，可以使用在中间层上（Node）:

```
├──app
│    ├── models # 模型
│    ├── views # 视图
│    ├── controllers # 控制器
│    ├── helpers # 自定义处理代码（比如错误处理）
│    └── assets  # 静态资源
├──config     # 配置
│    ├── application.js
│    ├── database.yml
│    ├── routes.js      # 路由控制
│    ├── locales        # 国际化配置
│    └── environments/
└──  db        # 数据库相关
```

### 功能

按照一个功能特性或者业务创建单独的目录，通常把相关联的元素定义在一个文件下，比如Vuex的例子:

```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```
