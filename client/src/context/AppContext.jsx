import { Children, createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(true); // checks user loged in or loged out
    const value = {
        user, setUser
    }
    return (
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider