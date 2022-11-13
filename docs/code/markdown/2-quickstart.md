---
tag: [Markdown]
---
# 快速上手
这里介绍一些Markdown最常用的语法，保证您能快速上手。
## 选择Markdown编辑器
因为不确定您的电脑上是否已经拥有一款Markdown编辑器（如typora、vscode），为了最大程度不中断您的学习热情，这里提供两款在线markdown编辑器
1. [Arya - 在线 Markdown 编辑器](https://markdown.lovejade.cn/) （优先用这个）
2. [tool.lu 在线工具-Markdown编辑器](https://tool.lu/markdown/#) （上面的打不开用这个）


## 标题
Markdown中的标题与word中的标题相差无几，但是操作上更为简单。
```markdown
# 一级标题
## 二级标题
### 三级标题
...
###### 六级标题（最小的标题）
```
## 字体
这里字体主要指的是加粗，倾斜等，并不是指黑体还是宋体这种字体。
这里直接给出代码
```markdown
*倾斜*
**加粗**
------- 常用的就上面俩 -------
***倾斜并加粗***
~~删除线~~
Hello<sub>下标</sub>
Hello<sup>上标</sup>
```
上述代码效果
> *倾斜*
**加粗**  
***倾斜并加粗***<br>
~~删除线~~<br>
Hello<sub>下标</sub><br>
Hello<sup>上标</sup>

部分markdown编辑器支持比较方便的快捷键

- Ctrl/Command + B: 加粗
- Ctrl/Command + I: 斜体
## 换行
在部分markdown编辑器中，您可能发现换行(`Enter`)并不能起到效果。此时可以尝试连续输入两个换行，或者连续输入两个空格之后再换行。
这是因为不同markdown编辑器对换行的解析方式不同。

## 条条框框
### 分割线
语法非常直观，连续输入三个及以上的`-`

---
这是一条分割线

### 行内代码
其实就是给一行内容中的部分内容加上一个样式，并不是必须是代码才可以

**代码**
```markdown
可以给我一个`一键三连`嘛～
每个程序员都必须经历的`print("hello world")`
```
**效果**  
可以给我一个`一键三连`嘛～
每个程序员都必须经历的`print("hello world")`
### 代码块
其实就是给一段内容中的部分内容加上一个样式，并不是必须是代码才可以
语法非常简单，用一对` ``` `把内容包裹起来（若标注代码语言可以提供对应代码高亮）

**代码**
````
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello world")
}

```
````
**效果**
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello world")
}
```

### 引用
给一段文本加上样式，官方叫法是引用，其实就是一个样式而已。  
**代码**
```markdown
> 一行的引用

> 多行引用  
多行引用  
多行引用
```
**效果**  
> 一行的引用

> 多行引用  
多行引用  
多行引用

- 如果希望脱离引用的作用范围，换行两次就可以  
- 若在您的编辑器中发现上面的三个`多行引用`在一行，可以尝试在每个`多行引用`各加两个空格
## 列表
**代码**
```markdown
有序列表
1. list-1
2. list-2
3. list-3

无序列表
* list-1
* list-2
* list-3
```
**效果**  
有序列表
1. list-1
2. list-2
3. list-3

无序列表
* list-1
* list-2
* list-3

> 关于嵌套列表，任务列表的用法，各位可以查询[Github Markdown文档](https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#nested-lists)，为了精简篇幅，这里不展开介绍了。

# 表格
纯手工输入Markdown表格在我看来是一件很蠢的事情，因此这里只介绍一下简单的语法，便于大家理解  
实际我一般都使用编辑器自动生成表格的功能  

**代码**
```markdown
| 表头1        | 表头2        |
| ------------ | ------------ |
| Content Cell | Content Cell |
| Content Cell | Content Cell |
```
**效果**  
| 表头1        | 表头2        |
| ------------ | ------------ |
| Content Cell | Content Cell |
| Content Cell | Content Cell |

- 表格末尾的竖线可选。单元格的宽度可以不同，无需在列内准确对齐。 
- 标题行的第一列中必须至少有**三个横线**。
- 在三个横线左右增加冒号可以调整文字对齐方向，如下  

**代码**
```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |
```
**效果**
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |

## 链接
直接看例子

**代码**

```markdown
[我的B站主页](https://space.bilibili.com/125359767)
```
**效果**

[我的B站主页](https://space.bilibili.com/125359767)

语法是很好理解的`[]`里面写最后展示出来的文本，`()`里面写对应跳转的url

---

如果不希望展示文本，只是想展示一个可以点击跳转的链接，可以这么写

**代码**

```markdown
<https://space.bilibili.com/125359767>
```
**效果**

<https://space.bilibili.com/125359767>

## 图片
图片的写法和链接非常相似，只需要在前方加一个`!`  
格式：`![图片名](图片url/本地图片相对路径)`

**代码**
```markdown
![bilibili](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.hzg0.com%2Fcontent%2Fuploadfile%2F202005%2F7f391590551220.jpg&app=2002)
```
**效果**

![bilibili](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.hzg0.com%2Fcontent%2Fuploadfile%2F202005%2F7f391590551220.jpg&app=2002)

通常来说，使用本地图片时，我们都采用把图片拖拽到markdown编辑器的方式，编辑器会自动生成本地路径，因此无需关注本地图片相对路径怎么写。
- 推荐创建好文件夹统一管理图片（或者使用图床）   
- markdown中的图片只是引用，并不像word一样是把图片保存在了文档中，因此原图片被删除会导致markdown中图片加载失败

> 部分笔记软件在插入图片时，会帮用户拷贝一份，此时用户是无须关注具体的图片路径的

## 后记
本文旨在帮助您在短时间内快速上手markdown，只讲了最核心的内容。
一些使用频率不高的功能/特性，例如
- 任务列表
- 脚注
- HTML标签
- 数学公式
- 绘图（流程图、时序图、类图等）
- ...

这些功能因为使用频率不高，因此没有列举（也背离了本文“快速上手”的主旨）

若您已经熟练了本文所介绍的操作，并有意对markdown进行进一步探索，可以前往[Github Docs-Markdown文档](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)进行进一步学习

---

本文也是使用markdown进行编辑的，若您对本文中某些效果感兴趣，可以点击[此处](https://raw.githubusercontent.com/jimyoung1024/jimyoung1024.github.io/main/docs/code/markdown/quickstart.md)获取本文源码
