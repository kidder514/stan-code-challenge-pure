import { createSlice } from '@reduxjs/toolkit';
import { getProgramList } from '../api/program';
import { Program } from '../type';
import { RootState } from '.';

export interface ProgramListStateInterface {
    isLoading: boolean,
    data: Program[],
    isError: boolean,
    indexSelected: number | undefined,
}

const initialState: ProgramListStateInterface = {
    isLoading: true,
    data: [],
    isError: false,
    indexSelected: undefined
}

const programListSlice = createSlice({
    name: 'programList',
    initialState,
    reducers: {
        moveLeft: (state) => {
            state.indexSelected !== undefined && state.indexSelected > 0 ? state.indexSelected-- : state;
        },
        moveRight: (state) => {
            state.indexSelected !== undefined && state.indexSelected + 1 < state.data.length ? state.indexSelected++ : state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProgramList.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getProgramList.fulfilled, (state, action) => {
            const id = action.meta.arg;
            state.isLoading = false;
            state.data = action.payload;
            state.indexSelected = id ? state.data.findIndex(program => program.id == parseInt(id)) : 0;
        })
        builder.addCase(getProgramList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
});

export const selectProgramList = (state: RootState) => state.programList;
export const { moveLeft, moveRight } = programListSlice.actions;
export default programListSlice.reducer