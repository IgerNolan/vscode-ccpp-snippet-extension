import * as vscode from 'vscode';

let greenDecoration: vscode.TextEditorDecorationType | undefined;
let redDecoration: vscode.TextEditorDecorationType | undefined;

// ---------------- 创建基础装饰（只设颜色） ----------------
function createDecorations() {
  if (greenDecoration) greenDecoration.dispose();
  if (redDecoration) redDecoration.dispose();

  greenDecoration = vscode.window.createTextEditorDecorationType({
    color: 'green'
  });

  redDecoration = vscode.window.createTextEditorDecorationType({
    color: 'red'
  });
}

// ---------------- 严格匹配检查 + 动态箭头 ----------------
function updateMatchDecorations(editor: vscode.TextEditor) {
  if (!greenDecoration || !redDecoration) return;

  // 清空装饰
  editor.setDecorations(greenDecoration, []);
  editor.setDecorations(redDecoration, []);

  const greenOptions: vscode.DecorationOptions[] = [];
  const redOptions: vscode.DecorationOptions[] = [];
  const stack: { line: number; name: string }[] = [];

  for (let i = 0; i < editor.document.lineCount; i++) {
    const text = editor.document.lineAt(i).text;
    const trimmed = text.trim();

    // region
    const regMatch = /^#\s*pragma\s+region\s+(.+)$/.exec(trimmed);
    if (regMatch) {
      stack.push({ line: i, name: regMatch[1].trim() });
      continue;
    }

    // endregion
    const endMatch = /^#\s*pragma\s+endregion\s+(.+)$/.exec(trimmed);
    if (endMatch) {
      const endName = endMatch[1].trim();
      let matched = false;

      if (stack.length > 0) {
        const top = stack[stack.length - 1];
        if (top.name === endName) {
          // ✅ 完美匹配
          // region: 绿色▸（向右）
          greenOptions.push({
            range: editor.document.lineAt(top.line).range,
            renderOptions: {
              before: { contentText: "▸ ", color: 'green' }
            }
          });

          // endregion: 绿色◂（向左）
          greenOptions.push({
            range: editor.document.lineAt(i).range,
            renderOptions: {
              before: { contentText: "◂ ", color: 'green' }
            }
          });

          stack.pop();
          matched = true;
        }
      }

      // ❌ 不匹配
      if (!matched) {
        // 当前 endregion: 红色◂（向左）
        redOptions.push({
          range: editor.document.lineAt(i).range,
          renderOptions: {
            before: { contentText: "◂ ", color: 'red' }
          }
        });

        // 栈中所有：红色▸（向右）
        while (stack.length > 0) {
          redOptions.push({
            range: editor.document.lineAt(stack[stack.length - 1].line).range,
            renderOptions: {
              before: { contentText: "▸ ", color: 'red' }
            }
          });
          stack.pop();
        }
      }
    }
  }

  // 未闭合：红色▸
  while (stack.length > 0) {
    redOptions.push({
      range: editor.document.lineAt(stack[stack.length - 1].line).range,
      renderOptions: {
        before: { contentText: "▸ ", color: 'red' }
      }
    });
    stack.pop();
  }

  editor.setDecorations(greenDecoration, greenOptions);
  editor.setDecorations(redDecoration, redOptions);
}

// ---------------- 强制 UTF8 + LF + 标尺 ----------------
function enforceFormatSettings() {
  // 强制 UTF-8 编码
  vscode.workspace.getConfiguration('files').update('encoding', 'utf8', vscode.ConfigurationTarget.Workspace);

  // 强制 LF 换行符
  vscode.workspace.getConfiguration('files').update('eol', '\n', vscode.ConfigurationTarget.Workspace);

  // 强制三列标尺 (40, 80, 120)
  vscode.workspace.getConfiguration('editor').update('rulers', [40, 80, 120], vscode.ConfigurationTarget.Workspace);
}

// ---------------- 插件激活 ----------------
export function activate(context: vscode.ExtensionContext) {
  console.log('C/C++ Snippet Extension with Region Fold is now active!');

  createDecorations();
  enforceFormatSettings();  // 强制格式设置

  // FoldingRangeProvider (C 和 CPP)
  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider({ scheme: 'file', language: 'cpp' }, {
      provideFoldingRanges(document: vscode.TextDocument) {
        const ranges: vscode.FoldingRange[] = [];
        const stack: { line: number; name: string }[] = [];

        for (let i = 0; i < document.lineCount; i++) {
          const text = document.lineAt(i).text;

          const regMatch = /^#\s*pragma\s+region\s+(.+)$/.exec(text);
          if (regMatch) {
            stack.push({ line: i, name: regMatch[1].trim() });
            continue;
          }

          const endMatch = /^#\s*pragma\s+endregion\s+(.+)$/.exec(text);
          if (endMatch) {
            const endName = endMatch[1].trim();
            if (stack.length > 0 && stack[stack.length - 1].name === endName) {
              const start = stack[stack.length - 1].line;
              if (i > start) {
                ranges.push(new vscode.FoldingRange(start, i, vscode.FoldingRangeKind.Region));
              }
              stack.pop();
            }
          }
        }
        return ranges;
      }
    })
  );

  // 注册 C 语言
  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider({ scheme: 'file', language: 'c' }, {
      provideFoldingRanges(document: vscode.TextDocument) {
        const ranges: vscode.FoldingRange[] = [];
        const stack: { line: number; name: string }[] = [];

        for (let i = 0; i < document.lineCount; i++) {
          const text = document.lineAt(i).text;

          const regMatch = /^#\s*pragma\s+region\s+(.+)$/.exec(text);
          if (regMatch) {
            stack.push({ line: i, name: regMatch[1].trim() });
            continue;
          }

          const endMatch = /^#\s*pragma\s+endregion\s+(.+)$/.exec(text);
          if (endMatch) {
            const endName = endMatch[1].trim();
            if (stack.length > 0 && stack[stack.length - 1].name === endName) {
              const start = stack[stack.length - 1].line;
              if (i > start) {
                ranges.push(new vscode.FoldingRange(start, i, vscode.FoldingRangeKind.Region));
              }
              stack.pop();
            }
          }
        }
        return ranges;
      }
    })
  );

  const applyAll = () => {
    vscode.window.visibleTextEditors.forEach(updateMatchDecorations);
  };

  applyAll();

  context.subscriptions.push(vscode.window.onDidChangeVisibleTextEditors(applyAll));
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument(e => {
      const ed = vscode.window.activeTextEditor;
      if (ed && e.document === ed.document) {
        updateMatchDecorations(ed);
      }
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('regionFold.markerColor')) {
        createDecorations();
        applyAll();
      }
    })
  );
}

export function deactivate() {
  if (greenDecoration) greenDecoration.dispose();
  if (redDecoration) redDecoration.dispose();
}
