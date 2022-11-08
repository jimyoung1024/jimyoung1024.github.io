---
tag: protobuf
---

# 简介

由于Protocol Buffers名称过长，本章剩余内容皆简称为pb

英文基础好，且有一定编程基础的同学，建议直接阅读官方文档[^1]

## pb是什么

### 官方定义

pb是Google设计的一种语言中立的，平台中立的，可扩展的机制（通常也称为协议），用于序列化结构化数据。可以想象成是XML，但是更小，更快，更简单。

上述内容翻译自pb的[官网首页](https://developers.google.com/protocol-buffers)

> 有些朋友可能不理解"语言中立，平台中立"是什么概念，实际上就是不依赖于某种特定编程语言，也不依赖于某个特定平台

### 通俗解释

人与人之间交流需要用到语言，因为我们无法直接把我们脑中的思想传递给他人（三体人狂喜），而是需要把这种信息加工成某种语言（比如中文）。这样都会同一种语言的人，就能相互交流信息。

同样的，计算机程序之间传递数据，也需要一种“媒介”，pb在这里就承担了这个角色。

## pb能做什么

将程序内存中的数据（比如Java的类的实例，Golang里的struct），序列化成一串二进制数据。其他程序拿到这串二进制数据之后，能够将其转化到自己的内存中。

最典型的例子是，gRPC框架使用pb协议进行通信

## 优势

1. 数据包更紧凑
2. 序列化速度更快
3. 支持相当多的编程语言
4. 自动生成类的机制，使其功能性更强

## 劣势

这里列举两个对于学习上手来说的劣势

1. 程序之间通信依赖于`.proto`文件，如果没有这个文件，将无法反序列化pb数据包（也是因为使用pb需要先利用`.proto`文件生成代码，导致pb并没有json等协议容易上手）
2. 没有Json等协议直观。如果不借助一些工具，人类无法直接理解pb数据包中的内容

官网中有更多关于pb劣势的说明，这里不再赘述。[pb的劣势](https://developers.google.com/protocol-buffers/docs/overview#not-good-fit)

## 几个名词解释

| 名称       | 解释                              |
|:--------:|:------------------------------- |
| protobuf | Protocol Buffers的别名             |
| pb       | Protocol Buffers的简称，通常称其为`pb协议` |
| protoc   | `.proto`文件的编译器                  |
| pb文件     | `.proto`文件的简称                   |

## 相关链接

[^1]: Protocol Buffers谷歌官方文档 <https://developers.google.com/protocol-buffers/docs/overview>