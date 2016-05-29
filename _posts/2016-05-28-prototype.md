---
layout: post
title:  "prototype"
date:   2016-05-28 14:35:23 +0800
tags: JavaScript
---
#### 初级原型封装函数探索：

```javascript
// 类似于prototype 封装函数的精髓
HTMLElement.prototype.addClass = function (addName){
	if (this.className == '') {
		this.className = addName;
	}else{
		var currentName = this.className;
		var arr = currentName.split(' ');
		for(var i in arr){
			arr[i] == addName ? this.className = currentName : this.className = currentName + ' ' + addName;
		}
	}
	// return this.className;
}
HTMLElement.prototype.removeClass = function (removeName) {
	var arr = this.className.split(' ');
	for(var i in arr){
		arr[i] == removeName ? arr.splice(i,1) : arr[i];
	}
	this.className = arr.join(' ');
}
```