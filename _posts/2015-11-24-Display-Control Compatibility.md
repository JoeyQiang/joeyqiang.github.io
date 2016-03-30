---
layout: post
title: Display-Control Compatibility
category: ux
tags: [ux]
---

最好的界面设计莫过于「所见即所得」，即`Intuition`. 人们无需深思，仅仅基于以往的经验和当前场景，便可以做出正确的抉择。为了探索如何更好的完成这一目标，我做了如下实验 -- Gas Pump for Joey.

## Purpose
To demonstrate the idea of Display Control Compatibility through an interaction between a Lawrence, KS gas pump and a genuinely new user ([ME](http://joeyqiang.me/pages/about/)).

## Method
I was taken to a nearby gas pump and attempted to pay for gas at the pump with my credit card. My group took notes, video and pictures to record the experiment. Data was analyzed through reviewing the records and interpreting where the problem areas arose.

## Persona
Attribute | Value
- | -
Name  | Joey
Age  | 22
Sex  | Male
Country  | China
Schooling  | Interaction Design
Time in US  | 4 months
English Level  | 4 Medium

## Actions

**Step one:**
Tried to understand the function of each part of gas pump.如下图。
![Step one](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-01.png)

**Step two:**
Pressed the yellow button intuitively (did not notice the info on the screen).如下图。
![Step two](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-02.png)


**Step three:**
Inserted Credit Card.如下图。
![Step three](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-03.png)

**Step four:**
Noticed the info finally.Select No for CheckersXtra Card.如下图。
![Step four](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-04.png)

**Step five:**
Followed the instructions to continue operating. Inserted Debit Card. 如下图。
![Step five](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-05.png)

**Step six:**
Input the zip code of his billing address. Confused by the question, I input my PIN of debit card.如下图。
![Step six](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-06.png)

**Step seven:**
Input the zip code of Lawrence. Then input pin code of debit card.如下图。
![Step seven](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-07.png)

**Step eight:**
Did not work. Then I switched to my credit card.如下图。
![Step eight](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-08.png)

**Step nine:**
Lifted the nozzle (I did not know what a nozzle was).如下图。
![Step nine](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-09.png)

**Step ten:**
Chose the type of gas (I did not know which type to choose for the car).如下图。
![Step ten](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-10.png)

## Conclusion

1. 让用户正确迈出第一步非常重要。为了让用户做出 make a right first action, 通过做实验采集数据。什么行为是最下意识的[intuitive]。然后通过设计使其 attractive.

 比如我一开始直接开始按黄色的选择汽油类型按钮，一是因为屏幕太暗，我没注意到上面的字。二是黄色按钮尤其显眼，我就没有原因的下意识的按了[intuition]。当没有反馈时，我下意识的插入信用卡进行尝试。这一系列行为都是基于我以往的生活经验。

2. 当用户成功进行第一步后。需要给予其极其准确的反馈，指导其接下来的行为。

 一是明显的视觉提示，比如可以将黑白屏幕转化成彩色的，调整屏幕的亮度，在必要位置[比如喷油嘴]安装提示灯，让用户能在第一时间发现需要注意的地方。

 二是短暂的时间间隔。Interval between action and feedback should be as short as possible, otherwise users would feel totally confused while waiting. 反馈不及时，用户注意力会分散，也会失去耐心，同时可能会进行额外的不必要操作。因为他不知道他的操作正确与否。当我输入邮编或银行卡密码后，3-5s的等待时间让我很煎熬，我以为我又做错了。

 三是反馈需要是详细的解释。比如我作为一个英语非母语的用户，如果用词过于复杂或简短，我在理解上就会出现偏差。尽量让范围的文字变得更加详细和耐心，以满足尽可能多用户的需求。比如 zip code of billing address 可以改成 zip code of Lawrence. 同时，不要仅仅告诉用户你做错了，要告诉他们错在哪了，方便他们知错能改，知其然还需知其所以然。比如提示我 zip code 输入错误或者 pin code 输入错误，而不是之间让我 see cashier. 

3. 适当使用新技术提升用户体验。比如将读芯片的卡槽转成`RFID`等更加便捷的技术。先插入卡便立即拔出确实不附和人的直觉[俗称YW，邪恶了...]。对于初学者，我不知道该给什么样的车加什么类型的汽油。如果每辆车都对应个二维码，扫码即可自动选择加油类型，操作便更加方便了。

4. 设计一个新产品时，一定需要进行用户测试[5人左右即可]，最好非相关领域的用户。用户越不了解产品，产品暴露的问题将会越多，越本质。

5. 设计思维尽量从 `Usability --> Understanding` 转向 `Understanding --> Usability`. 不要一上来就先考虑功能流程，然后让用户测试，接下来根据用户的理解改进。尝试先分析用户的想法，然后基于他们的`intuition`设计功能流程。易于理解带来的 `heuristic interaction` 优于仅仅使用上 usability. 因为看似简单的操作很可能用户根本发现不了，想象你爷爷奶奶第一次拿到手机摸索如何开机的情境。是直接长按开机键吗？

## Figure of Conclusion

![Flow chart for conclusions 1 & 2](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-11.png)

![Concept map for conclusion 5](http://7xoj81.com1.z0.glb.clouddn.com/2015-11-24-12.png)

> Belief in your creative capacity lies at the heart of innovation.
-- Tom Kelly