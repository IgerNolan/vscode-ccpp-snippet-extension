# C/C++ 代码片段扩展

## v2.0.0 - 重大更新


<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=IgerNolan.CppSnippetExtension">
    <img src="https://img.shields.io/badge/vscode-marketplace-blue.svg?logo=visualstudiocode" alt="VS Code Marketplace" />
  </a>
  <a href="https://github.com/IgerNolan/vscode-ccpp-snippet-extension">
    <img src="https://img.shields.io/badge/GitHub-vscode--ccpp--snippet--extension-181717?logo=github&logoColor=white" alt="GitHub Repo" />
  </a>
  <a href="https://www.gnu.org/licenses/gpl-3.0.html">
    <img src="https://img.shields.io/badge/license-GPLv3-green.svg" alt="License: GPL v3" />
  </a>
</p>


该扩展为 Visual Studio Code 添加了 C/C++ 代码片段，支持 **#pragma region** 折叠和**内置匹配检查**。

This extension adds C/C++ snippets for Visual Studio Code with **#pragma region** folding and **built-in matching validation**.

---

### ✨ 新功能

✅ 全面使用 #pragma region 格式 - 所有注释模板升级为可折叠 region
All comment templates upgraded to foldable regions

✅ 内置匹配检查 - 绿色箭头 ▸◂ 表示匹配，红色表示错误
Green ▸◂ arrows for matches, red for errors

✅ 智能折叠 - 左侧行号栏显示折叠标记 ▶，支持嵌套
Smart folding with ▶ markers on gutter, supports nesting

✅ 强制 UTF-8 + LF - 自动设置编码和换行符
*Auto-enforces UTF-8 encoding and LF line endings*

✅ 三列标尺 - 40/80/120 列自动显示
*Auto column guides at 40/80/120*

---

### 📖 使用方法

输入代码片段关键字，按 回车 / Tab 插入：

```
text
class      // 完整类模板，带嵌套 region | Complete class template with nested regions
//include  // 完整的头文件分组 | Complete header grouping
//function // 函数分组 | Function grouping
```

---

### 🎨 Region 匹配效果

```
✅ ▸ #pragma region include           ← 绿色向右（匹配）| Green right arrow (matched)
✅ ◂ #pragma endregion include        ← 绿色向左（匹配）| Green left arrow (matched)

✅   ▸ #pragma region include::header ← 嵌套匹配，全绿 | Nested match, all green
✅   ◂ #pragma endregion include::header

❌ ▸ #pragma region test             ← 红色（不匹配）| Red (mismatched)
❌ ◂ #pragma endregion wrong         ← 红色（名称错误）| Red (name error)
```

绿色 = 完美匹配，点击左侧 ▶ 折叠！
Green = perfect match, click ▶ to fold!

---

### 💡 示例

#### 1. 类模板 | Class Template

```cpp
//class → 自动生成完整类结构 | Auto-generates complete class structure
#pragma region class
    #pragma region class::function
        #pragma region class::function::factory

        #pragma endregion class::function::factory

        #pragma region class::function::constructor

        #pragma endregion class::function::constructor
        ......
    #pragma endregion class::function

    #pragma region class::variable
        #pragma region class::variable::stardard

        #pragma endregion class::variable::stardard
        ......
    #pragma endregion class::variable
#pragma endregion class
```

#### 2. 头文件分组 | Include Groups

```cpp
#pragma region include
    #pragma region include::header

    #pragma endregion include::header

    #pragma region include::standard

    #pragma endregion include::standard

    #pragma region include::third

    #pragma endregion include::third

    #pragma region include::project

    #pragma endregion include::project
#pragma endregion include
```

#### 3. 注释缩进 | Comment Indent

```
 //4 → // | → 4空格缩进 | 4-space indent
 //8 → // - 8 | → 8空格缩进 | 8-space indent
 //12 → // ---- 12 | → 12空格缩进 | 12-space indent
```

---

### ⚙️ 强制格式设置

开箱即用，无需配置 | Out-of-the-box, no configuration needed

✅ UTF-8 编码 | *UTF-8 encoding*
✅ LF 换行符 | *LF line endings*
✅ 标尺 40/80/120 列 | *Column guides 40/80/120*

---

### 📦 安装步骤

1. 安装 Visual Studio Code 1.50.0+*Install Visual Studio Code 1.50.0+*
2. 打开命令面板：Ctrl+Shift+P → Extensions: Install ExtensionsCommand Palette → Extensions: Install Extensions
3. 搜索 **"CppSnippetExtension"**Search **"CppSnippetExtension"**
4. 安装并重启 VS Code
   *Install and restart VS Code*

---

### 📧 反馈与支持

欢迎提交 Issue 或邮件反馈
Welcome to submit Issues or email feedback

📧 [2481036245@qq.com](mailto:2481036245@qq.com)
