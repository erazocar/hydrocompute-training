---
sidebar_position: 1
---

# Data

## Data Manipulation

HydroCompute can run n-dimensional array data fed in different ways, including using a JSON file that has a defined data structure or passing data as a JavaScript (JS) array directly. The data is saved into an object named availableData. Let’s import some random data into the library from a JSON file using:

```js
compute.data('dataFileName')
```

The data itself is transformed into Float32 data that is then fed into the simulation and saved as an object containing the length of the given data. Note that JS arrays are "unsigned" and cannot be transferred, only copied. This makes the process of manipulating data in several threads computationally expensive and inefficient memory-wise. By transforming the data into Float32 [array buffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), the data can be transferred instead of cloned each time it is called.

When passing a single data instruction, a randomly generated name will be given to the data. You can also change this by assigning a specific name you would like to use:

```js
compute.data({id: 'myJSdata', data: [[1,2],[3,4]]})
```

The user can feed into the compute engine n-dimensional data in array format. We will be using this implementation when running a simulation. Now, let’s see how HydroCompute deals with multithreading.