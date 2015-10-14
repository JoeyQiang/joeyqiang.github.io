---
layout: post
title: 浅谈 Responsive-Table
category: ux
---
![Table]({{site.baseurl}}/public/images/Table.png)

为了自己生活费，在学校 **Assessment & Achievement Institute** 兼职前端开发的工作。由于工作岗位仅面向学生，任务不重，且工作时间灵活，工资也很优厚，还是很感谢学校的。

第一个任务就是将一个网页的表格改成自适应布局，给移动端用户一个良好的视觉呈现。由于学校的网站都是由 [Drupal](https://www.drupal.org/) 搭建的，前端界面通常都是通过 `Drupal` 提供的默认组件和富文本编辑组合而成。虽然 `Drupal` 提供了自适应的 theme, 但是网页主体内容的自适应还需要前端人员单独完成。

<!--more-->
最初的表格是内容编辑人员通过富文本编辑器插入表格编辑而成。`Drupal` 自动生成 `width:100%` 的表格。虽然非固定表格可以做到自适应，但由于表格长度超出手机屏幕，文字被压缩成长条形，阅读体验十分糟糕。温柔美丽的 PM Mellissa 只甩给我一句话，improve it on mobile。拿工资就要干实事，开始修改吧。

首先改的就是其布局。考虑到手机和电脑不同的屏幕尺寸，我确定了手机端采取纵向排列(默认显示第一项，折叠其余)，电脑端横向显示（全显示，不提供折叠）的设计方案。将 `table` 结构的 `HTML` 代码为 `ul & li` 结构。方便利用 `CSS @media` 属性改变其布局。

原来的 `HTML` 结构是这样的：

```html
<table border="" cellspacing="" cellpadding="">
   <tr><th>Header</th></tr>
   <tr><td>Data</td></tr>
   ...
  </table>
```

修改后的 `HTML` 结构是这样的：

```html
<ul>
    <li class="date">Sunday, October 11</li>
    <li class="detail">
        <ul>
        <li class="time">All day</li>
        <li class="event">IAEA Executive Committee Meeting</li>
       </ul>
    </li>
</ul>
```

之后是 `CSS` 部分，考虑到目前主流宽屏尺寸为1024px+，设置1024px作为 `CSS` 样式的分界线。我喜欢从小及大开始分析。当尺寸小于1024px时，保持 `ul & li` 原有的块级属性即可，设置 `width:100%`，从上到下依次排开，利用 `padding` 属性分隔即可。

当尺寸大于等于1024px，需要利用 `float` 属性、`width` 百分比自适应、`margin: 0 auto` 居中 将 `ul&li` 模拟成 `table` 显示。注意 `HTML` 分层时考虑到最终的显示效果，方便 `CSS` 在其上的运用，以免造成代码过度复杂。

`CSS` 结构如下：

```css
/* Public Style */
.clearfix{}
/* Screen Size < 1024px */
@media screen and (max-width: 1023px) {
  ...
}
/* Screen Size >= 1024px */
@media screen and (min-width: 1024px) {
  ...
}
```

最后是简单的 `Javascript` 完善，我希望在移动端可以额外提供点击标题展开详情的功能，默认只显示第一项的详情。这样更利于用户在屏幕体积较小的情况下更快的搜寻到自己的目标。利用 `Jquery` 的 `click & slide` 事件实现即可。

在此分享一下我写 `Javascript` 的思路过程:
1.   先写成一步一步执行的顺序式代码

```javascript
var $obj1 = $(""),
         $obj2 = $("");
var slideToggle = function(){};
$obj.bind("click",function(){ slideToggle(); });
...
```

2.   提取公共项，转成对象自变量的函数式代码

```javascript
var slideToggle = {
        obj1: $(""),
        obj2: $(""),
        animate: function(){},
        bind: function(){ this. animate(); },
        initial: function(){ this.bind(); }
};
slideToggle.initial();
```

3.   根据实际运用情况，转成可扩展的面向对象代码

```javascript
function SlideToggle(target, content){
       this.target = target;
       this.content = content;
}
SlideToggle.prototype = {
       animate: function(){},
       bind: function(){ this.animate(); },
       initial: function(){ this.bind(); }
};
var slideToggle = new SlideToggle("", "");
slideToggle.initial();
```

思考完了后，自己先在 [CodePen](http://codepen.io/) 上做成 Demo 测试, 避免直接修改造成网站出错同时易于合作分享。

下面是 Demo 链接，需要看源代码的童鞋可以点击查看，欢迎提供修改意见：
[Responsive-Table Demo](http://codepen.io/JoeyQiang/pen/vNOypQ)。

PS: 
> 1. `HTML`, `CSS`, `Javascript` 强烈建议分离，方便以后修改。
2. `CSS` 尽量调用 `class` 而不用 `id`，`CodePen` 提醒我的。
3. `CSS` 可以使用 `Sass` 更精简，`Javacript` 尽量多思考，多优化。<br/>
—— 野子Joey


IN THE END, 附网站最终实例动图:
![实例动图]({{site.baseurl}}/public/images/实例动图.gif)
