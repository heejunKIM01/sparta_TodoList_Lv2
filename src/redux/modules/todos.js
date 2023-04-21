const ADD_TITLE = 'ADD_TITLE'
const COMPLETE_TODO = 'COMPLETE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const CANCEL_TODO = 'CANCEL_TODO'


export const add_title = (payload)=>{
    return {type : ADD_TITLE, payload : payload}
}

export const complete_todo = (payload) => {
    return {type : COMPLETE_TODO, payload : payload}
}

export const delete_todo = (payload) => {
    return {type : DELETE_TODO, payload : payload}
}

export const cancel_todo = (payload) => {
    return {type : CANCEL_TODO, payload : payload}
}

const initialState = {
    todos :[
        { id: 1, title: '리액트', comment : '리액트 마스터하기', isDone : false },
        { id: 2, title: '리덕스', comment : '리덕스 공부하기', isDone : false}
    ]
}
    
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TITLE:
            return{ 
                ...state,
                todos : [...state.todos, action.payload]
            }

        case DELETE_TODO:
            // console.log(action.payload)
            return{
                ...state,
                todos : action.payload
            }

        case COMPLETE_TODO:
            // console.log(action.payload)
            return{
                ...state,
                todos : action.payload
            }

        case CANCEL_TODO:
            // console.log(action.payload)
            return{
                ...state,
                todos : action.payload
            }
            
        default:
            return state;
    }
};

export default todos;