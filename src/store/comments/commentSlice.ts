import { CommentType } from "../../components/NewComment";

const initialState: CommentType[] = [];

export interface actionType {
    type: string,
    title: string,
    comment: string,
}

export default function commentsReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case 'ADD_COMMENT': {
            // Can return just the new todos array - no extra object around it
            return [
                ...state,
                {
                    title: action.title,
                    text: action.comment,
                }
            ]
        }
        default:
            return state
    }
}
