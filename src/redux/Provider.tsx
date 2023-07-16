'use client'

import { Provider } from 'react-redux'
import { store } from './store'

type propTypes = {
    children: React.ReactNode
}

export function ReduxProvider({ children }: propTypes) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}