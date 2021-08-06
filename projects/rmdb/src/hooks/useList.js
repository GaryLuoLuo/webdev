/**
type UseListResultT = {
  data: T,
  set: (values: T[]) => void,
  add: (value: T) => void,
  update: (id: string, changes: T) => void,
  remove: (id: string) => void,
}
const useList = (initialValue: T): UseListResultT => {}
**/
import {useState, useCallback} from 'react'
export const useList = (initialValue) => {

  const [list, setList] = useState(initialValue)

  const set = useCallback(x => setList(x), [])

  const add = (item) => {
    setList([...list, item])
  }
  const update = (updatedItem) => {
    setList(
      list.map(item => item.id === updatedItem.id ? updatedItem : item)
    )
  }
  const remove = (deletedItem) => {
    setList(list.filter(item => item.id !== deletedItem.id))
  }
  return {data:list, set, add, update, remove}
}
