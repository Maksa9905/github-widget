import { useAppDispatch } from '#shared/hooks'
import { Routes, setRoute } from '#app/router/index.ts'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export type LinkProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'href'
> & {
  href: Routes
}

export const Link = ({ href, ...props }: LinkProps) => {
  const dispatch = useAppDispatch()

  const redirectTo = (route: Routes) => {
    dispatch(setRoute(route))
  }

  return (
    <a
      {...props}
      style={{
        display: 'block',
      }}
      onClick={() => redirectTo(href)}
    />
  )
}
