import { ACTION_CLICKED_FAVORITE } from "../actions/photos"

export const initialState = {
    favorite:[]
}

export const favoriteReducer = (state=initialState, action)=>{
    if(action.type === ACTION_CLICKED_FAVORITE){
        const hasItem = state.favorite.filter((item)=> item === action.clicked).length > 0
        console.log(hasItem, state.favorite)
        if(hasItem){
            //hasItem true면 있으니까 빼줘야함.
            return {
                ...state,
                favorite: state.favorite.filter((item)=>item !== action.clicked)
            }
        }
        return {
            ...state,
            favorite:state.favorite.concat([action.clicked]) //concat말고 push하는 방법도 존재함. 
        }
    }
    return {
        ...state
    }
}