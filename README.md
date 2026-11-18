# 希望你的每天都是圣诞 🎄

来自你的小粉丝。

一棵可以用手势控制的 3D 圣诞树：摄像头识别手掌，握拳/张开切换树的形态，捏合翻照片。

> 打开后浏览器会请求摄像头权限，允许即可。手势不方便时，页面按钮和键盘同样可以操作。

## 怎么看

线上地址：`https://carol3321.github.io/zhouzhou/`

本地预览（摄像头要求 localhost 或 https，直接双击 html 不行）：

```bash
python -m http.server 8765
# 然后打开 http://localhost:8765/
```

微信里打开时会先给一个「在浏览器打开」的提示页 —— 微信内置浏览器拿不到摄像头权限。

## 手势

| 手势 | 作用 |
|---|---|
| 张开手掌左右移动 | 旋转圣诞树 |
| 握拳 / 张开 | 树体聚拢 / 照片散开 |
| 捏合（拇指 + 食指） | 翻到下一张照片 |
| 双手拉开 | 退出特写回到树上 |

键盘：`←/→` 转树 · `↑/↓` 翻照片 · `Esc` 退出特写 · `O` 看原图 · `H` 隐藏按钮 · `T` 教程 · `G` 调试面板。

## 技术

原生 ES Module + three.js r160（UnrealBloom 泛光）+ @mediapipe/tasks-vision 0.10（21 关键点手部识别），纯静态，GitHub Pages 直接托管。

相册三档图：`thumb` 512 / `mid` 1024 / `full` 1920，树上只用缩略图，点开才取大图，按 `O` 才下载原图。

## 目录

```
index.html                  主页面（手势 3D 树），根路径直接打开就是它
open-in-browser.html        微信内提示页（引导「在浏览器打开」）
christmas-tree-gesture.html 旧地址，自动跳到根路径（保留旧分享链接）
christmas-tree.html         2D 备用版
main.js                     主逻辑源码；页面实际加载的是 assets/bundle.js
gesture-engine.mjs          手势识别逻辑（纯函数，可单测）
assets/bundle.js            main.js 的打包产物
assets/photos/              相册：manifest.json + orig / full / mid / thumb
assets/wasm/ + hand_landmarker.task   MediaPipe 模型
sw.js                       缓存模型与相册图
```

## 改代码

页面加载的是 `assets/bundle.js`，**只改 `main.js` 不重新打包不会生效**：

```bash
npx esbuild main.js --bundle --minify --format=iife --outfile=assets/bundle.js
```

换照片：准备四套图 —— `orig/`（原图）、`full/`（1920）、`mid/`（1024）、`thumb/`（512），在 `assets/photos/manifest.json` 里按字段登记每张的 `w` / `h`，代码会按清单数量自适应分布。
