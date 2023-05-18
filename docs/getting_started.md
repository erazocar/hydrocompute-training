---
sidebar_position: 3
---

# Getting Started

## How to use

To use HydroCompute, you need to load the library in your HTML file first. You can do this by adding the following code to your HTML file:

```html
<script type="module" src="path/to/hydrocompute.js"></script>
```

Make sure to replace `"path/to/hydrocompute.js"` with the actual path to the HydroCompute library file.

Once the library is loaded, you can create a new instance of the library and start using its modules and functions. To create a new instance, use the following code:

```js
const hydrolang = new hydroCompute();
```
This will create a new instance of the library, and each of the modules and functions within will be available for usage. From there onwards, it works just like any other JavaScript library through its API.

## Requirements

One of the main features of the HydroCompute library is its implementation of the newly available standard for [WebGPU](https://www.w3.org/TR/webgpu/). The latest version of Google Chorme is required to run the instance of the library containing the WebGPU API.


We will be using chromium based browser that have enabled WebGPU. Please clone the repository and create an HTML called index.html in your preferred development environment.

:::note Note
We create C-code WASM using [EMSCRIPTEN](https://emscripten.org/) compiler. Users can install and follow along, but it is not a requirement. We will be using functions already available on the library. 
:::

:::note Note
We are using [ES6 JavaScript](http://es6-features.org/#Constants) functionality for the development and module imports are not fully supported in Firefox. For the tutorial, we will be using the latest version of [Google Chrome](https://www.google.com/chrome/update/).
:::
