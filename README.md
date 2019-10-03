# Angular NgRx Starter

*In Progress*

This project is an Angular starter application. You can re-use it as a base for your own application. It includes some of the latest and proven best tools for making a robust scalable application.

Architecture: It follows the redux pattern and using NgRx's Actions, Effects and Entities in order to have a neat and scalable frontend.

Design: It uses Material Design.

Testing: Karma/Jasmine for the unit tests and Cypress for the end-to-end testing.

## Technical notes

Please find below a list of descriptions or definitions of tools and concepts applied to this application. 

Angular 8: The efficient JavaScript framework.

Router: Routes the user to the desired components depending on the browser's URL.

Lazy loading: A feature that allows to load only the needed modules (Books or Authors) during the routing.

Redux: A centralized architecture aimed at keeping the application's state, on which component will wait to update themselves.

RxJS (Effect, Action, Entity): A toolkit providing additional mechanisms to structure the code of a redux architecture. It can be seen as a pipe through which the communication is made between your components and the store. It reinforces the typing, and structures the code.

Effects: They for side-effects (like calling the server). When the user or a component needs to update the state but requires a call to the server before, this call is a side-effect. A side effect may need additional data to be modified, and the data is structured before being stored. This type of processing is placed undoubtedly at this place, the service will not be poluted by unrelated code, neither will the component be.

Action: A type representing the type of operation that is going to be performed along with a payload containing the data on which the operation will be performed. It is used in order to strengthen the structure of the data passed into effects.

Entity: An Entity is a simple TypeScript interface (a type representing 1 item of your data). But it is used by the store as a generic type to store the data as a list of this type alongside an array of id to allow a direct mapping. It fits prety well with the standard CRUD operations that can be processed with Schematics.

CRUD: It is a CRUD applicatin because it allows to Create, Read, Edit and Delete a book or an author.

Schematics: A feature used by Angular-CLI to produce standard code. Ideal when there is excessive boilerplate code. 

Declarative programming: A way of programming that doesn't detail operations like in a classic for-loop, but rather expresses the logic like with a .map() with which you know that the function will be applied to each element. It is the oposite of Imperative progamming that provides sequential instructions.

Functional programming: Is about having pure functions and avoiding to mutate the state or having side-effects. It is a declarative paradigm.

Reactive programming: It is about using asynchronous data stream. Using RxJS, you can chain operations on some data or event.  It is a functional paradigm.

Immutability: The fact that the data is not modified. Instead a new one is produced. Originaly in JavaScript, only the primitive values are immutable. Arrays and Objects are not because they contain reference to a value and copying them will copy the same reference to the same value, and thus if we modify the copy, the original object is also changed. In ECMAScript2015 (ES6), the spread operator or assign() allows to keep your data immutable.

Karma/Jasmine: Test runner and a test framework that go in pair for JavaScript unit testing.

Cypress: An awsome end-to-end testing JavaScript framework.

Can be considered:
- A store freeze to detect immutability transgression in the store.
- Action creators to simpliy the action dispatching.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng test` to build and launch the unit testing interface. Navigate to `http://localhost:9876/`, click on Debug and see your test results.

Run `node_modules/.bin/cypress open` to launch the end-to-end testing interface. Tests run automatically in your default browser.

### Versioning
https://semver.org/

### Commit convention
https://www.conventionalcommits.org/en/v1.0.0-beta.4/
