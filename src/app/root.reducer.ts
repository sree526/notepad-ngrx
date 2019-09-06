export interface Node{
    notes:string;
    notesTitle:string;
    timestamp:Date;
    id:number;
};
export const initialState:Node[]=[];
export const selectedNode = null;
export function reducer(state=initialState,action){
    switch(action.type){
        case 'CREATE_NODE':
        return state.concat(action.payload);
        case 'DELETE_NODE':
        return state.filter(node => node.id != action.payload.id);
        case 'UPDATE_NODE':
        let index = state.map(node => node.id)
                        .indexOf(action.payload.id);

            return [
              ...state.slice(0, index),
              Object.assign({}, state[index], action.payload),
              ...state.slice(index + 1)
            ]
        case 'SEARCH_NOTES':
        return state.filter(node => node.notes.substr(action.payload));
        default:
        return state;
    }
}
export function selectNodeReducer(state=selectedNode,action){
    switch(action.type){
        case 'SELECTED_NODE':
       return Object.assign({},state,action.payload);
        default:
        return state;
    }
}