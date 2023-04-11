import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        contacts: [],
        filter: "",
    },
    reducers: {
        add(state, { payload }) {
            return {
                ...state,
                contacts: [...state.contacts, payload],
            }
        },
        remove(state, { payload }) {
            return {
                ...state,
                contacts: state.contacts.filter((el)=> el.id !== payload),
            }
        },
        changeFilter: {
            reducer(state, { payload }) {
                return {
                    ...state,
                    filter: payload,
                }
            },
            prepare(event) {
                return {payload: event.target.value,}
            }
        }
    }
})

export const { add, remove, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;