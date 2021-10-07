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
