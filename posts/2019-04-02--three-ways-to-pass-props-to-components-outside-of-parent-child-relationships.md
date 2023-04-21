---
title: "Three Ways to Pass Props to Components Outside of Parent/Child Relationships"
layout: post
image: /assets/images/posts/2019/props.png
tags: [React]
---

> It is really late here on the East Coast but I have been wanting to get this out for weeks now. If there are any errors or wrong examples/logic, you can edit this post on GitHub. All suggestions welcome.

---

React excels at urging users to use a to use top down data flow for getting state passed between components. This is usually done in a parent/child relationship in a tree of elements.

But what if I want to pass data to and from components *not in* a parent/child relationship?

---

# Ways to pass the data around the tree

## Render prop

The first way you can pass data around the tree is by using a **render prop**. What is a **render prop**?

> A render prop is a function prop that a component uses to let React know what to render.

You are already familiar with a **render prop**: the `children` prop is also a render prop.

> Another way to utilize the render props pattern is with React’s children prop. If you’ve never used props.children before, it’s just like any other prop, accept instead of you passing it explicitly to the component, React automatically does it for you and it reference whatever is in the body of the component.
> — [Tyler McGinnis](https://tylermcginnis.com/react-render-props/)

### Render prop example

Here's an example[^1] of a render prop in action:

```js{3,15}

class User extends React.Component {
  // render prop function
  addUser = () => {
   // add new user from some api
  }
  render() {
    return (
      this.props.children(this.addUser)
    );
  }
}

<User>
  // passing the addUser function as a prop
  // or "render prop" ✅
  {addUser =>
    <AddUserButton onclick={addUser} />
  }
</User>
```

This is basically passing a callback function as a prop. That's it.

## Higher-Order Components (HOCs)

> A higher order component is a function that takes and returns a new component

Components will transform props into UI. In this case, a HOC transforms a component into another component.

Take this example:

```js
// A wrapper component
const WrapperComponent = ({
  username,
  ...otherProps
}) => (
  <div {...otherProps}>
    Username: {username}.
  </div>
);
// A new, enhanced component that will set a name prop
// on a base component to "New Name"
const withChangedUsername = WrapperComponent => props => (<WrapperComponent {...props} username="bored potato"/>);

const EnhancedComponent = withChangedUsername(WrapperComponent);
```

## Using the React Context API

The Context API is a way to pass props to other components in the tree without needing to pass those props down to *every* component in the tree. The data can be considered *global*.
You can create a new Context like so:

```js
const MyContext = React.createContext(defaultValue);
```

You can pass props down to other components implicitly with the `<Provider>` and `<Consumer>` components in the API.

The `<Provider>` component provides the context of whatever data you're passing. The `<Consumer>` component subscribes to any changes being passed from the `<Context>` component.

### Styled-components library example

One of the most popular methods of using `Context` globally is for theming.

Here is an example of theming using React's Context API in the `styled-components` library:

```js
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white"
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

render(
  // provider component
  <ThemeProvider theme={theme}>
    <div>
      <Button>Default Theme</Button>

      <ThemeProvider theme={invertTheme}>
        <Button>Inverted Theme</Button>
      </ThemeProvider>
    </div>
  </ThemeProvider>
);
```
## Use each of these patterns sparingly

There are [pros and cons](https://pawelgrzybek.com/cross-cutting-functionality-in-react-using-higher-order-components-render-props-and-hooks/) to these patterns. It is best to use whatever pattern is best for your project.

[^1]: A contrived example but an example nonetheless
