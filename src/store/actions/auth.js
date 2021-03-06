import * as actionTypes from "./actionsTypes"

import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let urlDefault = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7mr9OKr2lgxuyfR4pWCZzIaYxKMskS40"

        if (!isSignup) {
            urlDefault = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7mr9OKr2lgxuyfR4pWCZzIaYxKMskS40"
        }

        axios.post(urlDefault,
            authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })

    }
}