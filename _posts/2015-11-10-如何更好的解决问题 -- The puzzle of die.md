---
layout: post
title: 如何更好的解决问题 -- The puzzle of die
category: design
tags: [innovation]
---

人们常说，没有学不好的学生，只有不会教的老师。此言差矣，不同学生的智力不同，成长环境不同，自然会在学力的表现上参差不齐。然而好的教育确实又可以在一定层面上改善这种情况。即，尽量让问题满足大部分人的 `mental model`。

本文尝试通过分析一个问题，观察一般人是如何解决这个问题的，尝试总结他们的思维模式，最后总结如何帮助人们更好的解决问题。

题目来了：**三个骰子[骰子的对面点数之和为七]摆在一个平面上，请根据下图判断 A, B, C 中哪一个骰子的点数排列顺序与众不同。**
![The puzzle of die](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-1.png)

先别看答案，自己做一下哈~ who gives the answer a shit, the importance is the way of how you solve the question.

我一共采访了四名受试者，三位一致的答案如下。
![Answer one](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-2.png)
聪明如你，应该一眼就看懂了思维过程。对于不是很理解的朋友，我把一个逻辑思维比较弱的朋友的思考过程展示如下，去帮助你更好的理解这个问题的思考过程。

**Step 1：**
She tried to understand the meaning of the question first. And she thought the problem ask her to figure out the orientation of the dots based on how the dice lay.
**Step 2：**
![Step 2](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-3.jpeg)
She marked hidden number on each size of the die.
**Step 3：**
![Step 3](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-4.jpeg)
She tiled the 3D die into 2D paper to figure the orientation out. But she failed to do that.
**Step 4：**
![Step 4](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-5.jpeg)
Then she thought she needed to turn the three dies into the same orientation on the table first.
**Step 5：**
![Step 5](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-6.jpeg)
After rotated dies, she tiled the dies once again and found die two and three are same, which are different from die one though.
**Step 6：**
![Step 6](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-7.jpeg)
Finally, to verify her answer, she drew another kind of perspective, which you can not only see hidden sizes but also can see the orientation of sizes around the side of the die.

大部分人的思维基本都是上述情况，需要通过借助一定的 `physical models` 去帮助自己建立正确的  `mental models`。这也给了我们一定的启示，即借助 `representation` 去帮助人们更好的理解一个虚拟或者抽象的问题。 

同时也要考虑抽象思维能力强的同学是如何思考的。这种思维模式是脑细胞在一瞬间产生的，很难用语言描述清除一步一步具体的过程，所以我做了以下三维动态，希望可以帮助大家理解其思考过程。纯脑补出 3D 骰子在脑海中，模拟其旋转过程并进行比较。[源码地址](http://codepen.io/JoeyQiang/pen/QjZoPE?editors=110)。
![3D gif](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-8.gif)

一位不同的答案的如下。
![Answer two](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-9.png)

She understood the orientation of the dots based on the three facing sides. This is really an innovative idea. If so, there are three correct solutions per set.

上图是其中的一种情形，选取 1，3，6，4 作为一个坐标轴，观察其旋转方向。同理可选取 2，4，5，3 或 1，2，6，5。这同样提醒我们，即使面对相同的一个问题，不同的人会有不同的理解角度，教科书式的答案并不重要，重要的是如何理解不同人的思考过程，以及造成思考偏差的原因，从而进一步优化问题。

**总结**

1. 尽量把抽象问题具体化。
2. 尽量把复杂问题简单化。
3. 借助 `representation` 帮助人思考。
4. 因材施教，教学方式多样化。

比如：**如何让一个小孩子更好的理解分数？**

先让小孩子认知大环境的相同群体，所有图形的数量是圆形数量的几倍。
![shapes to shape](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-10.png)

再让其认知相同群体中的部分，圆形的面积是阴影扇形面积的几倍。
![shape to parts](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-11.png)

再将此概念往更抽象的维度扩展，应用于不同领域（长度等），整个线段的长度是红色线段长度的几倍。
![part to segments](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-12.png)

最后再转移到分数运算符上，变成一个纯数字大小的概念。
![segment to operator](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-10-13.png)

对于不同年龄，不同学科的教学有着极其的多样性。如何通过调研，分析，进而设计帮助学生更好的解决问题，真的是一个非常有意义且有挑战性的课题啊。

> It would be so honored for me to use interaction design to improve education.
-- 野子Joey