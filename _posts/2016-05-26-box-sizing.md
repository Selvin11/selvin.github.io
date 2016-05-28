---
layout: post
title:  "盒模型"
date:   2016-05-26 14:35:23 +0800
tags: CSS
---
#### 盒模型之防止盒撑破


对于width=100%;
> box-sizing:border-box;

元素的width=border+padding+element;
也就是说，增加元素的padding和border，不会改变已经设置的width;

> clac() function


需要增加border或者padding时，这是方法二；


```css
  width: -moz-calc(100% - (border+padding));
  width: -webkit-calc(100% - (border+padding));
  width: calc(100% - (border+padding));
```
