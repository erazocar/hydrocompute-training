---
sidebar_position: 6
---

# Contribution Guide

HydroCompute was thought of as an open source software that serves the community of hydrologist and environmental scientists to be served with ready-to-go functionalities for their web applications or client-side functionality. Based on this, please consider the following:

* If you want to add a functionality not included in the base code or any subsequent releases without using .git, please raise an issue with the functionality you would like to add.
* Follow the code styles within any of the modules of the framework to get sense of how we like to format.
* Share your insights based on our community guidelines and code of conduct.

## Submitting Changes
Send a Github Pull Request with a detailed list of your contributions. We would appreciate it if you could provide any examples of how the features you are adding might be used whenever you submit a request. Any new functionality and development must adhere to our code standards. Last but not least, make sure to include one feature each commit along with concise log statements. Larger commits must resemble the following:

    $ git commit -m "Summary of the changes including large modules or functions.
    > some additional comment.
    > more information about the function"

## Coding Conventions

Please read our code at any of the included modules to have a hang of it. We try to maintain consistency with ES6 for the inner scope of each function. We optimize for readability and functionality in the following:
* We indent using two spaces.
* Please define any variables for your function using multiple variable definitions in the top part of the function (`const someVar, someVar2, someVar3; var myVar1, myVar2, myVar3;`).
* We implement [JSDocs](https://jsdoc.app/) syntax to produce straightforward and understandable documentation for each function. Please look at the definition of any variable to see the structure. Basic explanation with references if needed, function name, parameters, returns, and an example are the minimum requirements. 
