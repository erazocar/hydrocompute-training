---
sidebar_position: 2
---

# Multithreading

Traditionally, web browsers and instructions are run using a single thread, including the user interface. This means that lots of the work required to run a computation is done sequentially, one instruction at a time. This is a compromise that can be made when running simple web applications. However, a complete application usually runs thousands of instructions, and having computationally expensive work can freeze a UI. *Not good*.

Enter **multithreading**. Multithreading is achieved in web browsers in three different ways: running web workers, running multithreaded instructions in web assembly language, and running GPU instructions.

[Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) are a technology that allows executing code in separate threads, improving performance and preventing the blockage of the main thread. They are useful for CPU-intensive workloads like image processing, data analysis, or complex calculations.

[WebAssembly](https://webassembly.org/) is a binary instruction format for code written in other languages like C, C++, AssemblyScript, or Rust. There are ways to execute code in a separate thread directly in web assembly compiled code or using a web worker.

:::note Note 
There are currently many projects aiming to port code from other languages such as R, Python, FORTRAN, and others.
::: 

:::note Note 
Multithreading on web assembly is quite the task to do and is not fully supported yet by most browser vendors.
:::

[WebGPU](https://www.w3.org/TR/webgpu/) is a technology that uses the graphical processing units available on a computer to perform highly parallelizable operations much faster than traditional CPUs.

:::note Note 
The predecessor to WebGPU, WebGL, is (was) the usual way to port GPU-intensive workloads into the web. Now, WebGPU's friendly API allows for more scalable applications.
:::

HydroCompute enables these technologies through the combination of web workers and scripts written in different programming languages (WebAssembly C and AssemblyScript, WebGPU WGSL, and JavaScript). This is done through task scheduling and execution using directed acyclic graphs to span multiple workers at the same time, as well as switching between engines.









