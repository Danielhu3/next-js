import Link from "next/link"

export async function getStaticProps(context:any) {
    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

    const todo = await data.json()

    return {
        props:{todo}
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()

    const paths = data.map((todo:any)=>{
        return{
            params:{
                todoId: `${todo.id}`
            }
        }
    })

    return {paths, fallback:false}
}
const TodoId = ({todo}:any) => {


  return (
    <>
    <Link href={'/todos'}>Voltar</Link>
    <h2>todoId:{todo.id} : {todo.title}</h2>
    </>
  )
}

export default TodoId