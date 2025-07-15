# C/C++ Snippet Extension

v1.0.1

该扩展为&ensp;Visual&ensp;Studio&ensp;Code&ensp;添加了&ensp;C/C++&ensp;的代码片段。

This extension for Visual Studio Code adds snippets for C/C++.

## 用法 Usage

输入代码片段中的部分关键字，例如&ensp;"for"，然后按下回车键。

Type a part of the keywords in snippet e.g., "for" and press enter.

```cpp
for // 创建一个 for 循环片段 // Creates a for loop snippet
```

或者，也可以直接在编辑器中按下&ensp;<kbd>Ctrl</kbd>&ensp;+&ensp;<kbd>Space</kbd>（适用于&ensp;Windows、Linux&ensp;或&ensp;Mac）来访问可用的代码片段。

Alternatively, one can also just press <kbd>Ctrl</kbd> + <kbd>Space</kbd> (works on Windows, Linux, or Mac) to access the available snippets in the editor.

## 更新 Update

添加了最新的注释代码片段：

The latest comment code snippets have been added:

增加了额外的列提示，这样你就知道你的代码的复杂度了（推荐与Better&ensp;Comment&ensp;一起使用）
Added extra column hints so you can be aware of your code complexity (recommended to use with Better Comment)

```cpp
//struct // 创建一个结构体切分注释 // Creates a structure split comment

/* struct ----------------------------------------------------------------- 80 // ! ----------------------------- 120 */

// 注释缩进 4 个空格的位置 // comment indent 4 space
//4
/**/

// 注释缩进 8 个空格的位置 // comment indent 8 space
//8
/* 08 */

// 注释缩进 12 个空格的位置 // comment indent 12 space
//2
/* - 12 - */

// 注释缩进 16 个空格的位置 // comment indent 16 space
//6
/* --- 16 --- */

// 注释缩进 20 个空格的位置 // comment indent 20 space
//0
/* ----- 20 ----- */

```

## 安装 Installation

1. 安装&ensp;Visual&ensp;Studio&ensp;Code&ensp;0.10.1&ensp;或更高版本；
Install Visual Studio Code 0.10.1 or higher

2. 运行&ensp;VS&ensp;Code；
Launch VS Code

3. 输入&ensp;`Ctrl`+`Shift`+`P`&ensp;(Windows,&ensp;Linux)&ensp;或&ensp;`Cmd`+`Shift`+`P`&ensp;(OSX)；
From the command palette `Ctrl`+`Shift`+`P` (Windows, Linux) or `Cmd`+`Shift`+`P` (OSX)

4. 输入&ensp;`ext install`&ensp;或者直接选择&ensp;`Install Extension`；
Type `ext install` or just simply select `Install Extension`

5. 选择拓展&ensp;-&ensp;Cpp&ensp;Snippets&ensp;Plus；
Choose the extension - Cpp Snippets Plus

6. 重启&ensp;VS&ensp;Code。
Relaunch VS Code

*欢迎提出改进建议。*

*Suggestions for improvement are welcome.*
