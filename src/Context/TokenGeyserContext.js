import React, {createContext, useState} from 'react'

const initialState = {};

export const TokenGeyserContext = createContext(initialState)


export const TokenGeyserProvider = ({children}) => {
    const [openAccountPopup, setOpenAccountPopUp] = useState(true)


    return (
        <TokenGeyserContext.Provider
            value={{
                openAccountPopup,
                setOpenAccountPopUp
            }}
        >{children}</TokenGeyserContext.Provider>
    )
}