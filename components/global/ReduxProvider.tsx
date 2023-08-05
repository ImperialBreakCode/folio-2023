'use client'

import folioStore from "@/state/store";
import { ReactNode } from "react"
import { Provider } from "react-redux";

type ProviderProps = {
    children: ReactNode;
}

const ReduxProvider = ({ children } : ProviderProps) => {
    return <Provider store={folioStore} >{children}</Provider>
}

export default ReduxProvider;