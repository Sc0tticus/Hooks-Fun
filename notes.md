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
