import { createSlice } from '@reduxjs/toolkit'

interface Filter {
    activeFilter: string
}

const initialState: Filter = {
    activeFilter: 'Все',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeActiveFilter(state, action) {
            state.activeFilter = action.payload
        },
    },
})

export const { changeActiveFilter } = filterSlice.actions
export default filterSlice.reducer
