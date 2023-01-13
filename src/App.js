import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadTodos } from './actions'; 


function App() {

  const todos = useSelector(state => state.todos)

  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  const handleDelete = (index) =>{
    dispatch({
        type:'delete',
        payload:index
    })
}

  

  return (
   <div>
      {loading ? 'LOADING.....' : 
        (todos.map((item, index)  => {
            return(
              <div className='post'>
                <h1>Post</h1>
                <h2>{item.title}</h2>
                <button onClick={() => handleDelete(index)}>X</button>
              </div>
            )
        }))}  
   </div>
  );
}

export default App;
