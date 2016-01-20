---
layout: post
title: 从 Sketch 到 CSS
category: design
tags: [ux]
---

以前先接触的 CSS，后来又接触了 Sketch, 如今再反过来使用 CSS 的时候，发现设计的思想基本都是共通的。于是，笔者希望通过此文总结下最近所学，希望能对大家有所帮助。

## Article Structure

- UI Design 的基本思想
- 如何将 Design Ideas 运用到 Sketch 中
- 如何将 Design Ideas 运用到 CSS 中

### UI Design 的基本思想

**Limitations**:

- Layout： 确定自己页面的尺寸和布局，是 Mobile 还是 Desktop. 不同的设计尺寸有对应的排版选择。同时考虑如果是响应式设计，如果让排版在不同尺寸间无缝转化。
- Branding：一个产品需要有自己的品牌意识，因此设计风格要统一和谐。可以从 Logo 配色开始下手，提取 Color Palette，从而统一设计稿的颜色。此外，可以设计一个比较新颖的元素 [动效或设计] 合理运用到不同尺寸的设计中，给用户深刻印象，强化品牌意识。
- Flat Design：已经 2016 年了，扁平化设计仍然是世界的潮流。高光阴影交错，纹理齐飞的拟物化设计已经一去不复返。简单的设计如今更受到用户的喜欢。

**Opportunities**:

- focus
- native functionality
- known pattern

![Focus example](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-01.png)

产品的核心功能是什么？这是 UI 设计时可以说最重要的事了。看看 Facebook 和 Dropbox 的设计可知，前者希望我们注意朋友间的状态，后者希望我们注意自己的文件。视觉中心是图片和黑色加粗文字，主色调灰色，辅助一个强调的蓝色，简单的 Icon，一致的网格布局就是一个 Well-designed 的设计。

![Native functionality examples](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-02.png)

在技术发展日新月异的时代，合理运用设备的功能可以设计出许多酷炫的功能。比如 Uber 运用手机 GPS 实时定位出租车，Instagram 运用摄像头进行照相。当某一硬件功能出现升级换代时，Design something new 的机会便出现了！

![Known pattern examples](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-03.png)

看看 10 年的设计吧，有没有丑的感觉呢 [背景按钮，多种字体，重纹理阴影，可见网格分隔]。如今在 Material Design 和 IOS Interface Design 的指导下，网站和应用的设计已经越来越统一，用户体验也越来越好。

**Grids and Layout**:

- anatomy: columns, gutters, margins
- baseline grids
- mobile grids

> 布局布的好，基本丑不了 – 野子Joey

确定页面的宽度，根据需求确定列数，每列的宽度，列与列之间的间隔，以及内容两侧的间隔，使用软件制作处自己的网格布局 [Sketch 可以很容易的做到这点], 也可以在适当处添加水平辅助线帮助设计, 这样你所有元素的大小，元素间的 margin 和 padding 也都统一了，和谐自然产生美啊。

![Columns, gutters, margins, baseline](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-04.png)

如果是 Mobile Design, 为了精确布局，也可以创建全网格布局。

![Mobile Grids](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-05.png)

**Typography**:

- typeface choice
- font size and styles
- white space, contrast, legibility, readability
- forming a style guide

字体的选择，对于 IOS，默认为 Helvetica Neue。 对于 Android, 默认 Roboto, 这两种看起来蛮像的，区别不大。对于 App 设计，一种字体已经足够，当然你可以再选择一种 Serif 字体强化标题或作为品牌特征。

![Roboto vs Helvetica Neue](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-06.png)

注意 Facebook 的字体设计，人名，时间地址，和正文分别用的不同的字体大小，粗细和颜色用于区分，在该对比的地方一定要强化对比的程度，否则干脆一致。

该留白的地方要留白，人都喜欢宽敞的地方，页面也需要留白喘气，不信你看:

![whitespace vs no whitespace](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-07.png)

同时注意文字长度要适中，英文每行 `7 - 9` 个单词，中文每行 `15 - 22` 的字，行高 `1.3 - 1.7` 便于阅读。字体颜色和背景颜色要有足够的对比度反差，便于阅读[不要将浅色字体放在亮背景上，或者深色字体放在暗背景上，如果图片作为背景，一般在图片上加一层透明遮罩]。最后是内容上的优化，文字的含义要通俗易懂 [考虑可能有非母语用户使用你的产品哦]。

**Color**:

- background
- text: main, muted, highlighted
- assist: shadow, divider

一个简单且实用的思路去选取颜色是，背景色采用白色或者浅色，从 Logo 中选取一种颜色作为主颜色，然后再选取主颜色的对比色作为强调色，透明黑色作为阴影，不同灰度灰色作为边框，分割线，柔和字体颜色。

![Color Palette](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-08.png)

**Other color considerations**:

- give each color a meaning
- contrast
- limit the use of colors
- consider real content

颜色有其一定的意义，使用每一种颜色前先想想为什么我要用这个颜色 [比如你不会想把团购网站设计成黑色幽默风格]。主色调和强调色之间一定要有对比。主要颜色尽量不要超过三种，避免给用户造成过高的视觉负担。考虑到 App 的实际应用场景，不同的用户会上传不同的照片，因此背景，字体颜色尽量选取 [Web Safe Colors](http://websafecolors.info/)，在实际场景不断改进完善。

更多颜色内容可参考：[Material Colors](https://www.google.com/design/spec/style/color.html#).

### 如何将 Design Ideas 运用到 Sketch 中

软件框架层大家可以参考我之前写的这篇文章：[如何用 Sketch 进行网页设计](http://joeyqiang.me/design/2016/01/06/%E5%A6%82%E4%BD%95%E7%94%A8%20Sketch%20%E8%BF%9B%E8%A1%8C%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1/)。

这里我主要以一个 [App 页面](https://www.behance.net/joey-qiang)设计作为范例，补充一些设计细节上的内容 [也算是我踩坑的一些经验吧]。

![App Demo](http://7xoj81.com1.z0.glb.clouddn.com/2016-01-20-09.png)

1. 设计的时候打开 Material Design 或者 IOS Guidelines, 边查看边设计，大大提升操作效率，看多了很多数值自然而然就记住了 [最主要是字体大小]。
2. 如果尺寸宽度为基数，放大一倍进行设计，这样就不会总为那 1px 对齐纠结了[逼死处女座系列]。同时也更方便 grids 宽度的设计，偶数的公约数比较多哈。Magin 尽量选择 grids 的一倍或多倍，便于对齐。
3. 辅助颜色板[灰度类的]最好有自己的模板，以免每次都到重新设置，节约时间。能用透明黑色就不用灰色，更清晰。不同明度的同色相颜色可以直接加透明黑色遮罩层就行模拟。
4. 善于重复使用相似元素，改变布局即可，可以极大的节省实际操作时间。必要时可以创建 Symbol 或 Styled Text 方便日后重复使用。孰能生巧，实践中每个人都能总结很多适合自己的经验。

### 如何将 Design Ideas 运用到 CSS 中

User Interface Design 绝对不是仅仅画界面，界面做的再漂亮，没有考虑实际运用场景，开发不出来，或者不具有实际应用价值，只能称之为"花瓶"了。因此自己设计的时候，尽量多站在产品和开发的角度去思考问题，怎么设计更能突出功能，怎么设计更能便于开发，实际交互时的效果是怎样的, 这才是一名合格的 User Experience Designer 应有的品质。因此，国外招聘中都要求 User Experience Designer 了解 Web 前端语言 [Html, CSS, Javascript], 作为技术层面的考核。

随着 CSS 预编译处理器的流行 [后文用 Sass 作为例子]，极大的方便了前端书写 CSS. CSS 我仅仅是新手水平, 这里我主要讨论如何使用 Design 的思想写出更方便使用的 Sass.

```CSS
//@MEDIA QUERIES
//确定尺寸，自适应布局

$media-l: 1200px;
$media-m: 900px;
$media-s: 600px

//GRID
//统一布局，padding/margin 均可用, 高度，宽度尽量为其倍数

$grid: 10px
$grid-double: $grid * 2;
$grid-third: $grid * 2;
$grid-half: $grid / 2;

//COLORS
//用实物或功能命名

$color-bodybg: #fafafa;
$color-primary: #f0214f;
$color-accent: #505eb1;
$color-text: #555;
$color-muted: #aaa;
$color-border: #c3ddc8;
$color-grey-mist: #f5f5f5;
$color-grey-platinum: #bbb;
$color-mask: rgba(0,0,0,0.1);

//FONTS
//字体，大小，粗细

//1种或2种字体
$font-family-1: Roboto, sans-serif;

//一般4种大小 [header text, body text, remark, other]
$font-header: 150%;
$font-body: 100%;
$font-remark: 70%
$font-other: 85%;

//三种粗细即可 [light, normal, bold]
$font-light: 300;
$font-normal: 400;
$font-bold: 700;

//Z-INDEX
//用于 Material Design 不同层级的使用
$z-index-header: 1000;
$z-index-sidebar: 1100;
$z-index-notify: 1200;
$z-index-modal: 1300;
```

个人觉的 Sass 的 mixins 用处不大，太过繁琐，CSS 就是 CSS， 没必要搞得 Javascript 一样过度程序化。涉及到 vender-prefix 的部分， 推荐使用 [Autoprefixer](https://github.com/postcss/autoprefixer)。Nesting 加上伪类建议不要超过4层，否则后期修改比较麻烦，适当使用 `>` 子元素搜索符即可。

### Conclusion

无论是用 Skech 设计界面或是直接 CSS 设计界面，保有 Design Ideas 是最重要的，工具不是重点，思想才是王道。[CSSketch](https://github.com/JohnCoates/CSSketch) 这款插件甚至支持直接用 CSS 修改 Sketch File, 感兴趣的同学可以去试用下。各大应用商店应用数不胜数，没事干下几个玩玩，多注意观察主流应用的设计细节, 尤其是交互细节 [下拉，悬浮，空状态，初次登陆状态，引导界面]，总结为己用。

> 我说的都是错的，如果不自己思考的话。 – 野子Joey

### Resources

- [Mobile UI Design for Beginners](https://webdesign.tutsplus.com/courses/mobile-ui-design-for-beginners)
- [Variables: The Backbone Of CSS Architecture](https://www.smashingmagazine.com/2016/01/variables-in-css-architecture/)