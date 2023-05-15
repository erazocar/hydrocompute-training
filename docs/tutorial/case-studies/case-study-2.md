---
sidebar_position: 1
---

# Matrix Multiplication

A classic usage in hydrologic sciences is the implementation of matrix multiplication for different applications. We can leverage the different engines within the HydroCompute library to create pipelines for heavy computing.

## Main Objective

See how different engines perform under using the same algorithmic implementation of matrix multiplication on a stepwise execution context.

## Data Preparation

Lets create an object that contains names of 8 square matrices we can work within the hydrocompute framework.

```js
let matrices = [256, 6561, 10000, 38416, 65536, 194481, 390625]
```

Each matrix represents the power 2 of the square matrix representation. That is, the number 256 represents a matrix of 16x16.

We can use one of the utils within the library to generate arrays (matrices) from the array above.

```js
const compute = new hydrocompute();
for (let matrix of matrices) {
    compute.data({
        id: JSON.stringify(matrix), 
        data: compute.utils.genSquareRandom(matrix, 1000)})
    }
```

After finishing, we have generated random data within the available data object which we can use for the next steps.

## Setting up the Pipeline

There are already methods included for each of the engines for matrix multiplication that can be accessed using the following names:

- JavaScript: `"matrixMultiply_js"`
- Web Assembly: `"_matrixMultiply_js"`
- WebGPU: `"matrixMultiply_js"`

We will be swithching between engines in order to run each simulation on a stepwise execution. This because we want to use data each time we execute a function.

The pipeline for all the functions will look as:

```js
compute.run({
    functions: ['functionName'],
    dataIds: matrices
})
```

## Running the Simulations

Since we are already in the JavaScript engine by default, we call the run simulation function as:

```js
compute.run({
    functions: ['matrixMultiply'],
    dataIds: matrices
})
```
Right after a simulation has finished, switch the engine and name of the function to be used.

```js
compute.setEngine("wasm");
compute.run({
    functions: ['_matrixMultiply'],
    dataIds: matrices
})
```

Lastly for the WebGPU engine:
```js
compute.setEngine("webgpu");
compute.run({
    functions: ['matrixMul'],
    dataIds: matrices
})
```

## Visualizing and Analyzing Results

Once finished, the simulations are saved in the `compute.availableResults`. We can visualize the results as array objects using the following command:

```js
compute.results('Simulation_1')//or 2, 3
```

The results will vary depending on the machine you are working on and the set up for the browser. However, there is a clear distinction between the multiplications for each of the engines running on the background

:::tip Tip
Notice we started with random variables between 0 and 1000. Redo the case study to see how much it changes if you select different number seeds and matrices in matter of performance.
:::







