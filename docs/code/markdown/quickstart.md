# 快速上手
这里介绍一些Markdown最常用的语法，保证您能快速上手。
## 选择Markdown编辑器
因为不确定您的电脑上是否已经拥有一款Markdown编辑器（如typora、vscode），为了最大程度不中断您的学习热情，我这里提供两款在线markdown编辑器
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
hahah
hahah
```
**效果**  
> 一行的引用

> 多行引用
多行引用
多行引用

如果希望脱离引用的作用范围，换行两次就可以

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

表格末尾的竖线可选。
单元格的宽度可以不同，无需在列内准确对齐。 标题行的第一列中必须至少有**三个横线**。

在三个横线左右增加冒号可以调整文字对齐方向，如下  
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
