---
sidebar_position: 2
---

# Case Study 2: Matrix Multiplication

Matrix multiplication is a fundamental operation in hydrologic sciences and is commonly used in various applications. In this case study, we will explore the performance of different engines available in the HydroCompute library for matrix multiplication. We will execute the matrix multiplication algorithm step by step using different engines and analyze the results.

## Main Objective

The main objective of this case study is to compare the performance of different engines in the HydroCompute library when executing the matrix multiplication algorithm. By running simulations on a stepwise execution context, we can assess how each engine performs and identify any variations in performance.

## Data Preparation

To begin, we need a set of square matrices to work with. We will create an array containing the names of eight square matrices, representing various matrix sizes. Each matrix size corresponds to the power of 2 of the square matrix representation.

```js
let matrices = [256, 6561, 10000, 38416, 65536, 194481, 390625]
```

Using the HydroCompute library, we can generate random data for each matrix size using the utility function genRandomData(). Let's generate the data and assign it to the respective matrix ids:

```js
const compute = new hydroCompute();
for (let matrix of matrices) {
    compute.data({
        id: JSON.stringify(matrix), 
        data: compute.utils.genRandomData(matrix, 1000, 2)
    });
}
```

After executing these commands, we will have generated random data for each matrix size, which we can use in the subsequent steps.

## Setting up the Pipeline

For matrix multiplication, the HydroCompute library provides methods for different engines: JavaScript, Web Assembly, and WebGPU. Each engine has a specific function name associated with matrix multiplication.

To set up the pipeline, we need to define the functions and data ids to be used in the simulations. In this case, we will switch between engines for each simulation to utilize the available data. The pipeline configuration will look as follows:

```js
compute.run({
    functions: ['functionName'],
    dataIds: matrices
})
```

## Running the Simulations

We will start with the JavaScript engine, which is the default engine. Execute the following command:

```js
compute.run({
    functions: ['matrixMultiply_js'],
    dataIds: matrices
})
```
After the simulation completes, switch to the next engine, Web Assembly (WASM), and execute the simulation again with the corresponding function:

```js
compute.setEngine("wasm");
compute.run({
    functions: ['_matrixMultiply_c'],
    dataIds: matrices
})
```

Finally, switch to the WebGPU engine and run the simulation:

```js
compute.setEngine("webgpu");
compute.run({
    functions: ['matrixMultiply_gpu'],
    dataIds: matrices
});
```

## Visualizing and Analyzing Results

Once the simulations have finished, the results are saved in `compute.availableResults`. To visualize the results as array objects, use the following command:

```js
compute.results('Simulation_1') // or 'Simulation_2', 'Simulation_3', etc.
```

The results may vary depending on your machine and browser setup. However, you will observe clear distinctions between the matrix multiplications performed by each engine running in the background.

:::tip Tip
To observe the impact of different number seeds and matrix sizes on performance, you can redo the case study with varied parameters. Experimenting with different configurations will provide insights into the performance characteristics of the engines.
:::







