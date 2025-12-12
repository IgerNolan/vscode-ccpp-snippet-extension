# C/C++ 代码片段扩展 (CppSnippetExtension)
## v2.0.1 - 重大更新

---

<div style="text-align: center; margin: 20px 0;">
  <a href="https://marketplace.visualstudio.com/items?itemName=IgerNolan.CppSnippetExtension" target="_blank">
    <img src="https://img.shields.io/badge/vscode-marketplace-blue.svg?logo=visualstudiocode" alt="VS Code Marketplace">
  </a>
  <a href="https://github.com/IgerNolan/vscode-ccpp-snippet-extension" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vscode--ccpp--snippet--extension-181717?logo=github&logoColor=white" alt="GitHub Repository">
  </a>
  <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">
    <img src="https://img.shields.io/badge/license-GPLv3-green.svg" alt="License: GPL v3">
  </a>
</div>

---

该扩展为 Visual Studio Code 添加了 C/C++ 代码片段。  
This extension adds C/C++ snippets for Visual Studio Code.

---

## ✨ 新功能

✅ 强制 UTF-8 + LF  
*Auto-enforces UTF-8 encoding and LF line endings*

✅ 三列标尺 - 40/80/120 列自动显示  
*Auto column guides at 40/80/120*

---

## 📖 使用方法

输入代码片段关键字，按 **Enter / Tab** 插入：

class // 完整类模板 | Complete class template
//include // 完整的头文件分组 | Complete header grouping
//function // 函数分组 | Function grouping

text

---

## 💡 示例

### 1. 类模板 | Class Template
```cpp
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

### 2. 头文件分组 | Include Groups
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

### 3. 注释缩进 | Comment Indent
```cpp
//4 → // | → 4 空格缩进 | 4-space indent
//8 → // - 8 | → 8 空格缩进 | 8-space indent
//12 → // ---- 12 | → 12 空格缩进 | 12-space indent
```

---

## ⚙️ 强制格式设置

开箱即用，无需配置 | *Out of the box, no configuration needed*

✅ UTF-8 编码 | *UTF-8 encoding*  
✅ LF 换行符 | *LF line endings*  
✅ 标尺 40/80/120 列 | *Column guides 40/80/120*

---

## 📦 安装步骤

1. 安装 Visual Studio Code 1.50.0+  
2. 打开命令面板：**Ctrl+Shift+P → Extensions: Install Extensions**  
3. 搜索 **"CppSnippetExtension"**  
4. 安装并重启 VS Code  

---

## 📧 反馈与支持

欢迎提交 Issue 或邮件反馈  
Welcome to submit Issues or email feedback  

📧 [2481036245@qq.com](mailto:2481036245@qq.com)

---
