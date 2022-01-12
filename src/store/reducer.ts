import { combineReducers } from 'redux'

import commentsReducer from './comments/commentSlice'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    comments: commentsReducer,
})

export default rootReducer