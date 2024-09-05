import { createSlice } from '@reduxjs/toolkit';

interface userProps {
    id: string;
    firstName: string;
    lastName: string;
    image?: string;
    [prop: string]: string | boolean | number | undefined;
}

interface actionsProps {
    payload: userProps;
}

export interface userStateProps {
    loading?: boolean;
    logged: boolean;
    user: userProps;
}

const initState: userStateProps = {
    loading: true,
    logged: true,
    user: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        image: ''
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        set(state, { payload }: actionsProps) {
            state.user = payload;
            state.loading = false;
            state.logged = true;
        },
        remove(state) {
            /* axios.post(`${config.api_url}user/revoke-token`, {
                withCredentials: true
            }); */

            state.logged = false;
            state.user = {
                id: '',
                email: '',
                firstName: '',
                lastName: '',
                image: ''
            };

            window.location.assign('/');
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
