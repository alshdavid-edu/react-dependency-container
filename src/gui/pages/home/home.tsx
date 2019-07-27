import React, { useState } from 'react'
import { Toolbar } from '~/gui/components';
import { useStateSelector } from '~/gui/state';

export const Home = () => {
    const httpClient = useStateSelector(state => state.httpClient)
    const [ todos, setTodos ] = useState([])

    const fetchPosts = async () => {
      const results = await httpClient.get('https://jsonplaceholder.typicode.com/todos')
      setTodos(results.data)
    }

    return <div>
      <Toolbar>
        App name
      </Toolbar>
      <button 
        onClick={fetchPosts}>
        Get Posts
      </button>
      { 
        todos.map((todo: any) => 
        <div 
          key={todo.id}>
          {todo.title}
        </div>)
      }
    </div>
}
