import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Filter {
    search: string
    activeFilter: string
}

const initialState: Filter = {
    search: '',
    activeFilter: 'Все',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeActiveFilter(state, action: PayloadAction<string>) {
            state.activeFilter = action.payload
        },
        changeSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
    },
})

export const { changeActiveFilter, changeSearch } = filterSlice.actions
export default filterSlice.reducer
