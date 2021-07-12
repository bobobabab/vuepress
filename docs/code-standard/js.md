---
title: JS规范
sidebar: auto
---

# JavaScript 规范

## 使用两个空格进行缩进

```js
function hello (name) {
  console.log('hi', name)
}
```

## 除了要转义的情况，字符串统一使用单引号

```js
console.log('hello there')
$("<div class='box'></div>")
```

## 不要定义没有使用的变量

```js
function myFunction () {
  var result = something()  // ✗ avoid
}
```

## 关键字后面加空格

```js
if (condition) { ... }   // ✓ ok
if(condition) { ... }    // ✗ avoid
```

## 函数声明时括号与函数名间加空格

```js
function name (arg) { ... }   // ✓ ok
function name(arg) { ... }    // ✗ avoid

run(function () { ... })      // ✓ ok
run(function() { ... })       // ✗ avoid
```

## 始终使用 === 替代 ==
例外： obj == null 可以用来检查 null || undefined

```js
if (name === 'John')   // ✓ ok
if (name == 'John')    // ✗ avoid
```

```js
if (name !== 'John')   // ✓ ok
if (name != 'John')    // ✗ avoid
```

## 字符串拼接操作符 (Infix operators) 之间要留空格

```js
// ✓ ok
var x = 2
var message = 'hello, ' + name + '!'
```

```js
// ✗ avoid
var x=2
var message = 'hello, '+name+'!'
```

## 逗号后面加空格

```js
// ✓ ok
var list = [1, 2, 3, 4]
function greet (name, options) { ... }
```

```js
// ✗ avoid
var list = [1,2,3,4]
function greet (name,options) { ... }
```

## else 关键字要与花括号保持在同一行

```js
// ✓ ok
if (condition) {
  // ...
} else {
  // ...
}
```

```js
// ✗ avoid
if (condition)
{
  // ...
}
else
{
  // ...
}
```

## 多行 if 语句的的括号不能省

```js
// ✓ ok
if (options.quiet !== true) console.log('done')
```

```js
// ✓ ok
if (options.quiet !== true) {
  console.log('done')
}
```

```js
// ✗ avoid
if (options.quiet !== true)
  console.log('done')
```

## 不要丢掉异常处理中err参数

```js
// ✓ ok
run(function (err) {
  if (err) throw err
  window.alert('done')
})
```

```js
// ✗ avoid
run(function (err) {
  window.alert('done')
})
```

## 使用浏览器全局变量时加上 window. 前缀
> document、console 和 navigator 除外

```js
window.alert('hi')   // ✓ ok
```

## 不允许有连续多行空行


```js
// ✓ ok
var value = 'hello world'
console.log(value)
```

```js
// ✗ avoid
var value = 'hello world'
```

## **对于三元运算符** `?` 和 `:` 与他们所负责的代码处于同一行

```js
// ✓ ok
var location = env.development ? 'localhost' : 'www.api.com'

// ✓ ok
var location = env.development
  ? 'localhost'
  : 'www.api.com'

// ✗ avoid
var location = env.development ?
  'localhost' :
  'www.api.com'
```

## 每个 var 关键字单独声明一个变量

```js
// ✓ ok
var silent = true
var verbose = true

// ✗ avoid
var silent = true, verbose = true

// ✗ avoid
var silent = true,
    verbose = true
```

## 条件语句中赋值语句使用括号包起来
> 这样使得代码更加清晰可读，而不会认为是将条件判断语句的全等号（===）错写成了等号（=）。

```js
// ✓ ok
while ((m = text.match(expr))) {
  // ...
}

// ✗ avoid
while (m = text.match(expr)) {
  // ...
}
```

## 单行代码块两边加空格

```js
function foo () {return true}    // ✗ avoid
function foo () { return true }  // ✓ ok
```

## 对于变量和函数名统一使用驼峰命名法

```js
function my_function () { }    // ✗ avoid
function myFunction () { }     // ✓ ok

var my_var = 'hello'           // ✗ avoid
var myVar = 'hello'            // ✓ ok
```

## 不允许有多余的行末逗号

```js
var obj = {
  message: 'hello',   // ✗ avoid
}
```

## 始终将逗号置于行末

```js
var obj = {
  foo: 'foo'
  ,bar: 'bar'   // ✗ avoid
}

var obj = {
  foo: 'foo',
  bar: 'bar'   // ✓ ok
}
```

## 点号操作符须与属性需在同一行

```js
console.
  log('hello')  // ✗ avoid

console
  .log('hello') // ✓ ok
```

## 函数调用时标识符与括号间不留间隔

```js
console.log ('hello') // ✗ avoid
console.log('hello')  // ✓ ok
```

## 键值对当中冒号与值之间要留空白

```js
var obj = { 'key' : 'value' }    // ✗ avoid
var obj = { 'key' :'value' }     // ✗ avoid
var obj = { 'key':'value' }      // ✗ avoid
var obj = { 'key': 'value' }     // ✓ ok
```

## 构造函数要以大写字母开头

```js
function animal () {}
var dog = new animal()    // ✗ avoid

function Animal () {}
var dog = new Animal()    // ✓ ok
```

## 无参的构造函数调用时要带上括号

```js
function Animal () {}
var dog = new Animal    // ✗ avoid
var dog = new Animal()  // ✓ ok
```

## 对象中定义了存值器，一定要对应的定义取值器

```js
var person = {
  set name (value) {    // ✗ avoid
    this._name = value
  }
}

var person = {
  set name (value) {
    this._name = value
  },
  get name () {         // ✓ ok
    return this._name
  }
}
```

## 子类的构造器中一定要调用 super

```js
class Dog {
  constructor () {
    super()   // ✗ avoid
  }
}

class Dog extends Mammal {
  constructor () {
    super()   // ✓ ok
  }
}
```

## 使用数组字面量而不是构造器

```js
var nums = new Array(1, 2, 3)   // ✗ avoid
var nums = [1, 2, 3]            // ✓ ok
```

## 避免使用 arguments.callee 和 arguments.caller

```js
function foo (n) {
  if (n <= 0) return

  arguments.callee(n - 1)   // ✗ avoid
}

function foo (n) {
  if (n <= 0) return

  foo(n - 1)
}
```

## 避免对类名重新赋值

```js
class Dog {}
Dog = 'Fido'    // ✗ avoid
```

## 避免修改使用 const 声明的变量

```js
const score = 100
score = 125       // ✗ avoid
```

## 避免使用常量作为条件表达式的条件（循环语句除外）

```js
if (false) {    // ✗ avoid
  // ...
}

if (x === 0) {  // ✓ ok
  // ...
}

while (true) {  // ✓ ok
  // ...
}
```

## 正则中不要使用控制符

```js
var pattern = /\x1f/    // ✗ avoid
var pattern = /\x20/    // ✓ ok
```

## 不要使用 debugger

```js
function sum (a, b) {
  debugger      // ✗ avoid
  return a + b
}
```

## 不要对变量使用 delete 操作

```js
var name
delete name     // ✗ avoid
```

## 不要定义冗余的函数参数

```js
function sum (a, b, a) {  // ✗ avoid
  // ...
}

function sum (a, b, c) {  // ✓ ok
  // ...
}
```

## 类中不要定义冗余的属性

```js
class Dog {
  bark () {}
  bark () {}    // ✗ avoid
}
```

## 对象字面量中不要定义重复的属性

```js
var user = {
  name: 'Jane Doe',
  name: 'John Doe'    // ✗ avoid
}
```

## switch 语句中不要定义重复的 case 分支

```js
switch (id) {
  case 1:
    // ...
  case 1:     // ✗ avoid
}
```

## 同一模块有多个导入时一次性写完

```js

import { myFunc1 } from 'module'
import { myFunc2 } from 'module'          // ✗ avoid

import { myFunc1, myFunc2 } from 'module' // ✓ ok

```

## 正则中不要使用空字符

```js
const myRegex = /^abc[]/      // ✗ avoid
const myRegex = /^abc[a-z]/   // ✓ ok

```

## 不要解构空值

```js
const { a: {} } = foo         // ✗ avoid
const { a: { b } } = foo      // ✓ ok
```

## 不要使用 eval()

```js
eval( "var result = user." + propName ) // ✗ avoid
var result = user[propName]             // ✓ ok
```

## catch 中不要对错误重新赋值

```js
try {
  // ...
} catch (e) {
  e = 'new value'             // ✗ avoid
}

try {
  // ...
} catch (e) {
  const newVal = 'new value'  // ✓ ok
}
```

## 不要扩展原生对象

```js
Object.prototype.age = 21     // ✗ avoid
```

## 避免多余的函数上下文绑定

```js
const name = function () {
  getName()
}.bind(user)    // ✗ avoid

const name = function () {
  this.getName()
}.bind(user)    // ✓ ok
```

## 避免不必要的布尔转换。

```js
const result = true
if (!!result) {   // ✗ avoid
  // ...
}

const result = true
if (result) {     // ✓ ok
  // ...
}
```

## 不要使用多余的括号包裹函数

```js
const myFunc = (function () { })   // ✗ avoid
const myFunc = function () { }     // ✓ ok
```

## switch 一定要使用 break 来将条件分支正常中断

```js
switch (filter) {
  case 1:
    doSomething()    // ✗ avoid
  case 2:
    doSomethingElse()
}

switch (filter) {
  case 1:
    doSomething()
    break           // ✓ ok
  case 2:
    doSomethingElse()
}

switch (filter) {
  case 1:
    doSomething()
    // fallthrough  // ✓ ok
  case 2:
    doSomethingElse()
}
```

## 不要省去小数点前面的0

```js
const discount = .5      // ✗ avoid
const discount = 0.5     // ✓ ok
```

## 避免对声明过的函数重新赋值

```js
function myFunc () { }
myFunc = myOtherFunc    // ✗ avoid
```

## 不要对全局只读对象重新赋值

```js
window = {}     // ✗ avoid
```

## 注意隐式的 eval()

```js
setTimeout("alert('Hello world')")                   // ✗ avoid
setTimeout(function () { alert('Hello world') })     // ✓ ok
```

## 嵌套的代码块中禁止再定义函数

```js
if (authenticated) {
  function setAuthUser () {}    // ✗ avoid
}
```

## 不要向 RegExp 构造器传入非法的正则表达式

```js
RegExp('[a-z')    // ✗ avoid
RegExp('[a-z]')   // ✓ ok
```

## 不要使用非法的空白符

```js
function myFunc () /*<NBSP>*/{}   // ✗ avoid
```

## 禁止使用 __iterator__

```js
Foo.prototype.__iterator__ = function () {}   // ✗ avoid
```

## 外部变量不要与对象属性重名

```js
var score = 100
function game () {
  score: while (true) {      // ✗ avoid
    score -= 10
    if (score > 0) continue score
    break
  }
}
```

## 不要使用标签语句

```js
label:
  while (true) {
    break label     // ✗ avoid
  }
```

## 不要书写不必要的嵌套代码块

```js
function myFunc () {
  {                   // ✗ avoid
    myOtherFunc()
  }
}

function myFunc () {
  myOtherFunc()       // ✓ ok
}
```

## 除了缩进，不要使用多个空格

```js
const id =    1234    // ✗ avoid
const id = 1234       // ✓ ok
```

## 不要使用多行字符串

```js
const message = 'Hello \
                 world'     // ✗ avoid
```

## new 创建对象实例后需要赋值给变量

```js
new Character()                     // ✗ avoid
const character = new Character()   // ✓ ok
```

## 禁止使用 Function 构造器

```js
var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid
```

## 禁止使用 Object 构造器

```js
let config = new Object()   // ✗ avoid
```

## 禁止使用 new require

```js
const myModule = new require('my-module')    // ✗ avoid
```

## 禁止使用 Symbol 构造器

```js
const foo = new Symbol('foo')   // ✗ avoid
```
## 禁止使用原始包装器

```js
const message = new String('hello')   // ✗ avoid
```

## 不要将全局对象的属性作为函数调用

```js
const math = Math()   // ✗ avoid
```

## 不要使用八进制字面量

```js
const octal = 042         // ✗ avoid
const decimal = 34        // ✓ ok
const octalString = '042' // ✓ ok
```

## 字符串字面量中也不要使用八进制转义字符

```js
const copyright = 'Copyright \251'  // ✗ avoid
```

## 使用 __dirname 和 __filename 时尽量避免使用字符串拼接

```js
const pathToFile = __dirname + '/app.js'            // ✗ avoid
const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
```

## 使用 getPrototypeOf 来替代 __proto__

```js
const foo = obj.__proto__               // ✗ avoid
const foo = Object.getPrototypeOf(obj)  // ✓ ok
```

## 不要重复声明变量

```js
let name = 'John'
let name = 'Jane'     // ✗ avoid

let name = 'John'
name = 'Jane'         // ✓ ok
```

## 正则中避免使用多个空格

```js
const regexp = /test   value/   // ✗ avoid

const regexp = /test {3}value/  // ✓ ok
const regexp = /test value/     // ✓ ok
```

## return 语句中的赋值必需有括号包裹

```js
function sum (a, b) {
  return result = a + b     // ✗ avoid
}

function sum (a, b) {
  return (result = a + b)   // ✓ ok
}
```

## 避免将变量赋值给自己

```js
name = name   // ✗ avoid
```

## 避免将变量与自己进行比较操作

```js
if (score === score) {}   // ✗ avoid
```

## 避免使用逗号操作符

```js
if (doSomething(), !!test) {}   // ✗ avoid
```

## 不要随意更改关键字的值

```js
let undefined = 'value'     // ✗ avoid
```

## 禁止使用稀疏数组（Sparse arrays）

```js
let fruits = ['apple',, 'orange']       // ✗ avoid
```

## 正确使用 ES6 中的字符串模板

```js
const message = 'Hello ${name}'   // ✗ avoid
const message = `Hello ${name}`   // ✓ ok
```

## 使用 this 前请确保 super() 已调用

```js
class Dog extends Animal {
  constructor () {
    this.legs = 4     // ✗ avoid
    super()
  }
}
```

## 用 throw 抛错时，抛出 Error 对象而不是字符串

```js
throw 'error'               // ✗ avoid
throw new Error('error')    // ✓ ok
```

## 不要使用 undefined 来初始化变量

```js
let name = undefined    // ✗ avoid

let name
name = 'value'          // ✓ ok
```

## 循环语句中注意更新循环变量

```js
for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

## 如果有更好的实现，尽量不要使用三元表达式

```js
let score = val ? val : 0     // ✗ avoid
let score = val || 0          // ✓ ok
```

## return，throw，continue 和 break 后不要再跟代码


```js
function doSomething () {
  return true
  console.log('never called')     // ✗ avoid
}
```

## finally 代码块中不要再改变程序执行流程

```js
try {
  // ...
} catch (e) {
  // ...
} finally {
  return 42     // ✗ avoid
}
```

## 关系运算符的左值不要做取反操作

```js
if (!key in obj) {}       // ✗ avoid
```

## 避免不必要的 .call() 和 .apply()

```js
sum.call(null, 1, 2, 3)   // ✗ avoid
```

## 避免使用不必要的计算值作对象属性

```js
const user = { ['name']: 'John Doe' }   // ✗ avoid
const user = { name: 'John Doe' }       // ✓ ok
```

## 禁止多余的构造器

```js
class Car {
  constructor () {      // ✗ avoid
  }
}
```

## 禁止不必要的转义

```js
let message = 'Hell\o'  // ✗ avoid
```

## import, export 和解构操作中，禁止赋值到同名变量

```js
import { config as config } from './config'     // ✗ avoid
import { config } from './config'               // ✓ ok
```

## 属性前面不要加空格

```js
user .name      // ✗ avoid
user.name       // ✓ ok
```

## 禁止使用 with

```js
with (val) {...}    // ✗ avoid
```

## 对象属性换行时注意统一代码风格

```js
const user = {
  name: 'Jane Doe', age: 30,
  username: 'jdoe86'            // ✗ avoid
}

const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

const user = {
  name: 'Jane Doe',
  age: 30,
  username: 'jdoe86'
}                                                                 // ✓ ok
```


## 代码块中避免多余留白

```js
if (user) {
                            // ✗ avoid
  const name = getName()

}

if (user) {
  const name = getName()    // ✓ ok
}
```

## 展开运算符与它的表达式间不要留空白

```js
fn(... args)    // ✗ avoid
fn(...args)     // ✓ ok
```

## 遇到分号时空格要后留前不留

```js
for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

## 代码块首尾留空格

```js
if (admin){...}     // ✗ avoid
if (admin) {...}    // ✓ ok
```

## 圆括号间不留空格

```js
getName( name )     // ✗ avoid
getName(name)       // ✓ ok
```

## 一元运算符后面跟一个空格

```js
typeof!admin        // ✗ avoid
typeof !admin        // ✓ ok
```

## 注释首尾留空格

```js
//comment           // ✗ avoid
// comment          // ✓ ok

/*comment*/         // ✗ avoid
/* comment */       // ✓ ok
```

## 模板字符串中变量前后不加空格

```js
const message = `Hello, ${ name }`    // ✗ avoid
const message = `Hello, ${name}`      // ✓ ok
```

## 检查 NaN 的正确姿势是使用 isNaN()

```js
if (price === NaN) { }      // ✗ avoid
if (isNaN(price)) { }       // ✓ ok
```

## 用合法的字符串跟 typeof 进行比较操作

```js
typeof name === 'undefimed'     // ✗ avoid
typeof name === 'undefined'     // ✓ ok
```

## 自调用匿名函数 (IIFEs) 使用括号包裹

```js
const getName = function () { }()     // ✗ avoid

const getName = (function () { }())   // ✓ ok
const getName = (function () { })()   // ✓ ok
```

## yield * 中的 * 前后都要有空格

```js
yield* increment()    // ✗ avoid
yield * increment()   // ✓ ok
```

## 书写优雅的条件语句（avoid Yoda conditions）

```js
if (42 === age) { }    // ✗ avoid
if (age === 42) { }    // ✓ ok
```
