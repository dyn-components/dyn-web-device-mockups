# device-mockups

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

开源地址：


## 目录

- [介绍](#介绍)
- [安装](#安装)
- [快速开始](#快速开始)
- [属性说明](#属性说明)
- [事件](#事件)
- [方法](#方法)
- [自定义样式](#自定义样式)
- [示例](#示例)
- [发布](#发布)
- [贡献指南](#贡献指南)
- [维护者](#维护者)
- [许可证](#许可证)
- [致谢](#致谢)

## 介绍

简要介绍该组件的功能和用途。

## 安装

```bash
pnpm add dyn-components --save-dev
```

修改 vite.config.js

```ts
import { defineConfig } from "vite";
import DynComponents from "dyn-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [DynComponents()],
});
```

## 快速开始

```ts
// global import theme.css
import "dyn-components/theme.css";
```

```vue
<template>
  <dyn-web-device-mockups device="HuaweiP8" orientation="portrait" color="gold">
    <div>test</div>
  </dyn-web-device-mockups>
</template>
```

## 属性说明

## 属性（Props）

| 属性名      | 类型     | 默认值      | 必填 | 描述     |
| ----------- | -------- | ----------- | ---- | -------- |
| device      | `string` | iPhone6Plus | N    | 设备名称 |
| orientation | `string` | portrait    | N    | 设备方向 |
| color       | `string` | white       | N    | 设备颜色 |

### 详细说明

各属性配置具体取值参考： https://github.com/pixelsign/html5-device-mockups

## 发布

```bash
dyn-components publish
```
