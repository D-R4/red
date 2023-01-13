export const loadTodos = () => {
    return (dispatch) => {
        dispatch({ type: 'start/todos'})

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
        
    }
}