import { defaultValues } from './defaultValues'
import { LocalStorage } from './types'

export const useLocalStorage = () => {
  const storage = Object.keys(defaultValues).reduce(
    (acc, key) => ({ ...acc, [key]: localStorage.getItem(key) }),
    {},
  ) as LocalStorage

  const setStorage = (data: LocalStorage) => {
    localStorage.setItem('storage', JSON.stringify(data))
  }

  return { storage, setStorage }
}
