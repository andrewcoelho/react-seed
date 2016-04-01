# React Project Seed
----
This serves as a seed for starting new React projects. It's less of a boilerplate
and more of a suggested directory structure that I've found scales well. It currently
uses the following:

* React
* Redux
* Redux-saga
* ES6/7
* Hot Reloading
* Webpack
* Nodemon

## src
The "src" folder contains all client and server code. In a universal app this could
also contain a "common" or "shared" folder for server rendering.

## client
- **components**: All global components used across layouts
- **containers**: All global containers used across layouts
- **layouts**: Each layout is by definition a container which encapsulates other containers and components specific to that layout. Each layout also has a route file specific to it, which allows dynamic route loading with React Router.
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
- **RootComponent**: Root Component for the app (this may not be necessary)
- **rootReducer**: Where you combine all reducers using Redux's combineReducers method
- **rootRoute**: Root route configuration for React Router
- **rootSaga**: Fork all your sagas into a root saga to be passed as Redux middleware

## Future Improvements
I'd like to abstract this out more to more easily allow for integration of alternative side-effect libraries like Redux Thunk.
