import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import exp from 'constants'

type initialStateType = {
    title: string,
    content: string,
    id: string
}

const initialState = {
    title: "This is test title",
    content: "This is test content",
    id: "12345"
} as initialStateType

export const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setContent: (state, action: PayloadAction<string>) => {
            state.content = action.payload
        },
        reset: (state) => {
            state = initialState
        }
    }
})


export const { setTitle, setContent, reset } = post.actions
export default post.reducer