# useRef and useEffect Seem like code smells

Look I am not on the React team, nor am I smart enough to be. I also don't know what kind of heuristics they went with in order to create the library but something feels hacky to me while reading about `useRef()` and `useEffect()`.

Why should a well designed library need such escape hatches? So we can't technically manipulate the DOM without `useRef()` and we should only access those DOM nodes that React has not rendered and we need to render components only on mount, and if we don't pass an empty array or dependency as an argument to the `useEffect()` hook we fall into an infinite loop? This just seems like bad design and I look forward to reading more about it. You should not need to pass a dependency array to a function so that it won't freeze up your app.






