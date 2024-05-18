import {atom} from 'recoil';

export const counterState = atom({
    key:'MAIN/COUNTER', //아무 값이나 들어가도 됨.
    default:0,
})