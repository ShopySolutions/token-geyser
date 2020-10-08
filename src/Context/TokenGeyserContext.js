import React, {createContext, useState} from 'react'

const initialState = {};

export const TokenGeyserContext = createContext(initialState)


export const TokenGeyserProvider = ({children}) => {
    const [openAccountPopup, setOpenAccountPopUp] = useState(false)
    const [connected, setConnected] = useState(false)
    const [connectedName, setConnectedName] = useState('')


    return (
        <TokenGeyserContext.Provider
            value={{
                openAccountPopup,
                setOpenAccountPopUp,
                connected,
                setConnected,
                setConnectedName, connectedName
            }}
        >{children}</TokenGeyserContext.Provider>
    )
}