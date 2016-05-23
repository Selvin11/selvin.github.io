---
layout:     post
title:      "What is JavaScript DOM"
subtitle:   " \"note.\""
date:       2016-04-11 10:00:00
author:     "Gsw"
header-img: "img/post2.jpg"
tags:
    - JavaScript 
---
文档中每个元素都是对象，文档是由节点构成的集合；

有很多抽象、绕口、相似的东东，在这里做个自己理解的笔记。

- DOM到底是什么？

​    **将文档表示为一棵树**

> 网页文档➖转换为文档对象（API）➖调用对象属性和方法➖JS操作

- DOM方法

​       get…  使用时，一般会同时进行变量声明，减少后续DOM全局搜索次数，提升性能。

> 对象➕方法➕参数

- 对象（object）

​       属性（property）&方法（method）

> 用户定义对象（user-defined-object）&   内建对象（native object）



> 内建对象：Array 、Math、Date...



> 宿主对象：由浏览器提供（host object），Form、Image、Element还有document对象、window对象

- 节点（node）

​       节点有父兄子的关系（纵向结构），也有前后顺序关系（横向结构）

​       属性（attribute）和方法（method）

> id属性就是一个挂钩，一头连接着文档里某个元素，另一头连着CSS样式表的某个样式，DOM也可以使用这种挂钩。id只在JS中，一样可以被CSS使用

​       getAtttibute&setAttribute均为DOM函数（方法），但都不属于document对象，无法被其调用，只能**通过元素节点对象**调用！（因此首要是用get方法获取元素节点）

​       object.setAttribute（attribute , value）,创建属性名，并设置属性名对应的属性值

> “名值对”这个概念一直在脑海里，属性名和属性值，你找什么，无论怎样都会返回你一个值。

- > **document为浏览器提供的对象，get系列为DOM提供的方法，却是document对象特有的函数。这句话怎么理解？**
  >
  > **document能够使用的函数都是特殊的，get就是其中之一。**
  >
  > **除了get方法，还有createElement(node节点名)、creatTextNode(text文本内容)**


**函数＋（）之后就会立即执行**

- 封装函数之后，还得使用它，这就需要使用事件处理函数调用了

  怎么理解，函数写好后，就像锤子造好了，钉子、板子放那里了，你得用锤子敲钉子，才能造房子啊。这里的敲击就是事件，说白了，就是使用锤子的场景（诱因），也就是函数对应锤子，事件处理函数对应敲击事件。

  > 事件处理函数的机制，一旦事件发生，对应的代码就会执行，之后会反馈一个布尔值，这个值又会返回事件处理函数，告诉它能做还是不能做，true就开搞，false就算了。


- this到底是什么？

  唉，前面右手第三个，对，就说你呢。

  this就是这个你。

  方便快捷的进行对象间的切换。


> - childNodes属性是什么？（元素和元素节点是一个概念）
>
> 它可以用来获取任何一个元素（节点）的**所有子元素**节点（所有类型的节点），这个值是一个数组。(文档是由节点构成的，空格和换行符都是节点)
>
>
> - nodeType属性
>
> 每个节点都有的属性，它对应的有用属性值一般为3个（1，2，3），分别对应元素节点，属性节点，文本节点，根据返回的属性值，我们可以知道这个节点到底是什么节点。
>
> - nodeValue属性
>
> 得到或设置节点属性对应的值
>
> **element.childNodes[i].nadeValue(得到节点属性值)；**
>
> **当声明变量之后，就可以改变其值**
>
> 

- 检查与遍历

  检查文档中是否存在我们要找寻的，以免崩坏整个网站，遍历是为了找到所有符合我们寻找条件的，并形成一个数组。

  **for()之后，得到elment[i]的数组，continue是指：在当前循环中立即跳到下一次循环，不再继续执行本次循环的后续语句**


- DOM属性和方法

  parentNode、lastChild、nextSibling…都是属性；

  appendChild、inserBefore…都是方法

  **将新创建的元素节点插入文档中，有两种方式：**

  **1.用appendChlid方法，使其成为现有文档中某个元素的子元素；**

  **2.使用inserBefore方法，直接插入现有文档中某个元素之前；（或使用自创inserAfer方法，插入之后）**


------

- CSS－DOM

  DOM只能获取HTML内部的style样式，外链的样式无法获取，但是可以用DOM设置style样式。

- **if(something != null)与if(something)完全等价。**

  **if(something = null)与if(!something)完全等价。**

- **JavaScript String对象中的indexOf方法**

  ```javascript
  stringObject.indexOf(searchvalue,fromindex)
  ```

  该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。

  **注释：如果要检索的字符串值没有出现，则该方法返回 -1。**













