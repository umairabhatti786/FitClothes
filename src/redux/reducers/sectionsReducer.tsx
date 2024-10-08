import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface SectionState {
  sectionIndex:number,
  
}
export const initialState: SectionState = {
  sectionIndex:0
};
const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSectionIndex: (state, {payload}: PayloadAction<number>) => {
      state.sectionIndex = payload;
    },
  
  },
});

export const {setSectionIndex} = sectionSlice.actions;
export default sectionSlice.reducer;
export const getSectionIndex = (state: RootState) => state?.sections?.sectionIndex;

