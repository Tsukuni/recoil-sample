import { useRecoilState } from 'recoil'
import { useRef } from 'react'
import { todosState } from './store/todos' 
import { FormEventHandler } from 'react'

export const TodoForm = () => {
  const inputRef = useRef<any>()
  const [,setTodos] = useRecoilState(todosState)
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    
    setTodos((oldState) => [...oldState, { 
      title: inputRef.current.value
    }])
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" ref={inputRef} />
      <button type="submit">送信</button>
    </form>
  )
}