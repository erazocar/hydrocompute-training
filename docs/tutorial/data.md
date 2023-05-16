---
sidebar_position: 1
---

# Data

## Data Manipulation

HydroCompute can process n-dimensional array data in various ways, including importing data from a JSON file with a predefined structure or passing data directly as a JavaScript (JS) array. The data is stored in an self contained object called `availableData`.

### Example 1

Let’s import some sample data into the library from a JSON file using:

```js
compute.data('dataFileName')
```

The imported data is transformed into a Float32 array, which is then used in simulations and saved as an object containing the array and the length of the original data. This transformation is necessary because JS array objects cannot be transferred, only copied. By converting the data into Float32[array buffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), the data can be transferred instead of cloned each time it is accessed.

:::note Note
Considering the domain of knowledge for which the HydroCompute library has been developed is hydrologic sciences, float 32 and not other type of array objects are use since they give enough precision.
:::

When passing a single data instruction, a randomly generated name with five digits will be assigned to the data. However, you can assign a specific name if desired.

### Example 2

You can provide n-dimensional data to the compute engine in array format. This approach is useful when running a simulation. Now, let's explore how HydroCompute handles multithreading.

```js
compute.data({id: 'myJSdata', data: [[1,2],[3,4]]})
```

:::tip Tip
Additional methods for data generation can be found under the `compute.utils` object.
:::

:::note Note
The compute engine "flattens" the data to be able to move it around the pipeline and keeps track of the length of the original array. When using a particular dataset. However, it will be readjusted once again when executing a function. Make sure the function using the data can interpret and digest the size of the original dataset.
:::

## Results

When a simulation is run and successfully finished, the results of the simulation are saved in an self object called `engineResults`. It has the following format:

```js
compute.engineResults: {
    Simulation_N: {
        engineName: name,
        funcEx: 0,
        funcOrder: [f1, f2] // order in in which the functions finished.
        results: [r1, r2] //results in order of the functions finished.
    }
}
```

:::tip Tip
More about the data requirments [here](https://github.com/uihilab/HydroCompute/tree/main)
:::