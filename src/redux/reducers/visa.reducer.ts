import { createSlice } from '@reduxjs/toolkit';

interface actionsProps {
    payload: {
        step: 1 | 2 | 3 | 4;
        [x: symbol | string]: string | number | boolean;
    };
}

interface VisaStepsProps {
    step1: {
        [x: symbol | string]: string | number | boolean;
    };
    step2: {
        [x: symbol | string]: string | number | boolean;
    };
    step3: {
        [x: symbol | string]: string | number | boolean;
    };
    step4: {
        [x: symbol | string]: string | number | boolean;
    };
}

const initialState: VisaStepsProps = {
    step1: {},
    step2: {},
    step3: {},
    step4: {}
};

const visaSlice = createSlice({
    name: 'visa',
    initialState,
    reducers: {
        set(state, { payload }: actionsProps) {
            state[`step${payload.step}`] = payload;
        }
    }
});

export const visaActions = visaSlice.actions;

export default visaSlice.reducer;
