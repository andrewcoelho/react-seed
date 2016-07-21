# React Project Seed
----
This serves as a seed for starting new React projects. It's less of a boilerplate
and more of a suggested directory structure that I've found scales well. It currently
uses the following:

* React
* React Router
* Redux
* Redux-Saga
* ES6/7
* React Hot Loader 3
* Webpack 2

This is by no means prescriptive. Many projects will not require more complex state management tools like Redux. Some will not require a routing library like React Router. These libraries are included by default only because they are what I most often end up using in my more complex projects.

By default, some errors will be displayed when you start this for the first time. This is because I did not want to go the way of many other boilerplates and fill in a bunch of components, containers, reducers, etc. just to show that it works. Instead I wanted a repo I could clone when starting a new project, with a sensible directory structure I've found works well for me, in which I could go through minimal deletion steps before getting started.

I've outlined my reasoning for the directory structure below.

## app
- **components**: All global components used across layouts
- **containers**: All global containers used across layouts
- **layouts**: Each layout is by definition a container which encapsulates other containers and components specific to that layout. Each layout also has a route file specific to it.
  - **components**: All components used across screens but not outside of this layout
  - **containers**: All containers used across screens but not outside of this layout
  - **screens**: Each screen is by definition a container which encapsulates components specific to that screen.
    - **components**: All components used by this screen but not outside of it
  - **index.js**: root container for this layout which renders child screens in {this.props.children}
  - **route.js**: root route configuration for this layout
- **reduxModules**: Each Redux module is a folder which encapsulates everything specific to that module. This is similar to a [Redux Duck](https://github.com/erikras/ducks-modular-redux) but instead of putting everything in a single file, everything is put in a single folder.
  - **actions.js**: actions specific to this module
  - **api.js**: api functions such as fetch methods specific to this module
  - **constants**: constants specific to this module
  - **reducer**: reducer specific to this module
  - **sagas**: sagas specific to this module
- **store**: Global store configuration for Redux
- **index.js**: Entry point of the app where React DOM's render method is called
- **Root**: Created to facilitate integration with the new React Hot Loader API. Simply wraps a typical Redux + React Router root component into one export.
- **RootComponent**: Root Component for the app where React Router renders from the base route
- **rootReducer**: Where you combine all reducers using Redux's combineReducers method
- **rootRoute**: Root route configuration for React Router
- **rootSaga**: Fork all your sagas into a root saga to be passed as Redux middleware
