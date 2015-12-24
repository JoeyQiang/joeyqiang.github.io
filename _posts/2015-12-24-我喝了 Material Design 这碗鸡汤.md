---
layout: post
title: 我喝了 Material Design 这碗鸡汤
category: design
tags: [ux]
---

断断续续的看了一个月，终于啃完了 [Material Design](https://www.google.com/design/spec/material-design/introduction.html) 这个奉为最新设计趋势的圣经。从不屑，到好奇，再到揣摩其中的思想并尝试总结规律。最后不得不承认，`谷`歌的`巨`牛设`计`师 [下文简称`古巨基`] 绝对是业界良心。其严谨的逻辑和分享的精神正是作为一个互联网从业人员所必须具备的素质。通过参照这个手册，普通人也可以做出符合用户体验的设计。

开篇古巨基提出了三个准则：

1. Material is a metaphor，设计时联想现实生活中的卡片
2. Bold, graphic, intentional，大胆运用颜色和图片
3. Motions provides meaning，不做没意义的动效

这三个准则我理解即为：拟物，个性，简约。

**拟物**：最好的设计能唤起人类的共鸣，即 visceral reflection, 因此要留意日常生活中一举一动，培养一颗发现美的眼睛。我觉得仔细盯着一幅画观察细节或者买个好耳机听好歌的细节可以培养我这方面的能力。

**个性**：咩有个性的设计师一定不是个好艺术家。看过很多被称为艺术家的作品，而后发现他们的作品是不能够用理性来评判优劣的，甚至可能都看不出其想表达的意义和感情。然而这就是艺术品。都说设计是理性的，艺术是感性的。想更接近艺术一步吗，show your characteristics!

**简约**：设计界经典语录 less is more. 大道至简。越来越感受到这句话的深刻意义。自己写前端代码时总想着能用最酷炫的效果，最花哨的样式，结果总是忽略了产品的目的本身。往往越复杂的网站看起来越朴素，越有内涵的人打扮越随意。然而老祖宗早已看穿了这一切。

接下来，什么是 Material?

大家可以把 Material 想象成一个放在真实环境中的卡片。在真实世界中一般有两种光源，点光源和环境光。前者有投射方向，光线比较聚集强烈，好比太阳照到人身上会产生特定方向的阴影, 如图。

![Shadow cast by key light](http://7xoj81.com1.z0.glb.clouddn.com/2015-12-24-01.png)

后者类似LED日光灯，光比较分散柔和，只会产生泛泛阴影之感，如图。

![Shadow cast by ambient light](http://7xoj81.com1.z0.glb.clouddn.com/2015-12-24-02.png)

我们的一切设计就存在这个3D的环境当中，为了方便测量，古巨基给这个环境指定了 x, y, z 轴，如图。

![3D space with x, y, and z axes
](http://7xoj81.com1.z0.glb.clouddn.com/2015-12-24-03.png)

长宽分别是 x, y 轴，深度是 z 轴。这三个轴都是无尽头的，考虑到界面在虚拟世界中理论上是可以无限延展的。这里对测量单位进行一下解释。古巨基们发明了一个晦涩的单位 dp. 如果这个环境 [手机分辨率] 是 160 dpi, 那么你设计稿的 1px 就是 1dp. 否则，请参照如下公式：**px = dp *（ dpi / 160 ）**. 数学不好的孩纸请默默的拭去眼角不经意流出的翔。

Material Design 的另外一个特色是其模块化思想。设计之前，先做好基础准备。

1. Color
2. Icons
3. Imagery
4. Typography
5. Writing

**Color：** 确定自己的主调色板，三个同色系的主色调加一个强调色。不同功能字体的颜色 [标题，正文，解释文字]，不同状态下的颜色 [inactive, active, disabled]. 使用设计软件保存下这些颜色，便于设计时直接调用。

**Icons：** 选择简单，不言自明的 icons. 作者一般直接使用 [阿里巴巴图标库](http://www.iconfont.cn/) 或 [Google 图标库](https://design.google.com/icons/)。确保你选的图标属于同一风格即可，如果能完全符合 MD 的要求那更真真是极好的了。

**Imagery：**这一点作者个人觉得比较困难, 需要有很好的素材库。否则只能请技术高超的摄影师和后期进行原创操作。对于小的设计团队而言成本很高。不过统一自己的图片的风格还是需要牢记的。

 **Typography：**古巨基推荐使用 Roboto 字体，不同类型的文字大小也一一限定了，可以直接照搬或者用设计软件将它们全部保存为模板，便于重复使用。

 **Writing：**简洁，易懂，不装逼。尽量将能删去的文字全部删去，然后请不相关领域的用户进行测试，看看他们是否有理解上的障碍。最后如果你要做国际化的软件，用词一定不能装逼 [俗语]，否则很大一部分软件语言非母语者会有理解上的障碍，多下几个国外软件你就懂。

正式开始设计时，参展 Layout 部分进行布局，可以通过 Google 下载尺寸模板。各类 Components 的样式也可以直接使用，网上各类不同的资源。作者是 MAC 用户，设计界面一般使用 Sketch, [Sketch App Sources](Shttp://www.sketchappsources.com/) 是我最长使用的网站，里面有各类丰富的模板。交互细节方面请参照 Pattern 模块，制定一个统一的标准是最重要的，避免不同的设计师和开发者采用自己个人的偏好，导致产品细节处不一致。

设计完成后，可以参照 Usability 模块进行可用性测试。个人觉得古巨基的要求是相当相当高的，大部分 App 都难以满足其所有要求。但可以把其当做一个评判标准，满分100分，老师您能给我打几分？

作者进行可用性测试时一般使用五个标准：

1. Affordance，功能是否实现
2. Signifier，用户是否理解
3. Matching，理解是否容易
4. Consistence，理解是否一致
5. Feedback，错误理解是否能纠正，正确理解是否能强化

如果上述五点要求全部能够满足，我相信这个应用已经可以称之为一个易用的应用了。

当然 Material Design 并不是万能的，实践时更应该结合实际情况。产品的主要发布平台是什么，`Android` or `iOS`. 如果是 `Android`，当然可以完全匹配。IOS 就需要适当平衡 Google 的样式风格和 [iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/index.html#//apple_ref/doc/uid/TP40006556-CH66-SW1) 的样式风格。如果是网站，我还是很推荐 MD 风格的，Google 旗下的网站真的用起来 so easy 啊。只有一点作者个人持保留观点，就是 `MD` 的 Subheader [收缩侧边栏导航]. 我是尽可能避免使用这一特性。即使使用了侧边栏导航，也尽可能使其 permanent rather than temporary OR transfer primary functions outside to be tabs nav. 实在不喜欢犹抱琵琶半遮面的感觉，每次看脸都得先把面罩取了，真是麻烦。

最后，也建议 Developers 抽空也去看一下 Material Design Instruction, 可以极大的降低以后您和设计妹子 [or 汉纸] 之间的沟通成本，一段美好的姻 [gay] 缘也许能就此产生呢。

当然，纸上得来终觉浅，绝知此事要躬行。放假抽空设计一个基于 `MD` 的 Handhold device 的移动端购物网站作为锻炼. I really like the floating button idea. It is super easy and straightforward.

**Last but not least, may 简书 and every 简友 life be filled with joy and may each new day bring you moments to cherish. Happy Christmas.**

![Merry Christmas](http://7xoj81.com1.z0.glb.clouddn.com/2015-12-24-04.jpeg)