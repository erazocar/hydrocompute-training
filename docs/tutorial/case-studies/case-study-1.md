---
sidebar_position: 1
---

# Case Study 1: Running Parallel and Sequential Simulations

Learn how to run parallel and sequential simulations using the HydroCompute library.

## Objectives

The main objective of this case study is to showcase the usage of the Hydrocompute library for parallel and sequential executions. The study involves generating random data, setting up a parallel and sequential pipelines for data processing, running simulations using multiple functions in parallel and sequentially, and visualizing/analyzing the results.

## Data Preparation

Initialize a hydroCompute instance, this case the 'wasm' engine.

```js
const compute = new hydroCompute("wasm");
```

Generate Random Data: Utilize the genRandomData function from the Hydrocompute library to generate random data.

Parameters:

- `1000000`: Number of data points to generate.
- `100`: Maximum value for the data points.
- `1`: Number of arrays to generate.
- `true`: Flag indicating that the data should be saved for later use.

```js
compute.utils.genRandomData(1000000, 100, 1, true);
```

:::note Note
Since we are passing the `true` flag, the engine will generate a random string that wull be used as name for further usage.
:::

## Setting up the Pipeline

If running the script examples within the hydroCompute, you can see the available scripts and functions using

```js
await compute.engineScripts();
```

Let's use some of the available functions in the wasm engine and define the pipeline as follows:

- functions: `['_arima_autoParams', '_linear_detrend', '_monteCarlo_c', '_linear_detrend']`
- dataIds: `['dataName']`
- dependencies: we will specify later

## Running the Simulation

First let's run the parallel execution doing the following:

```js
compute.run({
  functions: [
    "_arima_autoParams",
    "_linear_detrend",
    "_monteCarlo_c",
    "_linear_detrend",
  ],
  dataIds: ["dataName"],
});
```

Let's also run the sequential execution by passing the dependency boolean:

```js
compute.run({
  functions: [
    "_arima_autoParams",
    "_linear_detrend",
    "_monteCarlo_c",
    "_linear_detrend",
  ],
  dataIds: ["dataName"],
  dependencies: true,
});
```

:::note Note
The `true` tag for the sequential execution would make all the functions in a step to be linked. The user can specify otherwise by leaving empty array on functions to run in parallel.
:::

## Visualizing Results

The results can be found as buffers within the `availableResults` object. To view them as arrays, you can call the following method:

```js
compute.results("Simulation_1");
```

For the parallel execution, we can see that the compute fired up all the theads at once and the order in which the functions finished might not necessarily be the same as the one we specified. For the sequential execution, we get only 1 single result that was calculated using the given function order.

:::tip Tip
Reorder the functions and see how these changes the output results.
:::
