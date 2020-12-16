import types from '../Actions/types'

const initState = []

export default function mangaReducer(state=initState,action){
    switch(action.type){
        case types.FETCH_MANGAS:{
            return action.payload
        }
        default:return state
    }
}