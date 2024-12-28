import { useAppSelector } from '#shared/hooks'
import { Routes, selectRoute } from '#shared/router'

export const Router = () => {
  const route = useAppSelector(selectRoute)

  switch (route) {
    case Routes.home:
      return <h1>Home</h1>
    case Routes.about:
      return <h1>About</h1>
  }
}
