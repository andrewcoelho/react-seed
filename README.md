# React Project Seed
----
This serves as a seed for starting new React projects. It's less of a boilerplate
and more of a suggested directory structure that I've found scales well. It currently
uses the following:

* React 15
* React Router 4
* Redux
* Redux-Saga
* ES6/7
* React Hot Loader 3
* Webpack 3

This is by no means prescriptive. Many projects will not require more complex state management tools like Redux. Some will not require a routing library like React Router. These libraries are included by default only because they are what I most often end up using in my more complex projects.

By default, some errors will be displayed when you start this for the first time. This is because I did not want to go the way of many other boilerplates and fill in a bunch of components, containers, reducers, etc. just to show that it works. Instead I wanted a repo I could clone when starting a new project, with a sensible directory structure I've found works well for me, in which I could go through minimal deletion steps before getting started. You will have to set up style processing, production builds, and anything else you may need on your own.

This project used to use a more complex, perhaps scalable, directory structure. I have never needed such a complex, scalable structure in all the apps I have developed using this seed, so I've flattened the structure to something much simpler. You can still reference the old directory structure at [this commit](https://github.com/andrewcoelho/react-seed/tree/4d29d680c425b4df12a7aed2880f2811e58921df/app).
