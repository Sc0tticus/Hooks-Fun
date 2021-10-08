#CH2 - React is Declaritive
React is declaritive. With declaritive you just tell what to do.
Imperative - you also how to do, take more explicit steps to figure it out.

-You ask React to sum up two things and React updates the DOM. This is what a declaritive approach is.

#CH3 - Component Based Architecture
-Babel acts a compiler / transpiler allows you to write HTML inside JS.
HTML inside JS is called JSX.

-Every component returns JSX.
-2 Librarier: React and ReactDOM.
-ReactDOM renders the component.
-The data passed as attributes in the components tag - that is passed as an Object Literal in the function. This data passed on as attributes = props.
PROPS = info you pass down into the component.
JSX = the HTML you write inside JS.

Example:

<!-- function PersInfo(){
return (
<div class="pers">
<h2>Name: Name1</h2>
<h2>Age: 34 </h2>
</div>
)
} -->

Question:
How do you show the props value ? Using { props.name } etc.

#CH 4: Creating & Understanding React 17 Project Architecture
Syntax for creating a React App: npx create-react-app proj-name
starting the application: yarn start

React Project Structure:
Public Folder: contains the main HTML file = index.html

SRC folder:
index.js = document.getElementById('root)
App.js = where we implement the component

JSX is the HTML you write inside the JS section.

Relative / Interview Questions:

1. How do you create a react app or react project ?
   npx create-react-app project-name

2. Where does the index.html reside in the default react project ?
   Inside the public folder is where the index.html file resides.

3. Explain the default project structure created by create-react-app ?
   Public Folder => index.html = entry point
   src folder = index.js has the render of the App.js
   App.js is the main app.

#CH5 = Props Destructuring

-   index.js has the App component getting rendered - which eventually is rendered in root division of index.html inside the public folder.

-With a component based architecture you have a root component that gets rendered, and the rest of things will be part of the root component.

PersInfo component lives inside App.js and has hard values as attributues.
The parent component App.js is going to pass those hard cosed PersInfo attributes
into the child component PersInfo as props.

Destructuring = getting individual pieces from a data structure like arrays or object literals.

Interview Questions.

1. What is the props in a component ?

-   A component means it is a custom HTML. Props are the values you pass as attributes with the component. Props are immutable , you can not change the props. If there is a change you need State.
-   Destructuring is a better way because the Object Literal will have mutiple data which can be organised.

# CH6 - Concept of State & useState() Hook

-If you have a value as a variable and not as a state then react will not watch for it.

-   useState() Hook has a facility to create a state in React.
-   useState(val1, val2) always returns an array with two elements.
-   1. Value which we have given of the state.
-   2. A function - which allows you to change the state value.
-   React Hooks was introduced from React 16.8 onwards.

-   State is like a variable that is being watched by the React application.
-   If there are any changes made to the State, React will make sure that they are re-rendered.
-   The changes are updating in the DOM as well.
-   Directly taking a variable will not refresh/render it on a page but when taken as a state - then whatever changes are done to the state, those are automatically reflected on the user interface.
-   State basically contain the data which changes and it is the data which the user sees.
-   There might be differnt variables also which you can take but they do not affect the user interface. So we don't take those variables as states.
-   States are also variables which are actually displayed on the UI so we take it with a specific syntax provided by React.
-   We are using the functional component, so we are using the useState() Hook.
-   useState() returns an array of two values [State value, Setter function]

Interview Questions

1. How do you create a state in a functional component ?
   -When it comes to declaring state we use the useState() Hook
2. Explain the purporse of useState() Hook

# CH7 - Lazy Initial State

Whenever you have a bigger process which is going to give you the initial state value, & that you put it in a function - then instead of writing the function only - do make sure that your follow the lazy initialization.

Chapter 7 Questions:

1. Explain lazy initilization with useState() hook OR
2. What exactly is lazy initilization ?

-On every re-render the useState() hook is called and when you do not want to execute the initial methods, then you write a returning function inside useState() so that it does not call it on every re-render.
