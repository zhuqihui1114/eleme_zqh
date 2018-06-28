# 开发笔记

**目录**

* [项目搭建](#项目搭建)
* [经验](#经验)






## 项目搭建

### 1、项目初始化
```
 vue init webpack eleme-zqh
 cd eleme-zqh
 npm install
 npm run dev

 知识点
   npm i element-ui -D <=等价于=>
   npm install element-ui --save-dev

   i  ->    install
   D  ->    --save-dev
   S  ->    --save
```

### 2、本地IP调试
| 项目类型   | 修改方法 |
|-----------|------------|
| webpack       | config\index.js 中的host: '0.0.0.0' |
| webpack -simple    | package.json 文件中的 scripts.dev 下加上“ --host 0.0.0.0” 。若要指定端口，在dev.scripts 下加上“ --port 8084”|

### 3、


## 经验

### 1、编写css时，影响页面布局、重绘的属性写前面，可以继承的元素写后面。

