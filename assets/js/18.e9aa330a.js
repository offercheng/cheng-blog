(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{581:function(t,a,e){"use strict";e.r(a);var s=e(13),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"es6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),e("p",[t._v("首先就是 let 和 const 然后就是让代码编写更加的优美以及简便的方法，字符串模板符，解构赋值，箭头函数， 然后就是 正则，数值，函数，数组，对象的扩展，以及对象的新增方法，然后新增的数据结构 Map、Set、WeakMap、WeakSet基于弱引用的数据结构，WeakRef 对象，用于直接创建对象的弱引用，还有新增的基础数据类型：Symbol，BigInt，然后就是异步新增方式：Generator函数，Promsie对象，async函数，以及Proxy，Reflect，还有 Class就是一个语法糖，作为对象的模板，还有 Iterator 和 ES Module ，Decorator")]),t._v(" "),e("ul",[e("li",[t._v("扩展运算符 ... 既可以将对 数组使用 同样也可以 对 对象使用")])]),t._v(" "),e("h4",{attrs:{id:"let-和-const"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let-和-const"}},[t._v("#")]),t._v(" let 和 const")]),t._v(" "),e("ul",[e("li",[t._v("var 声明的变量会挂载到 window 上面，但是 let，const的简单区别")]),t._v(" "),e("li",[t._v("var 声明的变量会存在变量提升，但是let 和 const 不会")]),t._v(" "),e("li",[t._v("let 和 const 生命形成块级作用域，自能在块级作用域进行访问，不能够跨快使用，也不能跨函数访问")]),t._v(" "),e("li",[t._v("同一个作用域下，var 可以生命同名变量，但是 let 和 const 不可以")]),t._v(" "),e("li",[t._v("暂时性死区，let 和 const 声明的变量不能再声明被使用")])]),t._v(" "),e("p",[t._v("这里面涉及到的最主要的就是是否有变量提升")]),t._v(" "),e("h4",{attrs:{id:"解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值"}},[t._v("#")]),t._v(" 解构赋值")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("let [a, b, c] = [1, 2, 3];")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loc")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("line")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("column")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" loc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loc")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" start "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loc")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" line "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nline "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nloc  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object {start: Object}")]),t._v("\nstart "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object {line: 1, column: 5}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("指定默认值")])])]),t._v(" "),e("h4",{attrs:{id:"字符串扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展"}},[t._v("#")]),t._v(" 字符串扩展")]),t._v(" "),e("ul",[e("li",[t._v("字符串的遍历器接口")]),t._v(" "),e("li",[t._v("JSON.stringify() 的改造，以前JSON 数据必须是 UTF-8 编码，但是现在为了确保返回的是合法的 UTF-8 字符，"),e("a",{attrs:{href:"https://github.com/tc39/proposal-well-formed-stringify",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES2019"),e("OutboundLink")],1),t._v(" 改变了"),e("code",[t._v("JSON.stringify()")]),t._v("的行为。如果遇到"),e("code",[t._v("0xD800")]),t._v("到"),e("code",[t._v("0xDFFF")]),t._v("之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。")]),t._v(" "),e("li",[t._v("字符串模板符")])]),t._v(" "),e("h4",{attrs:{id:"字符串的新增方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串的新增方法"}},[t._v("#")]),t._v(" 字符串的新增方法")]),t._v(" "),e("ul",[e("li",[t._v("String.fromCodePoint() 可以识别大于 0xFFFF 的字符串，弥补了 String.fromCharCode() 方法的不足")]),t._v(" "),e("li",[t._v("String.raw() 返回一个斜杠都被转义，即斜杠前面再加一个斜杠，往往用于模板字符串的处理方法")]),t._v(" "),e("li",[t._v("includes()")]),t._v(" "),e("li",[t._v("startsWith()")]),t._v(" "),e("li",[t._v("endsWith()")]),t._v(" "),e("li",[t._v("repeat()")]),t._v(" "),e("li",[t._v("matchAll()")]),t._v(" "),e("li",[t._v("replaceAll()")])]),t._v(" "),e("h4",{attrs:{id:"正则的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则的扩展"}},[t._v("#")]),t._v(" 正则的扩展")]),t._v(" "),e("p",[t._v("ES6 出现之前，字符串对象共有4个方法，可以使用正则表达式：match()  replace() search() split()")]),t._v(" "),e("ul",[e("li",[t._v("RegExp.prototype.unicode")]),t._v(" "),e("li",[t._v("RegExp.prototype.sticky 表示是否设置了 y 修饰符")]),t._v(" "),e("li",[t._v("RegExp.prototype.flags  返回正则表达式的修饰符")]),t._v(" "),e("li",[t._v("后行断言")]),t._v(" "),e("li",[t._v("String.prototype.matchAll() 可以一次性去除所有匹配，不过返回的是一个遍历器 Iterator，而不是数组")])]),t._v(" "),e("h4",{attrs:{id:"数组的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组的扩展"}},[t._v("#")]),t._v(" 数组的扩展")]),t._v(" "),e("ul",[e("li",[t._v("扩展运算符")]),t._v(" "),e("li",[t._v("Array.from()  方法将类似数组的对象和可遍历 iterable 的对象包括ES6 新增的数据结构 Set 和 Map")]),t._v(" "),e("li",[t._v("Array.of() 方法用于将一组值，转化为数组")]),t._v(" "),e("li",[t._v("find() 和 findIndex()")]),t._v(" "),e("li",[t._v("fill() 填充一个数组")]),t._v(" "),e("li",[t._v("entries()，keys()，values()")]),t._v(" "),e("li",[t._v("includes() 返回一个布尔值，表示某个数组是否包含给定的值")]),t._v(" "),e("li",[t._v("flat()，flatMap() 扁平化")]),t._v(" "),e("li",[t._v("at()  接受一个整数作为参数，返回对应位置得成员，支持负索引")])]),t._v(" "),e("h4",{attrs:{id:"对象的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的扩展"}},[t._v("#")]),t._v(" 对象的扩展")]),t._v(" "),e("ul",[e("li",[t._v("属性的简答表示法")]),t._v(" "),e("li",[t._v("方法的 name 属性，返回函数名")]),t._v(" "),e("li",[t._v("属性的可枚举和遍历")])]),t._v(" "),e("h4",{attrs:{id:"对象的新增方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的新增方法"}},[t._v("#")]),t._v(" 对象的新增方法")]),t._v(" "),e("ul",[e("li",[t._v("Object.is()\n"),e("ul",[e("li",[t._v("ES5 比较两个值是否相等，只有两个运算符：相等运算符（"),e("code",[t._v("==")]),t._v("）和严格相等运算符（"),e("code",[t._v("===")]),t._v("） ，他们都有缺点，前者会自动转换数据类型，后者的 NaN不等于自身，以及 +0 等于 -0，Object.is 比较两个值是否严格相等，与严格比较比较运算符基本上相同，只有两个不同 +0 不等于 -0 ，二是 NaN等于自身")])])]),t._v(" "),e("li",[t._v("Object.assign()\n"),e("ul",[e("li",[t._v("方法用于对象的合并，将源对象（source)的所有可枚举属性，复制到目标对象(target)，遇到同名对象的时候后面会覆盖前端的属性，布尔值，数组，字符串分别转成对应的包装对象，可以看到他们的原始值都在包装对象内部属性 [[PrimitiveValue]] 上面，这个属性是不会被 Object.assign() 拷贝的，只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。")])])]),t._v(" "),e("li",[t._v("Object.getOwnPropertyDesriptors()\n"),e("ul",[e("li",[t._v("返回某个对象所有的自身属性（非继承属性）的描述对象，该方法主要是为了解决 Object.assign() 无法正确拷贝 get 属性 和 set 属性的问题")])])]),t._v(" "),e("li",[t._v("Object.setPrototypeOf()，Object.getPrototypeof()\n"),e("ul",[e("li",[t._v("本来是使用 "),e("code",[t._v("__proto__")]),t._v(" 属性，用来读取或设置当前对象的原型对象，Object.setPrototypeof() 写操作，Object.getPrototypeOf() 读操作，Object.create() 生成操作代替")])])]),t._v(" "),e("li",[t._v("Object.keys()，Object.values()，Object.entries()\n"),e("ul",[e("li",[t._v("Object.keys() 是ES5 引入的，返回一个数组，成员时参数对象的所有可遍历（enumerable) 属性的键名")])])]),t._v(" "),e("li",[t._v("Object.fromEntries()\n"),e("ul",[e("li",[t._v("Object.entries() 的逆操作，用于将一个键值对数组转为对象，该方法的主要目的就是将键值对的数据结构还原成对象，因此特别适合将Map 结构转为对象")])])])]),t._v(" "),e("h4",{attrs:{id:"运算符的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符的扩展"}},[t._v("#")]),t._v(" 运算符的扩展")]),t._v(" "),e("ul",[e("li",[t._v("指数运算符： ** 但是不是左结合，是右结合")]),t._v(" "),e("li",[t._v("链判断运算符：?.")]),t._v(" "),e("li",[t._v("Null 判断运算符：??，它的行为类似于 || ，但是只有运算符左侧的值为 null 或 undefined ，才会返回右侧的值，但是属性的值如果为空字符串或"),e("code",[t._v("false")]),t._v("或"),e("code",[t._v("0")]),t._v("，默认值也会生效。")]),t._v(" "),e("li",[t._v("逻辑赋值运算符：||=、&&=、??= 相当于逻辑运算，然后根据运算结果，再视情况进行赋值运算")])]),t._v(" "),e("h4",{attrs:{id:"symbol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),e("p",[t._v("可以使用 Object.getOwnPropertySymbols(obj) 进行属性名的遍历")]),t._v(" "),e("h4",{attrs:{id:"set-和-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-和-map"}},[t._v("#")]),t._v(" Set 和 Map")]),t._v(" "),e("ul",[e("li",[t._v("set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数")]),t._v(" "),e("li",[t._v("方法：add，delete，has，clear")]),t._v(" "),e("li",[t._v("Map 的键 什么类型值都可以当作，")]),t._v(" "),e("li",[t._v("方法：size，set，get，has，delete，clear")]),t._v(" "),e("li",[t._v("使用 ... 将 Map 转为 数组，数组转为 Map []")]),t._v(" "),e("li",[t._v("WeakMap，WeakSet，WeakRef创建对象的弱引用")])]),t._v(" "),e("h4",{attrs:{id:"proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),e("h4",{attrs:{id:"reflect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reflect"}},[t._v("#")]),t._v(" Reflect")]),t._v(" "),e("h4",{attrs:{id:"generator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generator"}},[t._v("#")]),t._v(" Generator")]),t._v(" "),e("h4",{attrs:{id:"async"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async"}},[t._v("#")]),t._v(" async")]),t._v(" "),e("h4",{attrs:{id:"class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[t._v("#")]),t._v(" Class")]),t._v(" "),e("h4",{attrs:{id:"装饰器-decorator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#装饰器-decorator"}},[t._v("#")]),t._v(" 装饰器 Decorator")]),t._v(" "),e("ul",[e("li",[t._v("用来注释或修改类和类方法")])])])}),[],!1,null,null,null);a.default=r.exports}}]);