/*
 * @Author: SiYuan Wang 
 * @Date: 2018-06-04 11:39:01 
 * @Last Modified by: SiYuan Wang
 * @Last Modified time: 2018-06-04 12:10:30
 */
/// <reference path="interfaces.ts" />

const initialState: App.stateTypes = {
    demoString: '',
    isError: false
};

export default {
    namespace: 'app',
    state: initialState,
    effects: {
    },
    reducers: {
        showError (state: App.stateTypes) {
            return { ...state, isError: true };
        }
    }
};

