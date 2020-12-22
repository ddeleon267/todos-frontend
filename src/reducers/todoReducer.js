export default (state = {todos: [], loading: false}, action) => {
    switch(action.type){
        case("LOADING_TODOS"):
            return {...state, loading: true}
        case ("TODOS_LOADED"):
            debugger
            return { ...state, loading: false, todos: action.payload }
        default:
            return state
    }    
}