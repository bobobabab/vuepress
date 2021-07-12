---
title: CSS规范
sidebar: auto
---

# CSS 规范

使CSS代码风格保持一直，容易被理解和维护  
本文档针对CSS设计，但在使用CSS预编译器（如less、sass、stylus）等也应尽量遵循。

## 缩进
使用2个空格作为缩进

## 空格
以下几种情况不需要空格：

* 属性名后
* 多个规则的分隔符','前
* !important '!'后
* 属性值中'('后和')'前
* 行末不要有多余的空格

以下几种情况需要空格：

* 属性值前
* 选择器'>', '+', '~'前后
* '{'前
* !important '!'前
* @else 前后
* 属性值中的','后
* 注释'/*'后和'*/'前

```css
/* bad */
.element {
  color :red! important;
  background-color: rgba(0,0,0,.5);
}

/* good */
.element {
  color: red !important;
  background-color: rgba(0, 0, 0, .5);
}

/* bad */
.element ,
.dialog{
  ...
}

/* good */
.element,
.dialog {

}

/* bad */
.element>.dialog{
  ...
}

/* good */
.element > .dialog{
  ...
}

/* bad */
.element{
  ...
}

/* good */
.element {
  ...
}

/* bad */
@if{
  ...
}@else{
  ...
}

/* good */
@if {
  ...
} @else {
  ...
}
```

## 空行
以下几种情况需要空行：

* 文件最后保留一个空行
* '}'后最好跟一个空行，包括scss中嵌套的规则
* 属性之间需要适当的空行，具体见属性声明顺序

```css
/* bad */
.element {
  ...
}
.dialog {
  color: red;
  &:after {
    ...
  }
}

/* good */
.element {
  ...
}

.dialog {
  color: red;

  &:after {
    ...
  }
}
```

## 换行
以下几种情况不需要换行：

* '{'前
以下几种情况需要换行：

* '{'后和'}'前
* 每个属性独占一行
* 多个规则的分隔符','后

```css
/* bad */
.element
{color: red; background-color: black;}

/* good */
.element {
  color: red;
  background-color: black;
}

/* bad */
.element, .dialog {
  ...
}

/* good */
.element,
.dialog {
  ...
}
```

## 引号
最外层统一使用双引号；

url的内容要用引号；

属性选择器中的属性值需要引号。

```css
.element:after {
  content: "";
  background-image: url("logo.png");
}

li[data-type="single"] {
  ...
}
```

## 属性简写
属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰；  

margin 和 padding 相反，需要使用简写； 

常见的属性简写包括：  
* font
* background
* transition
* animation

```css
/* bad */
.element {
  transition: opacity 1s linear 2s;
}

/* good */
.element {
  transition-delay: 2s;
  transition-timing-function: linear;
  transition-duration: 1s;
  transition-property: opacity;
}
```

## 媒体查询
放在相关文档最底部，不要独立一个文件中

```css
element {
  ...
}

.element-avatar{
  ...
}

@media (min-width: 480px) {
  .element {
    ...
  }

  .element-avatar {
    ...
  }
}
```

## 选择器

* ~、>、+选择器的两边都要各保留一个空格

```css
/* good */
main > nav {
  padding: 10px;
}

label + input {
  margin-left: 5px;
}

input:checked ~ button {
  background-color: #69C;
}

/* bad */
main>nav {
  padding: 10px;
}

label+input {
  margin-left: 5px;
}

input:checked~button {
  background-color: #69C;
}
```

* 属性选择器中的值必须用双引号包括

```css
/* good */
article[character="juliet"] {
  voice-family: "Vivien Leigh", victoria, female;
}

/* bad */
article[character='juliet'] {
  voice-family: "Vivien Leigh", victoria, female;
}
```

## 注释

* 建议使用行注释（Sass中是//）代替块注释
* 建议注释独占一行
* 给没有自注释的代码写上详细说明，比如：
  * 为什么用到了 z-index
  * 兼容性处理或者针对特定浏览器的hack

```css
/* Modal header */
.modal-header {
  ...
}

/*
 * Modal header
 */
.modal-header {
  ...
}

.modal-header {
  /* 50px */
  width: 50px;

  color: red; /* color red */
}
```

## 命名规范
采用BEM规范，为了的结束混乱的命令方式，达到语义化CSS的目的  
BEM是三个单词的缩写：Block（块，代表每个高级别的抽象或组件）+ Element（元素，block的后代）+ Modifier（修饰）

* 命名方法

```html
<p class="header">
  <p class="header__body">
    <button class="header__button--primary"></button>
    <button class="header__button--default"></button>
  </p>
</p>
```

```css
.block__element--modifier {
  display: flex;
}
.block--modifier {
  display: flex;
}
.block__element {
  display: flex;
}
```

* 关于Block
1. 负责描述功能，不应该包括状态

```css
/* good */
.header {
​
}
​
/* bad */
.header--select {
​
}
```

2. 不影响自身布局，不包含具体的样式，也就是block里面不应该加样式

```css
/* good */
.header {
​
}
​
/* bad */
.header {
  margin-top: 50px;
}
```

3. 不能使用元素选择器和ID选择器
```css
/* good */
.header {
​
}
​
/* bad */
.header a {
  margin-top: 50px;
}
```

* 关于Element

1. 是用一个双下划线隔开

```css
/* good */
.header__body {
  margin-top: 50px;
}
​
/* bad */
.header .body {
  margin-top: 50px;
}
```

2. 表示的是目的，而不是状态，如下例子：目的是在header下面定义三个区域 body、logo、title，但是并没有指定任何状态。

```css
.header__body {
  margin-top: 50px;
}
​
.header__logo {
  margin-top: 50px;
}
​
.header__title {
  margin-top: 50px;
}
```
3. 不能脱离Block父级单独使用

```css
/* good */
<p class="header">
  <p class="header__body">
    <button class="header__button--primary"></button>
    <button class="header__button--default"></button>
  </p>
</p>
​
/* bad */
<p>
  <p class="header__body">
    <button class="header__button--primary"></button>
    <button class="header__button--default"></button>
  </p>
</p>
```

* 关于Modifier

1. 表示的是一个状态，是用双横杠分开的
```css
.header__button--default {
  background: none;
}
```

2. Boolean
```css
.header__button--select {
  background: none;
}
```

3. 枚举
```css
.header__button--primary {
  background: #329FD9;
}
```

4. 不能单独使用

```css
/* good */
<p class="header">
  <p class="header__body">
    <button class="header__button--primary"></button>
    <button class="header__button--default"></button>
  </p>
</p>
​
/* bad */
<p>
  <p>
    <button class="header__button--primary"></button>
    <button class="header__button--default"></button>
  </p>
</p>
```

## sass中使用方式
```scss
.header {
  &__body {
    padding: 20px;
  }
​
  &__button {
    &--primary {
      background: #329FD9;
    }
    &--default {
      background: none;
    }
  }
}

```

## 杂项

* 不允许有空的规则；

* 元素选择器用小写字母；

* 去掉小数点前面的0；

* 去掉数字中不必要的小数点和末尾的0；

* 属性值'0'后面不要加单位；

* 同个属性不同前缀的写法需要在垂直方向保持对齐；

* 无前缀的标准属性应该写在有前缀的属性后面；

* 不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；

* 不要在一个文件里出现两个相同的规则；

* 用 border: 0; 代替 border: none;；

* 选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）；

* 发布的代码中不要有 @import；

* 尽量少用'*'选择器。

```css
/* bad */
.element {
}

/* bad */
LI {
  ...
}

/* good */
li {
  ...
}

/* bad */
.element {
  color: rgba(0, 0, 0, 0.5);
}

/* good */
.element {
  color: rgba(0, 0, 0, .5);
}

/* bad */
.element {
  width: 50.0px;
}

/* good */
.element {
  width: 50px;
}

/* bad */
.element {
  width: 0px;
}

/* good */
.element {
  width: 0;
}

/* bad */
.element {
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;

  background: linear-gradient(to bottom, #fff 0, #eee 100%);
  background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
  background: -moz-linear-gradient(top, #fff 0, #eee 100%);
}

/* good */
.element {
  -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
          border-radius: 3px;

  background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
  background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
  background:         linear-gradient(to bottom, #fff 0, #eee 100%);
}

/* bad */
.element {
  color: rgb(0, 0, 0);
  width: 50px;
  color: rgba(0, 0, 0, .5);
}

/* good */
.element {
  color: rgb(0, 0, 0);
  color: rgba(0, 0, 0, .5);
}
```
