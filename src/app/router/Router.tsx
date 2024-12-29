import { useAppSelector } from '#shared/hooks'
import { routes, selectRoute } from '#app/router/index.ts'
import { Link } from '#shared/ui'
import { HomePage } from '#pages/HomePage'

export const Router = () => {
  const route = useAppSelector(selectRoute)

  switch (route) {
    case routes.home:
      return <HomePage />
    case routes.about:
      return (
        <div>
          <h1>About</h1>
          <Link href={routes.home}>to home</Link>
          <Link href={routes.login}>to login</Link>
        </div>
      )

    case routes.login:
      return (
        <div>
          <h1>Login</h1>
          <Link href={routes.home}>to home</Link>
          <Link href={routes.about}>to about</Link>
        </div>
      )
  }
}
