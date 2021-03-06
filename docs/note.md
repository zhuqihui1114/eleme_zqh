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

### 3、npm使用
```
npm安装模块
【npm install xxx】利用 npm 安装xxx模块到当前命令行所在目录；
【npm install -g xxx】利用npm安装全局模块xxx；
本地安装时将模块写入package.json中：

【npm install xxx】安装但不写入package.json；
【npm install xxx –save】 安装并写入package.json的”dependencies”中；
【npm install xxx –save-dev】安装并写入package.json的”devDependencies”中。
npm 删除模块
【npm uninstall xxx】删除xxx模块；
【npm uninstall -g xxx】删除全局模块xxx；
```

### 4、Vue文件源码隐藏设置
```
webpack+vue 2.0打包发布之后，将发布的文件部署到服务器中之后，浏览器中访问的时候会出现一个webpack文件夹，里边会显示vue文件源码
如果不想让vue源文件显示出来，可以在config/index.js 中 build 下的 productionSourceMap: true, 改为 productionSourceMap: false, 即可
```

### 5、详情弹层页需要清除浮动的问题

  原代码中：设置了最小高度为100%，并且又设置了margin-top，导致关闭按钮被挤到下面看不到的地方，且没有出现滚动条。
```
  .detail-wrapper
    width : 100%
    min-height : 100%
    .detail-main
      margin-top : 64px
      padding-bottom : 64px
```
  解决方法：
```
    1、将detail-main类下面的margin-top样式属性换成：padding-top 即可
    2、在detail-wrapper类下面添加 display: inline-block，这样可以清除detail-main上margin属性对文档流后面元素的影响（类似于清除浮动）
```

### 6、文字和图标水平排列不整齐问题
  文字默认会有上下padding，导致水平排列不整齐

```
解决方式
1、设置 vertical-align: top 后，再设置 line-height: 28px 上下居中即可
```

## 经验
```
  1、编写css时，影响页面布局、重绘的属性写前面，可以继承的元素写后面。

  2、Css Sticky footers布局（各种实现方式学习）

  3、flex布局
```
