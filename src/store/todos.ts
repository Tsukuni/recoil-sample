import { atom, selector } from 'recoil'

export const todosState = atom<{ title: string}[]>({
  key: 'todos',
  default: [{
    title: 'やることリスト'
  }]
})