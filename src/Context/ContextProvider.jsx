import React , { useState } from 'react'
import UserContext from "./UserContext.js";


// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({ name: 'John Doe', age: 30 });
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextProvider;