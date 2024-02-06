import { createSlice} from '@reduxjs/toolkit'
const initialstate={
    todos:[{id:1,text:"hello world"}]

}
export const todoSlice=createSlice({
    name:'todo',
    initialState:initialstate,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                //generate unique id
                id:Math.random()*100+200,
                text:action.payload

            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=> {
          state.todos = state.todos.filter((item)=> item.
         id !== action.payload)

    },
}

})
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer;

