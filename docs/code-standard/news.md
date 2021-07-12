---
title: 新人文档
sidebar: auto
---

## 技术选型
* 核心框架: Vue
* 状态管理: Vuex
* 路由映射: vue-router
* 模拟数据: MockJS
* UI组件库: Element
* HTTP请求库: Axios
* CSS预处理器: Sass
* 资源加载打包工具: Webpack
* 代码规范工具: eslint
* 单元测试: Jest
* 其他: ES6, TypeScript, NodeJS, NPM

## 项目介绍及地址

* 盐课堂控制台前端工程 [pigx-ui](http://git.jze100.com:8000/saltclass/pigx-ui)
* 网页直播端 [web-live](http://git.jze100.com:8000/saltclass/web-live)
* 盐课堂（服务端渲染工程）[web-nuxt](http://git.jze100.com:8000/saltclass/web-nuxt)
* 家庭教育前端 [home-education-web](http://git.jze100.com:8000/saltclass/home-education-web)
* 小盐课堂 [qk-web](http://git.jze100.com:8000/saltclass/qk-web)
* 盐课堂控制台 [market-operation-console](http://git.jze100.com:8000/saltclass/market-operation-console)

## 开发相关

### 环境准备

* 开发环境 Node、NPM
* 开发工具 VsCode、Webstrom
* 本地host如下

```bash
#10.123.90.11   doracms-mongodb
#10.123.60.133    pigx-gateway
10.123.90.81    pigx-gateway
10.123.90.51    mkop-gateway
#10.123.90.10    pigx-mysql
10.123.90.12    redis
10.123.90.42    chat-redis
10.123.90.11  rabbitmq
10.123.90.11    pigx-redis
#127.0.0.1 fjzzq.dev.jze100.com
127.0.0.1    ykt.jze100.com
127.0.0.1  jzkt.ykt.com
```

## 前后端协作规范

### 协作流程

<img :src="$withBase('/process.png')" alt="process">

### 了解产品和设计
* 参加需求、交互会议，了解产品设计和项目成员
* 了解产品面向的平台或者设备
* 了解产品对兼容性的要求
* 了解产品需要使用到的技术

### 提出问题
* 会议中结合技术要求提出交互的疑惑和见解
* 提出可能存在的问题（技术实现、性能等）

### 技术调研
* 是否需要支持，技术调研，提出风险
* 进行调研，产出demo展示，反馈结果（可寻求支持）

### 预估排期
* 根据项目内容和周期预估时间

### 职责任务

* 确认交互、需求等是否定稿，在开启工作
* 并行模式开发，以交互原型定稿为准
* 若遇困难，提前并及时反馈

### 自测联调
* 更新、合并、解决冲突、提交
* 对自己的代码进行全方面的自行测试、包括兼容、设备等
* 若发现别人的代码有问题或者有影响，及时反馈

### 接口规范以及设计

* 一般来说是 RESTful 或者 GraphQL 两种 API 规范
* 明确区分正常或者异常，前端对异常响应做统一的处理
* 明确数据类型，不可 Number 和 String 混用，导致意外的bug
* 明确 null 的意义
* 不要有冗余的嵌套数据

#### 接口文档
* 简单的测试示例
* 具体接口定义
  * URL
  * 描述
  * 请求参数及描述，必须说明类型
  * 响应参数及描述，必须说明类型
  * 异常情况、描述等



### 提交验收

* 测试、UI、产品依次验收
* 组内Review验收

### 总结分享

> 每周 [review](http://git.jze100.com:8000/frontend/review/-/issues)
* 完成验收以后可以进行分享
* 内容可以包含：架构思想、协作心得（问题）、遇到的问题和解决方案等


## 讨论文档

一般来说一个Git项目除了文档篇幅以外，Issue也是及其重要的信息来源，可以让更多的人参与到项目的设计和决策中，对于新人或者新手来说是及其好的，并且可以保证每次的设计方案，以及需求等等一系列的内容都可以保留下来。  

比如某个项目新增了一个需求，那么可以在该项目下新增一个Issue，内容可以包括如下: 

* xx项目xx需求
* 设计方案
* 决策/建议
  * 新功能，新技术引入
  * 重构
  * 性能优化
  * 规范
* 问题讨论
* 计划或者跟踪
* ...
