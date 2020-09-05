import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import { dispatch } from 'redux';

const slice = createSlice({
    name: 'transactions',
    initialState:{
        list:[],
        loading: false,
        lastFetch: null
    },
    reducers: {
        transactionsRequest: (transactions, action) => {
            transactions.loading = true;
        },

        transactionsReceived: (transactions, action) => {
            transactions.list = action.payload;
            transactions.loading = false;
        },

        transactionsFailed: (transactions, action) => {
            transactions.loading = false;
        },

        transactionsAdded: (transactions, action) => {
            transactions.list.push(action.payload);
        }
    }
});

export const {
    transactionsAdded,
    transactionsFailed,
    transactionsReceived,
    transactionsRequest
} = slice.actions;

export default slice.reducer;

const url = 'transactions';

export const loadTransaction = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: transactionsRequest.type,
            onSuccess: transactionsReceived.type,
            onError: transactionsFailed.type
        })
    )
}

export const addTransaction = data => (dispatch) => {
    data.id = Math.random();
    data.transactionDate = new Date().getTime();
    data.transactionType = "Online Transfer";
    data.merchantLogo = 'https://grupohonor.com.br/wp-content/uploads/2015/10/Logo-Default.png'
    return dispatch(apiCallBegan({
        url,
        method: "post",
        data,
        onSuccess: transactionsAdded.type
    }));
}
