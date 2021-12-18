import { useRecoilValue} from 'recoil'
import { todosState } from './store/todos'

export const TodoList = () => {
  const todos = useRecoilValue(todosState);

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </div>
  )
}