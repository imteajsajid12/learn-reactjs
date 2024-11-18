# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Usage

Run with `pnpm dev`
# React  Context Api

-- Context API is a React feature that allows you to share data across components without having to pass props down the component tree. It provides a way to manage global state and share data between components without having to pass props down the component tree.

## props dealing
-- Props are a way to pass data from a parent component to a child component. They are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component.
## create a context 
-- To create a context, you need to use the React.createContext() function. This function returns an object with two properties: Provider and Consumer. The Provider is used to provide the data to the components that need it, and the Consumer is used to consume the data.
### Create folder src/context/UserContext.js

```javascript
import React, { createContext } from 'react';
const UserContext = createContext();

export default UserContext;
```

### Context give us a provider and consumer
#### Now create a provider
#### context/UserProvider.jsx


```javascript

```