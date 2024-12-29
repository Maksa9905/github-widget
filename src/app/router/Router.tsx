import { useAppSelector } from '#shared/hooks'
import { routes, selectRoute } from '#app/router/index.ts'
import { HomePage } from '#pages/HomePage'

export const Router = () => {
  const route = useAppSelector(selectRoute)

  switch (route) {
    case routes.home:
      return <HomePage />
  }
}
