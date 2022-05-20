import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Filter {
    activeFilter: string
    search: string
}

const initialState: Filter = {
    activeFilter: 'Все',
    search: '',
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
