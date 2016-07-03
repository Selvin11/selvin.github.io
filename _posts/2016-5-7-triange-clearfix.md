---
layout:     post
title:      " triangle and clearfix"
subtitle:   " \"clear both\""
date:       2016-05-7 14:00:00
tags:
    - CSS
---
#### 关于float

父块&&子块，当子块含有float属性时，脱离标准文档流后，父块不再包含子块，需要进行清除浮动处理：

方法：

1. 为父块增加float属性；
2. 增加空div，设置clear清楚浮动；
3. 父块增加类，使用after或者before伪类，详情如下：

```css
.clearfix:after { 
    content:"\200B"; 
    display:block; 
    height:0; 
    clear:both; 
} 
.clearfix {*zoom:1;}/*IE/7/6*/
```

[clearfix清除浮动进化史](http://www.admin10000.com/document/6259.html)

> 鼠标全过程：

[:link,:visited,:focus,:hover,:active详解](http://www.bkjia.com/Javascript/872310.html)


:link -> :visited -> :focus -> :hover -> :active 