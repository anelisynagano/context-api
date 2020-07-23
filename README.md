1. create a `UsersList.js` and a `User.js` components

2. create a `UserContext.js` context (don't forget to create a ***contexts*** folder)

3. on `UserContext.js` export a const UserContext that will have the value of createContext()

4. on `UserContext.js` create a `UserContextComponent.js` that will hold a state: `isUserOnline` which will be a boolean.

5. call `UserContext.Provider` and wrap it around `{this.state.children}`

6. pass a prop of `value` that will be an object on `UserContext.Provider` and this prop will be the value of our state.

7. on `App.js`, wrap our `UsersList` component with `UserContextComponent`

8. access the state on `User.js` with `useContext()`

9. don't forget to destructure the `useContext` object that will receive `UserContext` as an argument.

10. render 'user is online' if the state is `true` or 'user is offline' if the state is `false`

11. on `UserContext.js` create a method `handleClick` that will change the state of `isUserOnline` from true to false and vice-versa

12. pass this method to the context value

13. access `handleClick` from `User.js`, that will toggle the user status on a click of a button.