# RMDb - React Movie Database

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure

Exercise prompts will be inside the `/exercises` folder. Your work will primarily take place inside `/src`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

====
array and object destructuring

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com/

---

react checks if my props has changed? if my state has changed?
  No, then I'm not doing anything

* example: nothing changed when clicks:

const [items, setItems] = useState([])
const handleClick = () => {
  items.push((items.length + 1).toString())
  setItems(items)
}

* solution: spread it out by ...

const handleClick = () => {
  setItems([...items, (items.length + 1).toString()])
}

* explanation:

const arr2=[1,2,3]
const copy=[...arr2]
const doubleArr2 = [...arr2, ...arr2.reverse()]

JSON.stringify(arr2) === JSON.stringify(copy)

(push, pop mutates arrays, a bit slower)

---
React does not implicitly use props, so className must be passed down from react components to html elements, in order to use it.
<Section className=?>  X
<section className=?>  Y

functions drilling down, on the root, call it handleXXX, and the others called onXXX
(causing disconnect issue)

---
position: absolute
the element is removed from the flow of the document and other elements will behave as if it’s not even there

---
suggested handle function format:
<button onClick={handleClick} />
or
<button onClick={(e) => e.target.value}

---
list.map( e => e+1)
or
list.map( e => {return e+1})

---
className use xxx-yyy format
---
input with required

label:not(.radio-label) {
  display: block;
}

---
don't remove the movie from the UI until the server responds with a 200 OK

const handleSave = async (movie) => {
  await onSave(movie)
  setShowNew(false)
}

await 如果返回 non 2xx, 就throw error, 下面code不会执行
如果用try catch，error抓住了，下面还会执行

---
result is different: async/sync in useEffect, and multiple setState

(normal/sync) it runs all the way down, and bundle and render the page once, print setState/setState/render

(async) it waits every setState, and print render/setState/render/setState...

----
only functional component(return </>)  and  custom hooks(just a function with useXXX naming) can use useState in it

---
https://github.com/rehooks/awesome-react-hooks
https://github.com/enaqx/awesome-react

https://www.npmjs.com/package/crud-muffins
https://github.com/AndrewSouthpaw/crud-muffins/blob/master/src/index.js

---
unmounting logic -> return fn/callback in useEffect
as soon as component unmounts, it runs the fn
