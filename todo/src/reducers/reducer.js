export const initialState = [
    {
        item: "Go for a jog",
        completed: false,
        id: 1
    },
    {
        item: "Meditate",
        completed: false,
        id: 2
    },
    {
        item: "Read a book",
        completed: false,
        id: 2
    } 
]

export const todoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "WRITE_SOMETHING_HERE":
            return {
            
            }
    }
}