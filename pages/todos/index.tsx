import Link from 'next/link'
import React from 'react'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos = await data.json()

    return {
        props:{
            todos
        }
    }
    
}

type TodosProps= {  
    userId:number;
    id:number;
    title:string;
    completed:boolean;  
}

type Todos = {
todos: Array<TodosProps>
}
const index = ({todos}:Todos) => {
  return (
    <>
        {todos.map((todo)=> 
        <React.Fragment key={todo.id}>
        <h2>{todo.title}</h2>
        <Link href={`/todos/${todo.id}`}>Ir</Link>
        </React.Fragment>
        )}
    </>
  )
}

export default index