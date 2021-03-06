---
title: Vue 开发规范目录及说明
sidebar: auto
---

# Vue 开发规范目录及说明

本文档为前端 vue 开发规范

- 命名规范
- 结构化规范
- 注释规范
- 编码规范
- CSS 规范

## 规范目的

为提高团队协作效率

便于后台人员添加功能及前端后期优化维护

输出高质量的文档

## 命名规范

为了让大家书写可维护的代码，而不是一次性的代码

让团队当中其他人看你的代码能一目了然

甚至一段时间时候后你再看你某个时候写的代码也能看

### 普通变量命名规范

* 命名方法 ：驼峰命名法
* 命名规范 ：

  * 命名必须是跟需求的内容相关的词，比如说我想申明一个变量，用来表示我的学校，那么我们可以这样定义 const mySchool = "我的学校";

  * 命名是复数的时候需要加 s,比如说我想申明一个数组，表示很多人的名字，那么我们可以这样定义 const names = new Array();


### 常量

命名方法 : 全部大写 命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。

```js
const MAX_COUNT = 10
const URL = 'https://www.ykt100.com/'
```

### 组件命名规范

官方文档推荐及使用遵循规则：
* PascalCase (单词首字母大写命名)是最通用的声明约定

* kebab-case (短横线分隔命名) 是最通用的使用约定

组件名应该始终是多个单词的，根组件 App 除外

有意义的名词、简短、具有可读性

* 命名遵循 PascalCase 约定

* 公用组件以 Abcd (公司名缩写简称) 开头，如（AbcdDatePicker,AbcdTable）

* 页面内部组件以组件模块名简写为开头，Item 为结尾，如（StaffBenchToChargeItem，StaffBenchAppNotArrItem）

* 使用遵循 kebab-case 约定

1. 在页面中使用组件需要前后闭合，并以短线分隔

2. 导入及注册组件时，遵循 PascalCase 约定

* 同时还需要注意：必须符合自定义元素规范: 切勿使用保留字。

### method 方法命名命名规范
* 驼峰式命名，统一使用动词或者动词+名词形式

```js
//bad
go、nextPage、show、open、login

  // good
jumpPage、openCarInfoDialog
```
* 请求数据方法，以 data 结尾

```js
//bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData
```

init、refresh 单词除外

尽量使用常用单词开头（set、get、go、can、has、is）

附： 函数方法常用的动词:

```
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```

### views 下的文件命名

只有一个文件的情况下不会出现文件夹，而是直接放在 views 目录下面，如 index.vue

尽量是名词,且使用驼峰命名法

开头的单词就是所属模块名字（workbenchIndex、workbenchList、workbenchEdit）

名字至少两个单词（good: workbenchIndex）（bad:workbench）

### props 命名

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case

```js
<!-- bad -->
<script>
props: {
  'greeting-text': String
}
</script>

<welcome-message greetingText="hi"></welcome-message>

<!-- good -->
<script>
props: {
  greetingText: String
}
</script>

<welcome-message greeting-text="hi"></welcome-message>
```

### 例外情况

作用域不大临时变量可以简写，比如：str，num，bol，obj，fun，arr。

循环变量可以简写，比如：i，j，k 等。

## 结构化规范

### 目录文件夹及子文件规范

以下统一管理处均对应相应模块 以下全局文件文件均以 index.js 导出，并在 main.js 中导入 以下临时文件，在使用后，接口已经有了，发版后清除

```
src                               源码目录
|-- api                           接口，统一管理
|-- assets                        静态资源，统一管理
|-- components                    公用组件，全局文件
|-- filters                       过滤器，全局工具
|-- icons                         图标，全局资源
|-- datas                         模拟数据，临时存放
|-- lib                           外部引用的插件存放及修改文件
|-- mock                          模拟接口，临时存放
|-- router                        路由，统一管理
|-- store                         vuex, 统一管理
|-- views                         视图目录
|   |-- staffWorkbench            视图模块名
|   |-- |-- index.vue             模块入口页面
|   |-- |-- indexComponents       模块页面级组件文件夹
|   |-- |-- components            模块通用组件文件夹
```

### vue 文件基本结构

```vue
<template>
  <div>
    <!--必须在div中编写页面-->
  </div>
</template>
<script>
export default {
  name: 'PageName',
  components : {},
  mixins: [],
  data () {},
  inject: [],
  provide: {},
  props: {},
  computed: {}
  watch: {}
  directives: {}
  created () {},
  mounted () {},
  //... 生命周期函数
  filters: {}
  methods: {}
}
</script>
<!--声明语言，并且添加scoped-->
<style lang="scss" scoped>
</style>
```
::: warning
注：文件name属性命名遵循 PascalCase 约定，且与路由name属性一致（例：name：'PageName'）
:::

### 多个特性的元素规范

```js
<!-- bad -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<my-component foo="a" bar="b" baz="c"></my-component>

<!-- good -->
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<my-component
  foo="a"
  bar="b"
  baz="c"
>
</my-component>
```

### 元素特性的顺序

原生属性放前面，指令放后面

如下所示：

```
  - class
  - id,ref
  - name
  - data-*
  - src, for, type, href,value,max-length,max,min,pattern
  - title, alt，placeholder
  - aria-*, role
  - required,readonly,disabled
  - is
  - v-for
  - key
  - v-if
  - v-else-if
  - v-else
  - v-show
  - v-cloak
  - v-pre
  - v-once
  - v-model
  - v-bind,:
  - v-on,@
  - v-html
  - v-text
```

### 组件选项顺序

```
  - components
  - props
  - data
  - computed
  - created
  - mounted
  - metods
  - filter
  - watch
```


## 注释规范

代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明

### 务必添加注释列表

1. 公共组件使用说明

2. 各组件中重要函数或者类说明

3. 复杂的业务逻辑处理说明

4. 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述

5. 多重 if 判断语句

6. 注释块必须以/（至少两个星号）开头/

7. 单行注释使用//

### 单行注释

注释单独一行，不要在代码后的同一行内加注释。例如：

```js
// bad

var name =”abc”; // 姓名

// good

// 姓名
var name = “abc”;
```


### 多行注释

组件使用说明，和调用说明


```js
/**
  _ 组件名称
  _ @module 组件存放位置
  _ @desc 组件描述
  _ @author 组件作者
  _ @date 2021 年 01 月 07 日 17:22:43
  _ @param {Object} [title] - 参数说明
  _ @param {String} [columns] - 参数说明
  _ @example 调用示例 \* <myTable :title="title" :columns="columns" :tableData="tableData"></myTable>
**/
```

## 编码规范

优秀的项目源码，即使是多人开发，看代码也如出一人之手。统一的编码规范，可使代码更易于阅读，易于理解，易于维护。尽量按照 ESLint 格式要求编写代码

### 源码风格 

<strong>使用 ES6 风格编码</strong>

1. 定义变量使用 let ,定义常量使用 const

2. 静态字符串一律使用单引号或反引号，动态字符串使用反引号

```js
// bad
const a = 'foobar'
const b = 'foo' + a + 'bar'

// acceptable
const c = `foobar`

// good
const a = 'foobar'
const b = `foo${a}bar`
const c = 'foobar'
```

### 解构赋值

- 数组成员对变量赋值时，优先使用解构赋值

```js
// 数组解构赋值
const arr = [1, 2, 3, 4]
// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr
```

- 函数的参数如果是对象的成员，优先使用解构赋值

```js
// 对象解构赋值
// bad
function getFullName (user) {
  const firstName = user.firstName
  const lastName = user.lastName
}

// good
function getFullName (obj) {
  const { firstName, lastName } = obj
}

// best
function getFullName ({ firstName, lastName }) {}
```

- 拷贝数组

使用扩展运算符（...）拷贝数组。

```js
const items = [1, 2, 3, 4, 5]

// bad
const itemsCopy = items

// good
const itemsCopy = [...items]
```

- 箭头函数

需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this

```js
// bad
const self = this;
const boundMethod = function (...params) {
  return method.apply(self, params);
}

// acceptable
const boundMethod = method.bind(this);

// best
const boundMethod = (...params) => method.apply(this, params);
```

- 模块

如果模块只有一个输出值，就使用 export default，如果模块有多个输出值，就不使用 export default，export default 与普通的 export 不要同时使用

```js
// bad
import * as myObject from './importModule'

// good
import myObject from './importModule'
```

如果模块默认输出一个函数，函数名的首字母应该小写。

```js
function makeStyleGuide() {
}

export default makeStyleGuide;
```

如果模块默认输出一个对象，对象名的首字母应该大写。
```js
const StyleGuide = {
  es6: {
  }
};

export default StyleGuide;
```

- 指令规范 指令有缩写一律采用缩写形式

```js
// bad
v-bind:class="{'show-left'：true}"
v-on:click="getListData"

// good
:class="{'show-left'：true}"
@click="getListData"
```

- v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一

```html
<!-- good -->
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>

<!-- bad -->
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

- 避免 v-if 和 v-for 同时用在一个元素上（性能问题）

以下为两种解决方案：

将数据替换为一个计算属性，让其返回过滤后的列表

```html
<!-- bad -->
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>

<!-- good -->
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>

<script>
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
</script>
```

将 v-if 移动至容器元素上 (比如 ul, ol)

```html
<!-- bad -->
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>

<!-- good -->
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

### Props 规范

Props 定义应该尽量详细

```js
// bad 这样做只有开发原型系统时可以接受
props: ['status']

// good
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```


### 其他

避免 this.$parent

调试信息 console.log() debugger 使用完及时删除

除了三目运算，if,else 等禁止简写


```js
// bad
if (true)
    alert(name);
console.log(name);

// bad
if (true)
alert(name);
console.log(name)

// good
if (true) {
  alert(name);
}
console.log(name);
```


## CSS 规范

* 通用规范 统一使用"-"连字符

省略值为 0 时的单位

```css
// bad
padding-bottom: 0px;
margin: 0em;

// good
padding-bottom: 0;
margin: 0;
```

- 如果 CSS 可以做到，就不要使用 JS

- 建议并适当缩写值，提高可读性，特殊情况除外

- “建议并适当”是因为缩写总是会包含一系列的值，而有时候我们并不希望设置某一值，反而造成了麻烦，那么这时候你可以不缩写，而是分开写。

- 当然，在一切可以缩写的情况下，请务必缩写，它最大的好处就是节省了字节，便于维护，并使阅读更加一目了然。

```css
// bad
.box{
  border-top-style: none;
  font-family: palatino, georgia, serif;
  font-size: 100%;
  line-height: 1.6;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0;
}

// good
.box{
  border-top: 0;
  font: 100%/1.6 palatino, georgia, serif;
  padding: 0 1em 2em;
}
```

- 声明应该按照下表的顺序
- 左到右，从上到下

| 显示属性        | 自身属性         | 文本属性和其他修饰 |
| -------------- | -------------- | --------------- |
| display        | width          | font            |
| visibility     | height         | text-align      |
| position       | margin         | text-decoration |
| float          | padding        | vertical-align  |
| clear          | border         | white-space     |
| list-style     | overflow       | color           |
| top            | min-width      | background      |
| field1         | field2         | field3          |


```css
// bad
.box {
  font-family: 'Arial', sans-serif;
  border: 3px solid #ddd;
  left: 30%;
  position: absolute;
  text-transform: uppercase;
  background-color: #eee;
  right: 30%;
  isplay: block;
  font-size: 1.5rem;
  overflow: hidden;
  padding: 1em;
  margin: 1em;
}

// good
.box {
  display: block;
  position: absolute;
  left: 30%;
  right: 30%;
  overflow: hidden;
  margin: 1em;
  padding: 1em;
  background-color: #eee;
  border: 3px solid #ddd;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}
```

- 元素选择器应该避免在 scoped 中出现

官方文档说明：在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

- 分类的命名方法

使用单个字母加上"-"为前缀

布局（grid）（.g-）；

模块（module）（.m-）；

元件（unit）（.u-）；

功能（function）（.f-）；

皮肤（skin）（.s-）；

状态（.z-）。

- 统一语义理解和命名

布局（.g-）

| 显示语义  | 命名       | 简写     |
| -------- |-----------| ---------|
| 文档      | doc       |    doc  |
| 头部      | head      |    hd   |
| 主体      | body      |    bd   |
| 尾部      | foot      |    ft   |
| 主栏      | main      |    mn   |
| 侧栏      | side      |    sd   |
| 盒容器    | wrap/box  | wrap/box |
| 模块      | doc       | doc     |

- 模块（.m-）、元件（.u-）
// todo

## sass 规范

当使用 Sass 的嵌套功能的时候，重要的是有一个明确的嵌套顺序，以下内容是一个 SCSS 块应具有的顺序。

当前选择器的样式属性 父级选择器的伪类选择器 (:first-letter, :hover, :active etc) 伪类元素 (:before and :after) 父级选择器的声明样式 (.selected, .active, .enlarged etc.) 用 Sass 的上下文媒体查询 子选择器作为最后的部分

```scss
.product-teaser {
  // 1. Style attributes
  display: inline-block;
  padding: 1rem;
  background-color: whitesmoke;
  color: grey;

  // 2. Pseudo selectors with parent selector
  &:hover {
    color: black;
  }

  // 3. Pseudo elements with parent selector
  &:before {
    content: "";
    display: block;
    border-top: 1px solid grey;
  }

  &:after {
    content: "";
    display: block;
    border-top: 1px solid grey;
  }

  // 4. State classes with parent selector
  &.active {
    background-color: pink;
    color: red;

    // 4.2. Pseuso selector in state class selector
    &:hover {
      color: darkred;
    }
  }

  // 5. Contextual media queries
  @media screen and (max-width: 640px) {
    display: block;
    font-size: 2em;
  }

  // 6. Sub selectors
  > .content > .title {
    font-size: 1.2em;

    // 6.5. Contextual media queries in sub selector
    @media screen and (max-width: 640px) {
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }
}
```

### 特殊规范

对用页面级组件样式，应该是有作用域的 对于公用组件或者全局组件库，我们应该更倾向于选用基于 class 的 BEM 策略

```css
<style lang='scss'></style> // bad

<!-- 使用 scoped 作用域 -->
<style lang='scss' scoped></style> // good

<!-- 使用 BEM 约定 -->
<style> // good
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```


## JS部分

### 和渲染无关的数据

vue中data的数据默认便会进行双向数据绑定，若是将大量的和渲染无关的数据直接放置在data中，将会浪费双向数据绑定时所消耗的性能，将这些和渲染无关的数据进行抽离并配合Object.freeze进行处理

table中columns数据可以单独提取一个外部js文件作为配置文件，也可以在当前.vue文件中定义一个常量定义columns数据，因为无论如何都是固定且不会修改的数据，应该使用Object.freeze进行包裹，既可以提高性能还可以将固定的数据抽离，一些下拉框前端固定的数据也建议此操作

```js
const columnList = Object.freeze([
  { title: '姓名', key: 'name', align: 'center' },
  { title: '性别', key: 'gender', align: 'center' }
])
```

- 需要注意的是 Object.freeze() 冻结的是值，这时仍然可以将变量的引用替换掉，还有确保
- 数据不会变才可以使用这个语法，如果要对数据进行修改和交互，就不适合使用冻结了。


### Modal框的控制

一个页面种通常会存在很多个不同功能的弹框，若是每一个弹框都设置一个对应的变量来控制其显示，则会导致变量数量比较冗余和命名困难，可以使用一个变量来控制同一页面中的所有Modal弹框的展示

比如某个页面中存在三个Modal弹框

```js
// bad
// 每一个数据控制对应的Modal展示与隐藏
new Vue({
  data() {
      return {
          modal1: false,
          modal2: false,
          modal3: false,
      }
  }
})

// good
// 当modalType为对应的值时 展示其对应的弹框
new Vue({
  data() {
      return {
          modalType: '' // modalType值为 modal1，modal2，modal3
      }
  }
})
```

### debounce使用

例如远程搜索时需要通过接口动态的获取数据，若是每次用户输入都接口请求，是浪费带宽和性能的

当一个按钮多次点击时会导致多次触发事件，可以结合场景是否立即执行

```html
<Select :remote-method="remoteMethod">
    <Option v-for="item in temoteList" :value="item.value" :key="item.id">{{item.label}}</Option>
</Select>
```

```js
import {debounce} from 'lodash'

methods：{
  remoteMethod：debounce(function (query) {
      // to do ...
      // this 的指向没有问题
  }, 200),
}
```

### 策略模式

策略模式的使用，避免过多的if else判断，也可以替代简单逻辑的switch

```js
const formatDemandItemType = (value) => {
  switch (value) {
    case 1:
      return '基础'
    case 2:
      return '高级'
    case 3:
      return 'VIP'
  }
}

// 策略模式
const formatDemandItemType2 = (value) => {
  const obj = {
    1: '基础',
    2: '高级',
    3: 'VIP',
  }
  return obj[value]
}
```

### 解构

解构赋值以及默认值，当解构的数量小于多少时适合直接解构并赋值默认值，数据是否进行相关的聚合处理

```js
const {
  naem = '',
  age = 10,
  gender = 'man'
} = res.data

// bad
this.name = name
this.age = age
this.gender = gender

// good
this.person = {
  naem,
  age,
  gender
}
```

### 职责单一

任何时候尽量是的一个函数就做一件事情，而不是将各种逻辑全部耦合在一起，提高单个函数的复用性和可读性

每个页面都会在加载完成时进行数据的请求并展示到页面

```js
created() {
  this.init();
},
methods: {
  // 将全部的请求行为聚合在init函数中
  // 将每个请求单独拆分
  init() {
    this.getList1()
    this.getList2()
  },
  getList1() {
    // to do ...
  },
  getList2() {
    // to do ...
  }
}
```

### Select优化

下拉框遍历时，需要注意options标签保持同一行，若是存在换行，会导致选中时的值存在多余的空白

```html
<!-- bad -->
<Select :remote-method="remoteMethod">
  <Option v-for="item in temoteList" :value="item.value" :key="item.id">
      {{item.label}}
  </Option>
</Select>
```

需要将Options和下拉框的值保持在同一行

```html
<!-- good -->
<Select :remote-method="remoteMethod">
  <Option v-for="item in temoteList" :value="item.value" :key="item.id">{{item.label}}</Option>
</Select>
```

### #data数据层级

data数据具有数据层级结构，切勿过度扁平化或者嵌套层级过深，若是过度扁平化会导致数据命名空间冲突，参数传递和处理，若是层级嵌套过深也会导致vue数据劫持的时候递归层级过深，若是嵌套层级丧心病狂那种的，小心递归爆栈的问题。而且层级过深会导致数据操作和处理不便，获取数据做容错处理也比较繁琐。一般层级保持2-3层最好。

若是只有一层数据，过于扁平

```json
{
  name: '',
  age: '',
  gender: ''
}
```

导致处理不方便

```js
// 作为接口参数传递
ajax({
  this.name, this.age, this.gender
})

// 接口获取数据，批量处理
ajax().then(res => {
  const {name, age, gender} = res.data
  this.name = name
  this.age = age
  this.gender = gender
})
```

适当的层级结构不仅增加代码的维护和阅读性，还可以增加操作和处理的便捷性

```json
{
  person: { // 个人信息
    name: '',
    age: '',
    gender: ''
  }
}
```

可以针对person进行操作

```js
// 作为接口参数传递
ajax(this.person)

// 接口获取数据，批量处理
ajax().then(res => {
  const {name, age, gender} = res.data
  this.$set(this, 'person', {name, age, gender})
})
```
